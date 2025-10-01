# Music Player Guide

## Overview
A floating music player has been added to your blog website that:
- ✨ Automatically attempts to play music when visitors arrive (browser permissions permitting)
- 🎵 Shows a floating button in the bottom-right corner
- 🎮 Reveals a full player card on hover with controls
- ⏭️ Allows users to skip to next/previous tracks
- 🔇 Includes volume/mute control
- 🎨 Matches your existing theme and design

## Location
The music player is located at: `/components/music-player.tsx`

## How to Add Your Own Songs

### Option 1: Use External URLs
Replace the sample playlist in `music-player.tsx` (around line 14):

```typescript
const playlist: Song[] = [
  {
    title: "Your Song Title",
    artist: "Your Artist Name",
    url: "https://your-domain.com/path/to/song.mp3"
  },
  {
    title: "Another Song",
    artist: "Another Artist",
    url: "https://your-domain.com/path/to/another-song.mp3"
  },
  // Add more songs...
]
```

### Option 2: Use Local Audio Files
1. Add your audio files to the `/public` folder:
   ```
   /public/
     /music/
       - song1.mp3
       - song2.mp3
       - song3.mp3
   ```

2. Update the playlist URLs:
   ```typescript
   const playlist: Song[] = [
     {
       title: "My Song",
       artist: "My Artist",
       url: "/music/song1.mp3"
     },
     // ...
   ]
   ```

## Features

### Auto-Play
- The player attempts to auto-play when the page loads
- Due to browser policies, this may require user interaction first
- If auto-play is blocked, users can click the play button

### Hover Controls
- Hover over the floating music button to reveal the full player card
- The card shows:
  - Current song title and artist
  - Track number (e.g., "Track 1 of 3")
  - Play/Pause button
  - Previous/Next track buttons
  - Mute/Unmute button

### Auto-Advance
- When a song finishes, it automatically plays the next track
- After the last song, it loops back to the first

## Customization

### Change Position
To move the player to a different corner, edit line 129 in `music-player.tsx`:
```typescript
// Current: bottom-6 right-6
// Options:
// - Top-right: "top-6 right-6"
// - Bottom-left: "bottom-6 left-6"
// - Top-left: "top-6 left-6"
```

### Change Colors
The player uses your theme's primary color. To customize:
1. The colors automatically adapt to light/dark mode
2. They match your existing theme from `globals.css`

### Adjust Size
To change the floating button size, edit line 139:
```typescript
// Current: h-14 w-14
// Smaller: h-12 w-12
// Larger: h-16 w-16
```

## Browser Compatibility
- ✅ Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- ⚠️ Auto-play may be blocked by browser policies (users can click play)
- 🔊 Supports MP3, WAV, OGG audio formats

## Removing the Music Player
To remove the music player:
1. Open `/app/layout.tsx`
2. Remove the import: `import { MusicPlayer } from "@/components/music-player"`
3. Remove the component: `<MusicPlayer />`

## Tips
- Keep audio files small for faster loading (consider 128-192 kbps MP3)
- Use royalty-free music or music you have rights to use
- Test the player on mobile devices as well
- Consider adding a "disable music" preference if users find it distracting

