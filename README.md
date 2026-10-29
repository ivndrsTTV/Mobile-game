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
- **Face cam:** a portrait in the HUD with the health bar above it. Her expression reacts to the fight (calm, fierce when casting, a yelp when hit, beaming on a kill streak, scared or in pain at low health), her eyes follow where she runs, and injuries build up as her health drops: scratches, a band-aid, bruises, blood and a bandaged forehead.
- **Squads:** recruit Riflers, Gunners, Breachers, Marksmen, Grenadiers and Medics. Each one gets a name and hair color. They march in formation behind you, path around buildings and keep pace with you. Upgrade squad size and training.
- **18 missions:** downtown, suburbs, harbor, ironworks, shrine town, neon district, snowfield, hospital, desert, military base and the Hive, plus metro tunnels, sewers, a bunker and rooftops high above the city. Early missions are nest hunts; later ones stack quests:
  - **Rescue survivors:** find them, and they follow you back to the extraction point.
  - **Recover supply crates**, **restore a generator** (hold it while the infected swarm you; underground, it turns the lights back on), **kill the boss**, **destroy the nests**.
  - **Shelter defense:** protect civilians until a helicopter lands. You get a build phase and the shelter's own stockpile of fences, traps, sandbags and a turret; stranded soldiers stand guard, and you can put your squad on Hold to guard too.
  - Each mission ends with a final wave, an exit to reach (underground), or a helicopter to meet. A quest list sits at the top of the screen and an arrow points to the next objective.
- **Underground and rooftops:** generated tunnels with rail tracks, sewage channels, pillared platforms and flickering lamps, or rooftops joined by walkways with the city's lights far below.
- **Armory and fortifications:** buy sandbag, fence, spike trap and turret kits at base and carry them into missions. Tap Build to set one down in front of you: sandbag walls and fences stop the infected until they claw through, spike traps hurt and slow them, and turrets shoot them on their own. Upgrade turret power and barricade strength.
- **Sandbox:** any map, a fresh layout every time, and you can't lose. Spawn hordes, brutes, bosses, nests and extra soldiers.
- **God Mode:** infinite health, no cooldowns, one-hit kills, infinite supplies, all cities unlocked, plus sliders for damage (up to ×100), power size, move speed, attack speed, cooldowns, infected density and speed, and bonus squad slots.

## Art

Heroines and squad girls are pixel art generated in code; the infected are artist-made sprites.

- **Heroines and squad girls** are true pixel art: drawn from a posable skeleton at a low native resolution (about 110px tall) and shown at 2×, like the city tiles. Shapes are snapped to pixels and cel-shaded per part, with contact lines, selective outlines and a pass that removes stray pixels.
  - Anime proportions with five feminine builds (petite, slim, athletic, curvy, tall): narrow shoulders, a defined waist, wider hips, and different heights.
  - Front, back and side views (mirrored for left). Heroines idle, walk (8 frames), attack, cast powers with both hands, flinch, celebrate with a peace sign when a city is won, and sink to their knees when they fall.
  - Eyes are hand-placed pixels with white sclera around the iris, catchlights, and blink, wink, hurt, star and cat-slit variants.
  - The hair is one connected mass: cap, bangs, side locks, back hair, twin tails and animal ears.
  - Squad girls carry their class weapon (rifle, SMG, shotgun, sniper rifle, rocket launcher or pistol) in both hands, aim it at targets, and fire from the muzzle.
  - `tools/bake_heroines.js` pre-renders each heroine's sprite sheet, pixel portrait and full-body art into `assets/heroines/` so the game loads them instantly. Run it again after changing the renderer.
- **Infected** are artist-made sprites from the [Liberated Pixel Cup](https://opengameart.org/content/liberated-pixel-cup-lpc-base-assets-sprites-map-tiles) collection, composited into nine types: four walker looks, a runner, a spitter, a bloater, a brute and a horned troll boss. They walk in four directions, swipe when they attack and collapse when they die. See `CREDITS.md` for every artist and license; the sheets in `assets/infected/` are CC-BY-SA 3.0.
- **Nests and the city** use 64px art drawn at 2×. Tiles are built in 8×8-tile chunks as you approach them.
- Night lighting, and render resolution that drops automatically on slower phones.

Progress is saved in the browser.
