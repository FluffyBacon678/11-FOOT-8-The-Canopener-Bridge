# 11 Foot 8 - Canopener Bridge Local Crash Reel Wallpaper

This folder is a Wallpaper Engine web wallpaper for the 11foot8+8 Canopener Bridge in Durham, NC.

## Import

1. Open Wallpaper Engine.
2. Choose **Create Wallpaper**.
3. Choose **Web**.
4. Select `index.html` from this folder.
5. Save/apply the project.

The default playback mode is **Local crash video**. It uses a native HTML video player and never embeds YouTube, so Wallpaper Engine does not show the Chromium sad-face iframe crash.

Add your own authorized local crash compilation in either of these ways:

- Put a video in this project as `assets/crash-reel.webm`, `assets/crash-reel.mp4`, or `assets/crash-reel.ogv`.
- Or use the Wallpaper Engine setting **Local crash video file** to pick a local video file.

There is also a short note at `assets/README-crash-reel.txt` inside the project folder.

If no local video can be loaded, the wallpaper automatically falls back to the bundled bridge photo at `assets/bridge-still.jpg`.

## Wallpaper Engine Settings

- **Playback mode**: local crash video, or local still image.
- **Video source**: try the picked file first, use only the picked file, or use only bundled project files.
- **Local crash video file**: pick a video through Wallpaper Engine. The file picker supports Wallpaper Engine's native web video formats.
- **Bundled video filenames**: comma-separated project paths to try, defaulting to `assets/crash-reel.webm`, `assets/crash-reel.mp4`, and `assets/crash-reel.ogv`.
- **Video fit**: crop to cover the screen, or show the full video/still-image frame.
- **Enable video controls**: allows clicking the local video player when you want controls.
- **Loop video**: loops the local crash reel.
- **Mute video audio**: mutes the local video.
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

YouTube embeds have been removed. The screenshot-style sad face was coming from the embedded Chromium frame used for the external player. The wallpaper now uses only local assets: a native `<video>` element for the crash reel and a local bridge photo as fallback.

If a local video file is missing or unsupported, the wallpaper stays alive and shows the still image instead of a dead iframe.

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
