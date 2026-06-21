# 11 Foot 8 - Canopener Bridge Crash Reel Wallpaper

This folder is a Wallpaper Engine web wallpaper for the 11foot8+8 Canopener Bridge in Durham, NC.

## Import

1. Open Wallpaper Engine.
2. Choose **Create Wallpaper**.
3. Choose **Web**.
4. Select `index.html` from this folder.
5. Save/apply the project.

The default playback mode is **Crash archive reel (YouTube)**. It plays a curated yovo68 crash compilation reel and skips ahead past the intro portion on known videos.

The default archive source is **Crash compilation reel**. It cycles through 25 official yovo68 archive clips in sequence, using each video's verified duration to move to the next one. With intro skips enabled, the reel is about 32 minutes before it loops.

For a no-video local mode, switch **Playback mode** to **Local still image (safe)**. That mode uses the bundled bridge photo at `assets/bridge-still.jpg`.

The custom fallback video ID defaults to the 2020 compilation:

```text
-CmDZ-oEtB0
```

That compilation is 159 seconds long, so the default custom fallback will not loop immediately.

Switch **Archive source** to **Custom video ID** if you want to always use that ID, or paste any other yovo68 video ID into **Custom archive YouTube video ID**. Use **Custom video start seconds** to skip ahead on custom videos.

## Wallpaper Engine Settings

- **Playback mode**: crash archive reel, or local still image.
- **Video fit**: crop to cover the screen, or show the full YouTube/still-image frame.
- **Archive source**: crash compilation reel, random verified 30s+ yovo68 video, or your custom fallback video ID.
- **Auto-rotate archive videos**: swaps to a different random archive video after the configured interval. The crash compilation reel advances automatically by clip duration.
- **Archive rotation minutes**: how long each random archive video stays up before rotating.
- **Skip video intros**: starts known yovo68 clips a few seconds in so the reel gets to the bridge action faster.
- **Custom video start seconds**: intro skip amount for custom video IDs.
- **Enable YouTube controls**: allows clicking the embedded player when you want controls.
- **Show all overlay**: master switch for the title, clock, and info strip.
- **Overlay preset**: quick styles for compact, clean, info, minimal, full, cinema, or custom slider control.
- **Overlay position**: split top/bottom layout, or dock the overlay in any screen corner.
- **Show title / clock / info strip**: hide individual overlay pieces.
- **Overlay opacity**: fades only the UI, not the video.
- **Panel opacity**: changes the clock/info strip backing panels.
- **UI scale**: resizes the overlay.
- **Edge padding**: moves the overlay closer to or farther from the screen edge.
- **Accent style**: switches the overlay accent color.
- **Clock timezone / format**: bridge time, local time, or UTC in 12/24 hour format.
- **Info strip density**: normal or compact bottom strip.

## Stability Notes

The archive modes use an embedded YouTube player. On some Wallpaper Engine / GPU / CEF combinations, external video embeds can crash the Chromium renderer and show the sad-face page. This project keeps the local still-image mode available, removes GPU-heavy blur/backdrop CSS, and delays YouTube loading when switching modes.

If the sad face still appears, reload the wallpaper and switch **Playback mode** back to **Local still image (safe)** before trying archive video again.

## Workshop Package

The project includes `preview.jpg` and workshop-friendly metadata in `project.json`, including title, description, content ratings, and tags. The preview uses the bundled bridge photo so the Steam Workshop/library thumbnail clearly shows the actual overpass.

## Credits

Bridge footage and 11foot8 project: Jurgen Henn / 11foot8.com / yovo68.

Preview and local still photo: `Durham--Gregson Street Guillotine 02.jpg` by Washuotaku, licensed under CC BY-SA 4.0 via Wikimedia Commons. The local image is cropped/overlaid for the Steam preview and still-image wallpaper mode.

Official sources:

- https://11foot8.com/
- https://11foot8.com/about/
- https://www.youtube.com/yovo68
- https://commons.wikimedia.org/wiki/File:Durham--Gregson_Street_Guillotine_02.jpg
- https://creativecommons.org/licenses/by-sa/4.0/
