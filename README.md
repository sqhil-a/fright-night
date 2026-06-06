# MYAC Connect: Fright Night

Static GitHub Pages site and promotional material for the MYAC Connect Halloween event.

## Event Details

- Event: Fright Night
- Date: October 30th, 2026
- Time: 6:30-8:30 PM
- Theme: Halloween games, prizes, and snacks

## Files

- `index.html` - main website
- `styles.css` - website styling
- `script.js` - countdown timer
- `promo/post.html` - editable Instagram post source
- `promo/reel.html` - editable Instagram reel source
- `assets/fright-night-instagram-post.png` - exported Instagram post
- `assets/fright-night-instagram-reel.png` - exported Instagram reel
- `assets/` - generated artwork and exported promo images
- `tools/export-promos.js` - regenerates the promo PNG exports

## GitHub Pages

Deploy from the repository root. No build step is required.

## Regenerate Promo PNGs

After installing dependencies, run:

```bash
npm run export:promos
```
