#!/usr/bin/env python3
"""Generate MP4 video for Kensington Pro Fit Ergo Review 2026."""

import os
import subprocess
import tempfile
from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1280, 720
TEAL = "#0d9488"
WHITE = "#ffffff"
DARK = "#1a1a2e"

def get_font(size):
    """Try to load a nice font, fall back to default."""
    font_paths = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNSText.ttf",
        "/System/Library/Fonts/SFPro.ttf",
        "/Library/Fonts/Arial.ttf",
    ]
    for path in font_paths:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


def draw_centered_text(draw, text, y, font, fill):
    """Draw text centered horizontally at given y position."""
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    x = (WIDTH - tw) // 2
    draw.text((x, y), text, font=font, fill=fill)


def create_slide1():
    """Title slide: teal background, white text."""
    img = Image.new("RGB", (WIDTH, HEIGHT), TEAL)
    draw = ImageDraw.Draw(img)
    font_big = get_font(64)
    font_med = get_font(32)

    draw_centered_text(draw, "Kensington Pro Fit Ergo", 240, font_big, WHITE)
    draw_centered_text(draw, "Ergonomic Vertical Mouse Review 2026", 340, font_med, WHITE)

    # Decorative line
    draw.rectangle([440, 320, 840, 324], fill=WHITE)

    return img


def create_slide2():
    """Stats slide: white background, dark text."""
    img = Image.new("RGB", (WIDTH, HEIGHT), WHITE)
    draw = ImageDraw.Draw(img)
    font_title = get_font(40)
    font_stat = get_font(34)

    draw_centered_text(draw, "Key Specifications", 120, font_title, DARK)

    # Decorative line
    draw.rectangle([440, 185, 840, 189], fill=TEAL)

    stats = [
        "55 Degree Vertical Angle",
        "400 - 3200 DPI Range",
        "6 Programmable Buttons",
        "Wireless 2.4GHz Connection",
    ]
    y = 240
    for stat in stats:
        draw_centered_text(draw, stat, y, font_stat, DARK)
        y += 70

    return img


def create_slide3():
    """Score slide: teal background, white text."""
    img = Image.new("RGB", (WIDTH, HEIGHT), TEAL)
    draw = ImageDraw.Draw(img)
    font_big = get_font(72)
    font_med = get_font(36)

    draw_centered_text(draw, "Overall Score: 8.4/10", 240, font_big, WHITE)

    # Decorative line
    draw.rectangle([390, 340, 890, 344], fill=WHITE)

    draw_centered_text(draw, "Best Mid-Range Vertical Mouse", 380, font_med, WHITE)

    return img


def main():
    tmpdir = tempfile.mkdtemp()
    output_path = "/Users/openclaw/.openclaw/workspace-philly/vertical-mouse-site/public/videos/kensington-pro-fit-ergo-review-2026.mp4"

    slides = [create_slide1(), create_slide2(), create_slide3()]
    frame_paths = []
    for i, slide in enumerate(slides):
        path = os.path.join(tmpdir, f"frame_{i + 1}.png")
        slide.save(path)
        frame_paths.append(path)
        print(f"Saved frame: {path}")

    # Build ffmpeg command
    cmd = [
        "ffmpeg", "-y",
        "-framerate", "0.5",
        "-i", os.path.join(tmpdir, "frame_%d.png"),
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-r", "24",
        "-t", "6",
        "-b:v", "400k",
        "-maxrate", "400k",
        "-bufsize", "200k",
        output_path,
    ]

    print(f"\nRunning: {' '.join(cmd)}")
    result = subprocess.run(cmd, capture_output=True, text=True)

    if result.returncode != 0:
        print(f"ffmpeg stderr:\n{result.stderr}")
        raise RuntimeError("ffmpeg failed")

    size_bytes = os.path.getsize(output_path)
    size_kb = size_bytes / 1024
    print(f"\nOutput: {output_path}")
    print(f"File size: {size_kb:.1f} KB")

    if size_kb > 500:
        print("WARNING: File exceeds 500KB limit!")
    else:
        print("OK: File is under 500KB limit.")

    # Cleanup temp frames
    for p in frame_paths:
        os.remove(p)
    os.rmdir(tmpdir)


if __name__ == "__main__":
    main()
