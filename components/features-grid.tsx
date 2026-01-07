"use client"

function FreeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="4" y1="4" x2="20" y2="20" />
      <path d="M12 6v4l2 2" />
    </svg>
  )
}

function LightningIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      {/* Speed lines */}
      <line x1="1" y1="10" x2="4" y2="10" opacity="0.5" />
      <line x1="1" y1="14" x2="3" y2="14" opacity="0.5" />
    </svg>
  )
}

function TowerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Castle/tower silhouette */}
      <path d="M4 21V10l2-2V4h2v2h2V4h4v2h2V4h2v4l2 2v11" />
      <path d="M4 21h16" />
      <rect x="9" y="14" width="6" height="7" />
      {/* Battlements */}
      <path d="M6 4V2M10 4V2M14 4V2M18 4V2" />
    </svg>
  )
}

function BotIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Robot head */}
      <rect x="5" y="8" width="14" height="12" rx="2" />
      {/* Eyes */}
      <circle cx="9" cy="13" r="1.5" fill="currentColor" />
      <circle cx="15" cy="13" r="1.5" fill="currentColor" />
      {/* Antenna */}
      <line x1="12" y1="8" x2="12" y2="4" />
      <circle cx="12" cy="3" r="1" />
      {/* Mouth/speaker */}
      <line x1="9" y1="17" x2="15" y2="17" />
      {/* Chat bubble */}
      <path d="M19 4h3v3l-2 1" opacity="0.7" />
    </svg>
  )
}

const features = [
  {
    icon: FreeIcon,
    title: "Free on Web",
    description: "Unlimited searches on our website, forever. Discord bot includes 3 free searches per day.",
  },
  {
    icon: LightningIcon,
    title: "Lightning Fast",
    description: "Results in under 3 seconds",
  },
  {
    icon: TowerIcon,
    title: "All Town Halls",
    description: "TH7 to TH18 supported",
    badge: "NEW: TH18 Compatible! 🔥",
  },
  {
    icon: BotIcon,
    title: "Discord Bot",
    description: "Use in your server",
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,107,53,0.15)] group relative"
            >
              {"badge" in feature && feature.badge && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg animate-pulse">
                  {feature.badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
