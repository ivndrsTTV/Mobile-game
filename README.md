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
- **Animation:** heroines breathe and blink while idle, raise a hand to cast, and their hair, skirts and tails sway as they walk. The infected lunge when they attack and collapse when they die, and soldiers' guns kick back when they fire.
- **Squads:** recruit Riflers, Gunners, Breachers, Marksmen, Grenadiers and Medics. Each one gets a name and hair color. Upgrade squad size and training.
- **12 cities:** downtown, suburbs, harbor, ironworks, shrine town, neon district, snowfield, hospital, desert, military base and the Hive. Each has its own layout and look. Destroy every nest, then survive the final wave. Three cities have bosses.
- **Sandbox:** any map, a fresh layout every time, and you can't lose. Spawn hordes, brutes, bosses, nests and extra soldiers.
- **God Mode:** infinite health, no cooldowns, one-hit kills, infinite supplies, all cities unlocked, plus sliders for damage (up to ×100), power size, move speed, attack speed, cooldowns, infected density and speed, and bonus squad slots.

## Art

All art is pixel art generated in code, so the game stays a single HTML file. It renders at your screen's real resolution, with two levels of detail:

- **128 px: main characters.** The four heroines and the Boss. Heroines are built from a parametric figure with blunt hime-cut bangs, sidelocks and long hair, layered anime eyes, a sailor uniform with a pleated skirt, and a personal hair ornament. They have front and back views, four-frame walk cycles and 128×128 menu portraits.
- **64 px: everything else.** Infected, soldiers (with guns that rotate to aim), nests and the 64px city tiles, drawn at 2× next to the main characters.
- Colors use four-tone, hue-shifted ramps with dithered transitions, rim light and selective outlines.
- The city is built in 8×8-tile chunks as you approach them: cracked asphalt, manholes, crosswalks, curbs, detailed rooftops, layered trees and cars.
- Night lighting: the city is dark except around your heroine, muzzle flashes and lightning.
- If a device can't keep the frame rate up, the game lowers its render resolution automatically.

Progress is saved in the browser.
