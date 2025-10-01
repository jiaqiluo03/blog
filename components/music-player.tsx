"use client"

import { useState, useRef, useEffect } from "react"
import { Music, Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Song {
  title: string
  artist: string
  url: string
}

// Sample playlist - you can replace these with your own songs
const playlist: Song[] = [
  {
    title: "Chill Vibes",
    artist: "Lofi Artist",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "Peaceful Melody",
    artist: "Ambient Creator",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "Focus Flow",
    artist: "Study Music",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
]

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isCardOpen, setIsCardOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)

  const currentSong = playlist[currentSongIndex]

  // Auto-play when component mounts (will work after user interaction due to browser policies)
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const playAudio = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
        setHasInteracted(true)
      } catch (error) {
        // Auto-play blocked by browser, user needs to interact first
        console.log("Auto-play prevented. User interaction required.")
      }
    }

    // Try to auto-play
    playAudio()

    // Auto-advance to next song
    const handleEnded = () => {
      playNext()
    }
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  // Click outside to close card
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (playerRef.current && !playerRef.current.contains(event.target as Node)) {
        setIsCardOpen(false)
      }
    }

    // Only add listener if card is open
    if (isCardOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isCardOpen])

  // Update audio source when song changes
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.src = currentSong.url
    if (isPlaying) {
      audio.play().catch(console.error)
    }
  }, [currentSongIndex])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      try {
        await audio.play()
        setIsPlaying(true)
        setHasInteracted(true)
      } catch (error) {
        console.error("Play failed:", error)
      }
    }
  }

  const playNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length)
    setIsPlaying(true)
  }

  const playPrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length)
    setIsPlaying(true)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen)
  }

  return (
    <>
      <audio ref={audioRef} />
      
      <div className="fixed bottom-6 right-6 z-50" ref={playerRef}>
        <div className="relative">
          {/* Floating Music Button - Click to toggle card */}
          <Button
            onClick={toggleCard}
            size="lg"
            className={cn(
              "h-14 w-14 rounded-full shadow-lg transition-all duration-300",
              "bg-primary hover:bg-primary/90 text-primary-foreground",
              "border-2 border-primary/20 hover:scale-110",
              isPlaying && "animate-pulse"
            )}
          >
            {isPlaying ? (
              <Music className="h-6 w-6 animate-bounce" />
            ) : (
              <Music className="h-6 w-6" />
            )}
          </Button>

          {/* Player Card - Toggles on button click */}
          <Card
            className={cn(
              "absolute bottom-0 right-0 mb-16 mr-0 w-80 transition-all duration-300 shadow-2xl",
              "border-2 border-primary/20 backdrop-blur-sm",
              isCardOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-4 pointer-events-none"
            )}
          >
            <CardContent className="p-6">
              {/* Song Info */}
              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg truncate">{currentSong.title}</h3>
                <p className="text-sm text-muted-foreground truncate">{currentSong.artist}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Track {currentSongIndex + 1} of {playlist.length}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={playPrevious}
                  className="h-10 w-10 hover:bg-primary/10 hover:text-primary"
                >
                  <SkipBack className="h-5 w-5" />
                </Button>

                <Button
                  onClick={togglePlay}
                  size="icon"
                  className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6 ml-0.5" />
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={playNext}
                  className="h-10 w-10 hover:bg-primary/10 hover:text-primary"
                >
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="h-8 w-8 hover:bg-primary/10 hover:text-primary"
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
              </div>

              {/* First Visit Notice */}
              {!hasInteracted && (
                <div className="mt-4 text-xs text-center text-muted-foreground border-t pt-3">
                  Click play to start the music
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

