import os
from PIL import Image
from collections import deque
import numpy as np

def remove_background_and_extract_frames(image_path, bg_color, segments, y_range, target_size=(240, 240)):
    im = Image.open(image_path).convert('RGB')
    w, h = im.size
    pixels = np.array(im, dtype=np.float32)
    bg_np = np.array(bg_color, dtype=np.float32)
    
    # Color distance to background
    dist = np.sqrt(np.sum((pixels - bg_np)**2, axis=2))
    
    # Definitive background is dist < 8
    is_bg = dist < 8.0
    
    # Also ignore anything outside y_range (e.g. text labels at the bottom)
    is_bg[:y_range[0], :] = True
    is_bg[y_range[1]:, :] = True
    
    # Also clean up slight compression halo around edges (dist between 8 and 14 if adjacent to bg)
    halo = (dist >= 8.0) & (dist < 15.0)
    
    # RGBA image
    rgba = np.zeros((h, w, 4), dtype=np.uint8)
    rgba[:, :, :3] = np.array(im, dtype=np.uint8)
    
    # Alpha channel:
    alpha = np.where(is_bg, 0, 255).astype(np.uint8)
    
    # Smooth halo pixels
    halo_alpha = np.clip((dist - 8.0) / 7.0 * 255.0, 0, 255).astype(np.uint8)
    alpha[halo] = halo_alpha[halo]
    
    rgba[:, :, 3] = alpha
    
    fw, fh = target_size
    n_frames = len(segments)
    spritesheet = Image.new('RGBA', (fw * n_frames, fh), (0, 0, 0, 0))
    
    for i, (sx0, sx1) in enumerate(segments):
        # Frame mask
        seg_alpha = alpha[y_range[0]:y_range[1], sx0:sx1]
        if not np.any(seg_alpha > 50):
            continue
            
        ys, xs = np.where(seg_alpha > 50)
        min_y, max_y = ys.min() + y_range[0], ys.max() + y_range[0]
        min_x, max_x = xs.min() + sx0, xs.max() + sx0
        
        char_crop = rgba[min_y:max_y+1, min_x:max_x+1]
        char_im = Image.fromarray(char_crop, 'RGBA')
        
        # Scale to uniform fighting game frame height (~190px inside 240px frame)
        target_h = 190
        scale = target_h / char_im.height
        new_w = max(1, int(round(char_im.width * scale)))
        new_h = target_h
        
        char_scaled = char_im.resize((new_w, new_h), Image.Resampling.NEAREST)
        
        # Center horizontally and anchor feet at y = 225
        pos_x = i * fw + (fw - new_w) // 2
        pos_y = 225 - new_h
        spritesheet.paste(char_scaled, (pos_x, pos_y), char_scaled)
        
    return spritesheet

# 1. Process Eloy Alfaro
p_eloy = r'C:\Users\jhair\.gemini\antigravity-ide\brain\99ff13e6-24c2-414c-a428-abf4c0dd1d9f\eloy_spritesheet_1792796639643.jpg'
eloy_segments = [(77, 321), (387, 642), (697, 1033), (1063, 1318)]
sheet_eloy = remove_background_and_extract_frames(p_eloy, [52, 51, 56], eloy_segments, (60, 595), (240, 240))
out_eloy = r'street-fighter2\assets\eloy_sheet.png'
sheet_eloy.save(out_eloy)
print('Saved Eloy sheet to', out_eloy, sheet_eloy.size)

# 2. Process Manuela Canizares
p_manuela = r'C:\Users\jhair\.gemini\antigravity-ide\brain\99ff13e6-24c2-414c-a428-abf4c0dd1d9f\manuela_spritesheet_1792796662829.jpg'
manuela_segments = [(36, 328), (356, 628), (651, 980), (986, 1313)]
sheet_manuela = remove_background_and_extract_frames(p_manuela, [26, 26, 26], manuela_segments, (60, 640), (240, 240))
out_manuela = r'street-fighter2\assets\manuela_sheet.png'
sheet_manuela.save(out_manuela)
print('Saved Manuela sheet to', out_manuela, sheet_manuela.size)
