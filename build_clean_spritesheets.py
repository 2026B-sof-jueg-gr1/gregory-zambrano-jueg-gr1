import os
from PIL import Image
from collections import deque
import numpy as np

def extract_clean_sheet(image_path, bg_color, segments, y_range, target_size=(250, 250), char_target_height=200):
    im = Image.open(image_path).convert('RGB')
    w, h = im.size
    pixels = np.array(im, dtype=np.float32)
    bg_np = np.array(bg_color, dtype=np.float32)
    dist = np.sqrt(np.sum((pixels - bg_np)**2, axis=2))
    
    # Border flood-fill
    visited = np.zeros((h, w), dtype=bool)
    q = deque()
    
    # Outer boundaries within y_range
    for x in range(w):
        if dist[0, x] < 9.0:
            visited[0, x] = True
            q.append((0, x))
        if dist[h - 1, x] < 9.0:
            visited[h - 1, x] = True
            q.append((h - 1, x))
            
    for y in range(h):
        if dist[y, 0] < 9.0:
            visited[y, 0] = True
            q.append((y, 0))
        if dist[y, w - 1] < 9.0:
            visited[y, w - 1] = True
            q.append((y, w - 1))
            
    # BFS
    while q:
        cy, cx = q.popleft()
        for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            ny, nx = cy + dy, cx + dx
            if 0 <= ny < h and 0 <= nx < w:
                if not visited[ny, nx] and dist[ny, nx] < 8.0:
                    visited[ny, nx] = True
                    q.append((ny, nx))
                    
    # Also find enclosed pockets of background color (pixels with dist < 5.0)
    for y in range(y_range[0], y_range[1]):
        for x in range(w):
            if not visited[y, x] and dist[y, x] < 5.0:
                # Check if this component is a pure background pocket
                pocket_pixels = []
                pocket_q = deque([(y, x)])
                pocket_visited = set([(y, x)])
                is_pure_bg = True
                
                while pocket_q:
                    py, px = pocket_q.popleft()
                    pocket_pixels.append((py, px))
                    for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                        ny, nx = py + dy, px + dx
                        if 0 <= ny < h and 0 <= nx < w and (ny, nx) not in pocket_visited and not visited[ny, nx]:
                            if dist[ny, nx] < 7.0:
                                pocket_visited.add((ny, nx))
                                pocket_q.append((ny, nx))
                            elif dist[ny, nx] < 12.0 and dist[ny, nx] >= 7.0:
                                # Edge of pocket
                                pass
                            else:
                                pass
                                
                # If this pocket has at least 15 pixels and average dist < 4.0, mark as visited
                avg_d = np.mean([dist[py, px] for py, px in pocket_pixels])
                if len(pocket_pixels) > 15 and avg_d < 4.5:
                    for py, px in pocket_pixels:
                        visited[py, px] = True

    # Build RGBA
    rgba = np.zeros((h, w, 4), dtype=np.uint8)
    rgba[:, :, :3] = np.array(im, dtype=np.uint8)
    
    # Foreground is not visited, and within y_range
    is_fg = ~visited
    is_fg[:y_range[0], :] = False
    is_fg[y_range[1]:, :] = False
    
    rgba[:, :, 3] = np.where(is_fg, 255, 0).astype(np.uint8)
    
    fw, fh = target_size
    n_frames = len(segments)
    spritesheet = Image.new('RGBA', (fw * n_frames, fh), (0, 0, 0, 0))
    
    for i, (sx0, sx1) in enumerate(segments):
        seg_mask = is_fg[y_range[0]:y_range[1], sx0:sx1]
        if not np.any(seg_mask):
            continue
            
        ys, xs = np.where(seg_mask)
        min_y, max_y = ys.min() + y_range[0], ys.max() + y_range[0]
        min_x, max_x = xs.min() + sx0, xs.max() + sx0
        
        char_crop = rgba[min_y:max_y+1, min_x:max_x+1]
        char_im = Image.fromarray(char_crop, 'RGBA')
        
        # Scale proportionally to target height
        scale = char_target_height / char_im.height
        new_w = max(1, int(round(char_im.width * scale)))
        new_h = char_target_height
        
        char_scaled = char_im.resize((new_w, new_h), Image.Resampling.NEAREST)
        
        # Center horizontally, place feet at bottom y = fh - 15
        pos_x = i * fw + (fw - new_w) // 2
        pos_y = fh - new_h - 10
        spritesheet.paste(char_scaled, (pos_x, pos_y), char_scaled)
        
    return spritesheet

# 1. Eloy Alfaro
p_eloy = r'C:\Users\jhair\.gemini\antigravity-ide\brain\99ff13e6-24c2-414c-a428-abf4c0dd1d9f\eloy_spritesheet_1792796639643.jpg'
eloy_segments = [(77, 321), (387, 642), (697, 1033), (1063, 1318)]
sheet_eloy = extract_clean_sheet(p_eloy, [52, 51, 56], eloy_segments, (60, 595), (250, 250), char_target_height=200)
sheet_eloy.save(r'street-fighter2\assets\eloy_sheet.png')
print('Saved Eloy sheet to street-fighter2\\assets\\eloy_sheet.png', sheet_eloy.size)

# 2. Manuela Canizares
p_manuela = r'C:\Users\jhair\.gemini\antigravity-ide\brain\99ff13e6-24c2-414c-a428-abf4c0dd1d9f\manuela_spritesheet_1792796662829.jpg'
manuela_segments = [(36, 328), (356, 628), (651, 980), (986, 1313)]
sheet_manuela = extract_clean_sheet(p_manuela, [26, 26, 26], manuela_segments, (60, 640), (250, 250), char_target_height=200)
sheet_manuela.save(r'street-fighter2\assets\manuela_sheet.png')
print('Saved Manuela sheet to street-fighter2\\assets\\manuela_sheet.png', sheet_manuela.size)

# Clean up temporary test files
for f in ['street-fighter2/assets/frame0_raw.png', 'street-fighter2/assets/frame0_floodfill.png']:
    if os.path.exists(f):
        os.remove(f)
