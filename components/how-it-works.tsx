"use client"

import { Smartphone, Shield, CheckCircle } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-24 h-32 rounded-2xl bg-card border-2 border-border flex flex-col items-center justify-center mb-4 group hover:border-primary/50 transition-colors">
                  {/* Phone notch */}
                  <div className="absolute top-2 w-8 h-1 rounded-full bg-border" />
                  {/* Inner content - placeholder box */}
                  <div className="w-16 h-16 border-2 border-dashed border-primary/40 rounded-lg flex items-center justify-center mt-2">
                    <Smartphone className="w-6 h-6 text-primary/60" />
                  </div>
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_30px_rgba(255,107,53,0.2)]" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Upload Screenshot</h3>
              <p className="text-muted-foreground">Drop your base image</p>
            </div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-card border-2 border-secondary/30 flex items-center justify-center mb-4 overflow-hidden group hover:border-secondary/60 transition-colors">
                  {/* Circuit board pattern background */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(90deg, transparent 45%, rgba(74, 144, 226, 0.3) 45%, rgba(74, 144, 226, 0.3) 55%, transparent 55%),
                        linear-gradient(transparent 45%, rgba(74, 144, 226, 0.3) 45%, rgba(74, 144, 226, 0.3) 55%, transparent 55%)
                      `,
                      backgroundSize: "12px 12px",
                    }}
                  />
                  {/* Scanning line */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-scan" />
                  {/* Center icon */}
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-secondary text-sm font-mono">Analyzing</span>
                    <span className="flex gap-0.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-dot-1" />
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-dot-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-dot-3" />
                    </span>
                  </div>
                  {/* Purple glow effect */}
                  <div className="absolute inset-0 bg-purple-glow/5 group-hover:bg-purple-glow/10 transition-colors" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">AI Analyzes</h3>
              <p className="text-muted-foreground">Smart recognition in seconds</p>
            </div>
          </div>

          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-28 h-24 rounded-xl bg-card border border-success/30 p-3 mb-4 group hover:border-success/60 transition-all hover:shadow-[0_0_20px_rgba(46,204,113,0.15)]">
                  {/* Badge */}
                  <div className="flex items-center gap-1 mb-2">
                    <Shield className="w-3 h-3 text-gold" />
                    <span className="text-[10px] font-medium text-gold">Town Hall 15</span>
                  </div>
                  {/* Confidence */}
                  <div className="text-success text-xs font-semibold mb-1">95% Match</div>
                  {/* Base type */}
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-sm bg-secondary/50" />
                    <span className="text-[9px] text-muted-foreground">War Base</span>
                  </div>
                  {/* Checkmark */}
                  <CheckCircle className="absolute -bottom-1 -right-1 w-5 h-5 text-success" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Get Results</h3>
              <p className="text-muted-foreground">Instant base identification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
