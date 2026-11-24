"""Make responsive WebP files for the site.
Reads  images-original/<file>   writes  public/images/<name>-<width>.webp  and image-manifest.json
Run:  python3 scripts/optimize-images.py   (needs: pip install pillow)
Add a new photo = drop it in images-original/, add a line to MAP, re-run.
Photos are never enlarged: a small source keeps only the sizes it can reach, and
its native size is copied byte-for-byte when it is already WebP."""
from PIL import Image, ImageOps
import json, os, shutil

SRC, OUT = "images-original", "public/images"
WIDTHS = [480, 960, 1600]
MAP = {  # new name : original file
    "room-ac-wardrobe": "room-ac-wardrobe.webp",
    "room-wide": "room-wide.webp",
    "room-bed": "room-bed.webp",
    "bathroom": "bathroom.webp",
    "room-corner": "room-corner.webp",
    "corridor": "corridor.webp",
    "room-pillows": "room-pillows.webp",
    "room-fan": "room-fan.webp",
    "reception": "reception.webp",
    "room-blanket": "room-blanket.webp",
}

os.makedirs(OUT, exist_ok=True)
manifest = {}
for name, f in MAP.items():
    path = os.path.join(SRC, f)
    im = ImageOps.exif_transpose(Image.open(path)).convert("RGB")
    widths = [w for w in WIDTHS if w < im.width] + [im.width]
    manifest[name] = sorted(set(widths))
    for w in manifest[name]:
        dest = f"{OUT}/{name}-{w}.webp"
        if w == im.width and f.lower().endswith(".webp"):
            shutil.copyfile(path, dest)
        else:
            r = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS) if w != im.width else im
            r.save(dest, "WEBP", quality=80, method=6)
json.dump(manifest, open("image-manifest.json", "w"), indent=1)
print("done")
