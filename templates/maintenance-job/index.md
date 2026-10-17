---
# ── Required ────────────────────────────────────────────────────────────────
title: Oil & filter service
date: 2025-06-14            # YYYY-MM-DD, used for sorting (newest first)
category: Service           # Service | Repair | DIY | Detailing | Upgrade | Tyres | Inspection
summary: One or two sentences shown on the listing card and at the top of the page.
cover: ./photos/01-cover.jpg   # main image, must exist in this folder
coverAlt: Describe the cover photo for screen readers

# ── Optional (delete lines you don't need) ─────────────────────────────────
mileage: 42000              # km, number only
performedBy: DIY            # e.g. DIY, BMW dealer name, independent garage
cost: €180
products:
  - Castrol EDGE 0W-30 LL04, 7 l
  - Mann HU 6004 x oil filter
dateLabel: June 2025        # show this instead of the full date (the date still sorts)
sections:                   # group the gallery under headings (unlisted photos go last)
  - title: Before
    files: [01-cover.jpg]
captions:                   # gallery captions, keyed by file name in ./photos
  01-cover.jpg: The old filter coming out.
draft: true                 # true = only visible in `npm run dev`, hidden on the live site
---

Describe the job here in Markdown: why it was done, what was done and anything worth remembering
next time.

## What was done

- Step one
- Step two

## Notes

Torque specs, part numbers, things that went wrong, and so on.

<!-- To show an image inside the text (not in the gallery), keep it OUTSIDE ./photos:
![Alt text](./diagram.jpg) -->
