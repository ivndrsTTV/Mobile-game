# Voltfall

A detailed pixel-art zombie game for phones. You play as one of four lightning-powered heroines with hime cuts, lead a squad of soldiers, and clear the infected out of 12 cities. It also has a sandbox mode and a God Mode panel where you can set your power as high as you like.

## Play it

- **In a browser:** open `index.html` from any web host, or locally.
- **Android APK:** every push builds `Voltfall.apk` and attaches it to the **apk-latest** release on this repo's Releases page. Download it on your phone and open it to install. The first time, Android asks you to allow installs from that app.
- **iPhone or Android without the APK:** host the folder (for example with GitHub Pages: Settings → Pages → deploy from branch) and open it in the browser, then choose **Add to Home Screen**. It runs fullscreen and works offline after the first load.

## Controls

| Touch | Keyboard | Action |
|---|---|---|
| Drag anywhere on the left side | WASD / arrows | Move |
| (automatic) | (automatic) | Your lightning hits the nearest infected |
| Yellow / pink / blue buttons | 1 2 3 or J K L | Your three powers (hold them to keep firing) |
| Follow / Hold | F | Your squad follows you or holds position |
| II | Esc | Pause and open God Mode |

## What's in it

- **8 heroines**, each with her own look, basic attack and starting powers:
  - Raiko (storm caller), Hayate (speedster), Shiden (railgun) and Kurenai (afterimages): hime-cut schoolgirls with lightning bolts
  - Mikan, a cat girl in a hoodie whose attack is a fast claw swipe
  - Shizuku, a battle maid who throws knives
  - Hoshimi, a star-eyed twin-tail idol who fires music notes
  - Kohaku, a fox-eared shrine maiden with homing foxfire
- **21 powers** you can put in any slot on any heroine:
  - Lightning and speed: Chain Lightning, Thunder Dash, Storm Field, Speed Force, Afterimages, Heaven's Judgment, Railgun, Blitz Barrage, Ball Lightning
  - Mikan: Static Pounce, Thunder Claws, Nine Lives
  - Shizuku: Knife Storm, Broom Sweep, Tea Time
  - Hoshimi: Encore!, Star Shower, Fan Club (charmed infected fight for you)
  - Kohaku: Fox Fire, Talisman Seal, Sacred Ward
- **Animation:** heroines face four directions, breathe and blink while idle, walk on an 8-frame cycle, reach out when they attack and flinch when hit. Squad girls walk, idle and aim. The infected idle, walk, swipe, spit, charge, slam and collapse.
- **Controls:** drag the left side to move. Drag the right side to aim and release to fire, Brawl Stars style, or leave auto-fire on. Drag a power button to aim that power.
- **Save slots:** three separate saves.
- **Squads:** recruit Riflers, Gunners, Breachers, Marksmen, Grenadiers and Medics. Each one gets a name and hair color. They march in formation behind you, path around buildings and keep pace with you. Upgrade squad size and training.
- **12 cities:** downtown, suburbs, harbor, ironworks, shrine town, neon district, snowfield, hospital, desert, military base and the Hive. Each has its own layout and look. Destroy every nest, then survive the final wave. Three cities have bosses.
- **Sandbox:** any map, a fresh layout every time, and you can't lose. Spawn hordes, brutes, bosses, nests and extra soldiers.
- **God Mode:** infinite health, no cooldowns, one-hit kills, infinite supplies, all cities unlocked, plus sliders for damage (up to ×100), power size, move speed, attack speed, cooldowns, infected density and speed, and bonus squad slots.

## Art

Heroines and squad girls are pixel art generated in code; the infected are artist-made sprites.

- **Heroines and squad girls** are drawn from a posable skeleton as smooth shapes (hair, face, outfits, limbs), then snapped to crisp pixels and cel-shaded per part, with rim light, contact lines and selective outlines.
  - Anime proportions with five body builds (petite, slim, athletic, curvy, tall) that change height, shoulders, waist, hips and legs.
  - Front, back and side views (mirrored for left), idle, walk, attack and hurt poses.
  - Eyes are drawn as shapes too: lash line with a flick, shaded iris, pupil, catchlights, and variants for star pupils, cat slits and blinking.
  - The hair is one connected mass: cap, bangs, side locks, back hair and animal ears.
  - Because every feature is a shape, the same girl renders as a sprite or a large illustration. `tools/bake_heroines.js` pre-renders each heroine's sprite sheet, portrait and full-body art into `assets/heroines/` so the game loads them instantly. Run it again after changing the renderer.
- **Infected** are artist-made sprites from the [Liberated Pixel Cup](https://opengameart.org/content/liberated-pixel-cup-lpc-base-assets-sprites-map-tiles) collection, composited into nine types: four walker looks, a runner, a spitter, a bloater, a brute and a horned troll boss. They walk in four directions, swipe when they attack and collapse when they die. See `CREDITS.md` for every artist and license; the sheets in `assets/infected/` are CC-BY-SA 3.0.
- **Nests and the city** use 64px art drawn at 2×. Tiles are built in 8×8-tile chunks as you approach them.
- Night lighting, and render resolution that drops automatically on slower phones.

Progress is saved in the browser.
