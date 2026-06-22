Put your authorized local crash reel video here, then set the Wallpaper
Engine setting "Bundled video filenames (optional)" to its project path.

Recommended filenames:

- crash-reel.webm
- crash-reel.mp4
- crash-reel.ogv

Wallpaper Engine's web file picker officially supports WebM/Ogg video.
MP4 may work as a bundled browser video on many Windows systems, but WebM
is the safest format for sharing.

For multiple shorter clips, create a folder such as assets/crashes/ and set
the bundled video list to comma-separated paths:

assets/crashes/clip-01.webm, assets/crashes/clip-02.webm

The wallpaper can skip intros globally with "Skip intro seconds". For a
per-file override, add a pipe after the path:

assets/crashes/clip-01.webm | skip=5

The bundled-video list is blank by default so the wallpaper does not make
missing-file requests when no crash reel has been added yet.
