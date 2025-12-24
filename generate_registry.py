import json
import os

files = [
    "BatteryIcon.tsx", "BatteryPauseIcon.tsx", "BookIcon.tsx", "BookmarkIcon.tsx",
    "BulbSvg.tsx", "CartIcon.tsx", "CheckedIcon.tsx", "CreditCard.tsx",
    "DoubleCheckIcon.tsx", "DownCheveron.tsx", "FilledBellIcon.tsx",
    "FilledCheckedIcon.tsx", "GearIcon.tsx", "Instagram.tsx", "LikeIcon.tsx",
    "LogoutIcon.tsx", "MagnifierIcon.tsx", "PenIcon.tsx", "PhoneVolume.tsx",
    "PlayerIcon.tsx", "QRCodeSVG.tsx", "QuestionMark.tsx", "RefreshIcon.tsx",
    "RightCheveron.tsx", "RocketIcon.tsx", "SendIcon.tsx", "ShieldCheck.tsx",
    "ShoppingCartIcon.tsx", "SimpleCheckedIcon.tsx", "SkullEmoji.tsx",
    "StadiumIcon.tsx", "TextIcon.tsx", "ToggleIcon.tsx", "TrashIcon.tsx",
    "TreeIcon.tsx", "WhatsappIcon.tsx"
]

items = []
for f in files:
    name = f.replace(".tsx", "")
    # Convert PascalCase to kebab-case
    kebab = ""
    for i, char in enumerate(name):
        if char.isupper():
            if i != 0:
                kebab += "-"
            kebab += char.lower()
        else:
            kebab += char
            
    # Special case for QRCodeSVG -> qr-code-svg (or similar)
    # My logic above: Q(0)R(1)C(2)odeSVG
    # q-r-code-s-v-g
    # That's probably not what we want.
    # Let's handle QRCodeSVG manually or improve logic.
    if name == "QRCodeSVG":
        kebab = "qr-code-svg"
    elif name == "BulbSvg":
        kebab = "bulb-svg"
    
    item = {
        "name": kebab,
        "type": "registry:ui",
        "registryDependencies": [],
        "dependencies": ["motion"],
        "devDependencies": [],
        "files": [
            {
                "path": f"icons/{f}",
                "type": "registry:ui"
            },
            {
                "path": "icons/types.ts",
                "type": "registry:ui"
            }
        ]
    }
    items.append(item)

registry = {
    "$schema": "https://ui.shadcn.com/schema/registry.json",
    "name": "motion-icons",
    "homepage": "https://github.com/abhijit123456/motion-icons",
    "items": items
}

print(json.dumps(registry, indent=2))
