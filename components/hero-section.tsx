"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { CloudUpload, X, FileImage, Loader2, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<{
    townHall: string
    confidence: number
    matchFound: boolean
  } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && (droppedFile.type === "image/png" || droppedFile.type === "image/jpeg")) {
      processFile(droppedFile)
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      processFile(selectedFile)
    }
  }, [])

  const processFile = (selectedFile: File) => {
    setFile(selectedFile)
    setResults(null)
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target?.result as string)
    }
    reader.readAsDataURL(selectedFile)

    // Simulate AI analysis
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setResults({
        townHall: "TH" + (Math.floor(Math.random() * 12) + 7),
        confidence: Math.floor(Math.random() * 15) + 85,
        matchFound: true,
      })
    }, 2500)
  }

  const clearFile = () => {
    setFile(null)
    setPreview(null)
    setResults(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(74, 144, 226, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(74, 144, 226, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(26,26,46,0.95) 0%, rgba(26,26,46,0.7) 100%)",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-secondary/40 animate-float"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-glow/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
          Find Any Clash of Clans Base with <span className="text-primary">AI</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Upload a screenshot, get the base layout instantly. Free forever.
        </p>

        <div className="mt-10 mx-auto max-w-2xl">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg"
            onChange={handleFileSelect}
            className="hidden"
            id="hero-file-upload"
          />

          {!file ? (
            <label
              htmlFor="hero-file-upload"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`
                block min-h-[250px] sm:min-h-[300px] rounded-2xl cursor-pointer
                border-2 border-dashed transition-all duration-300
                ${
                  isDragging
                    ? "border-primary bg-primary/10 border-solid"
                    : "border-primary/60 hover:border-primary hover:bg-primary/5"
                }
              `}
            >
              <div className="flex flex-col items-center justify-center h-full min-h-[250px] sm:min-h-[300px] gap-4 px-6">
                <div
                  className={`
                    w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300
                    ${isDragging ? "bg-primary/30 shadow-[0_0_40px_rgba(255,107,53,0.4)]" : "bg-primary/15 hover:bg-primary/25"}
                  `}
                >
                  <CloudUpload
                    className={`w-10 h-10 text-primary transition-transform duration-300 ${isDragging ? "scale-110" : ""}`}
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl font-semibold text-foreground">Drop your base screenshot here</p>
                  <p className="text-muted-foreground mt-2">or click to browse</p>
                </div>
                <p className="text-sm text-muted-foreground/70 mt-2">Supported: TH7 to TH18 • JPG, PNG • Max 5MB</p>
              </div>
            </label>
          ) : (
            <div className="min-h-[250px] sm:min-h-[300px] rounded-2xl border-2 border-primary/40 bg-card/50 p-6">
              <div className="flex flex-col items-center gap-4">
                {/* Preview and file info */}
                <div className="relative">
                  {preview && (
                    <img
                      src={preview || "/placeholder.svg"}
                      alt="Base preview"
                      className="max-h-[150px] rounded-lg object-contain"
                    />
                  )}
                  <button
                    onClick={clearFile}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-destructive rounded-full flex items-center justify-center hover:bg-destructive/80 transition-colors"
                  >
                    <X className="w-4 h-4 text-destructive-foreground" />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileImage className="w-4 h-4" />
                  <span>{file.name}</span>
                  <span>({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                </div>

                {/* Analysis state */}
                {isAnalyzing && (
                  <div className="flex items-center gap-3 text-primary">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="font-medium">Analyzing base...</span>
                  </div>
                )}

                {/* Results */}
                {results && (
                  <div className="w-full max-w-sm glass rounded-xl p-4 border border-green-500/30 bg-green-500/10">
                    <div className="flex items-center gap-2 text-green-400 mb-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-semibold">Match Found!</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Town Hall:</span>
                        <span className="font-bold text-primary">{results.townHall}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Confidence:</span>
                        <span className="font-bold text-green-400">{results.confidence}%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
