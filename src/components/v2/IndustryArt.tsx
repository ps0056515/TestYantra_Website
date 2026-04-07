/**
 * Inline SVG illustrations for each industry segment.
 * Each returns a standalone SVG that renders at any size via className.
 */

type Props = { className?: string };

export function BankingArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      {/* Sky gradient */}
      <rect width="320" height="200" rx="16" fill="url(#bk-sky)" />
      {/* Building base */}
      <rect x="70" y="80" width="180" height="100" rx="2" fill="url(#bk-bld)" />
      {/* Columns */}
      {[90,115,140,165,190,215].map((x,i) => (
        <rect key={i} x={x} y="70" width="10" height="110" rx="2" fill="rgba(255,255,255,0.12)" />
      ))}
      {/* Pediment / triangle roof */}
      <polygon points="60,80 160,30 260,80" fill="url(#bk-roof)" />
      {/* Steps */}
      <rect x="55" y="178" width="210" height="8" rx="1" fill="rgba(255,255,255,0.18)" />
      <rect x="45" y="185" width="230" height="7" rx="1" fill="rgba(255,255,255,0.1)" />
      {/* Dollar / shield emblem on pediment */}
      <circle cx="160" cy="62" r="14" fill="rgba(255,255,255,0.15)" />
      <text x="160" y="67" textAnchor="middle" fontSize="13" fill="rgba(255,255,255,0.9)" fontWeight="bold">$</text>
      {/* Windows grid */}
      {[0,1,2,3,4].map(col =>
        [0,1,2].map(row => (
          <rect key={`${col}-${row}`} x={88 + col*34} y={95 + row*28} width="18" height="20" rx="2" fill="rgba(255,255,255,0.1)" />
        ))
      )}
      {/* Data nodes floating */}
      <circle cx="36" cy="60" r="10" fill="rgba(255,255,255,0.12)" />
      <circle cx="285" cy="55" r="8" fill="rgba(255,255,255,0.1)" />
      <circle cx="48" cy="140" r="6" fill="rgba(255,255,255,0.08)" />
      <line x1="36" y1="60" x2="70" y2="80" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
      <line x1="285" y1="55" x2="255" y2="78" stroke="rgba(255,255,255,0.12)" strokeDasharray="3 3" />
      <defs>
        <linearGradient id="bk-sky" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a2a4a" /><stop offset="1" stopColor="#0f1c35" />
        </linearGradient>
        <linearGradient id="bk-bld" x1="70" y1="80" x2="250" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2c4a80" /><stop offset="1" stopColor="#1a3060" />
        </linearGradient>
        <linearGradient id="bk-roof" x1="60" y1="80" x2="260" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3a5fa0" /><stop offset="1" stopColor="#2040708" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function InsuranceArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="320" height="200" rx="16" fill="url(#ins-bg)" />
      {/* Large shield */}
      <path d="M160 28 L220 55 L220 115 Q220 155 160 172 Q100 155 100 115 L100 55 Z" fill="url(#ins-shield)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      {/* Shield checkmark */}
      <path d="M135 105 L153 122 L188 88" stroke="rgba(255,255,255,0.9)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Orbiting protection rings */}
      <circle cx="160" cy="100" r="62" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="6 4" />
      <circle cx="160" cy="100" r="80" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 6" />
      {/* Corner stat cards */}
      <rect x="20" y="30" width="60" height="36" rx="8" fill="rgba(255,255,255,0.08)" />
      <text x="50" y="50" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">99%</text>
      <text x="50" y="62" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.5)">Coverage</text>
      <rect x="240" y="30" width="60" height="36" rx="8" fill="rgba(255,255,255,0.08)" />
      <text x="270" y="50" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">24/7</text>
      <text x="270" y="62" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.5)">Monitoring</text>
      <rect x="20" y="145" width="60" height="36" rx="8" fill="rgba(255,255,255,0.06)" />
      <text x="50" y="165" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">30+</text>
      <text x="50" y="177" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.5)">Clients</text>
      <rect x="240" y="145" width="60" height="36" rx="8" fill="rgba(255,255,255,0.06)" />
      <text x="270" y="165" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">55%</text>
      <text x="270" y="177" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.5)">Faster QA</text>
      <defs>
        <linearGradient id="ins-bg" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a3a2a" /><stop offset="1" stopColor="#0d2218" />
        </linearGradient>
        <linearGradient id="ins-shield" x1="100" y1="28" x2="220" y2="172" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2d6a4f" /><stop offset="1" stopColor="#1b4332" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function RetailArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="320" height="200" rx="16" fill="url(#ret-bg)" />
      {/* Storefront */}
      <rect x="60" y="70" width="200" height="110" rx="4" fill="url(#ret-store)" />
      {/* Awning */}
      <rect x="50" y="65" width="220" height="25" rx="4" fill="url(#ret-awning)" />
      {/* Awning stripes */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <rect key={i} x={50 + i*24} y="65" width="12" height="25" fill="rgba(255,255,255,0.08)" />
      ))}
      {/* Store sign */}
      <rect x="90" y="72" width="140" height="22" rx="4" fill="rgba(0,0,0,0.25)" />
      <text x="160" y="87" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.75)" letterSpacing="2">RETAIL STORE</text>
      {/* Windows */}
      <rect x="70" y="100" width="70" height="50" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="180" y="100" width="70" height="50" rx="3" fill="rgba(255,255,255,0.1)" />
      {/* Door */}
      <rect x="137" y="130" width="46" height="50" rx="3" fill="rgba(0,0,0,0.2)" />
      <circle cx="175" cy="156" r="2" fill="rgba(255,255,255,0.4)" />
      {/* Shopping cart icon top-right */}
      <circle cx="268" cy="40" r="20" fill="rgba(255,255,255,0.1)" />
      <path d="M255 33 L258 33 L263 47 L275 47" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="264" cy="50" r="2" fill="rgba(255,255,255,0.7)"/>
      <circle cx="273" cy="50" r="2" fill="rgba(255,255,255,0.7)"/>
      {/* Ground */}
      <rect x="0" y="178" width="320" height="22" fill="rgba(0,0,0,0.15)" />
      {/* People silhouettes */}
      <circle cx="100" cy="174" r="5" fill="rgba(255,255,255,0.15)" />
      <rect x="97" y="178" width="6" height="12" rx="2" fill="rgba(255,255,255,0.1)" />
      <circle cx="225" cy="174" r="5" fill="rgba(255,255,255,0.15)" />
      <rect x="222" y="178" width="6" height="12" rx="2" fill="rgba(255,255,255,0.1)" />
      <defs>
        <linearGradient id="ret-bg" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3a1a4a" /><stop offset="1" stopColor="#200d30" />
        </linearGradient>
        <linearGradient id="ret-store" x1="60" y1="70" x2="260" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5a2d82" /><stop offset="1" stopColor="#3a1a55" />
        </linearGradient>
        <linearGradient id="ret-awning" x1="50" y1="65" x2="270" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7b3fa0" /><stop offset="1" stopColor="#5a2d82" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MediaArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="320" height="200" rx="16" fill="url(#med-bg)" />
      {/* TV/screen */}
      <rect x="55" y="45" width="210" height="130" rx="12" fill="url(#med-screen)" />
      <rect x="65" y="55" width="190" height="110" rx="8" fill="rgba(0,0,0,0.4)" />
      {/* Play button */}
      <circle cx="160" cy="110" r="28" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      <polygon points="152,97 152,123 176,110" fill="rgba(255,255,255,0.85)" />
      {/* Signal rings */}
      <circle cx="160" cy="110" r="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <circle cx="160" cy="110" r="55" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      {/* Progress bar */}
      <rect x="80" y="145" width="160" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="80" y="145" width="80" height="4" rx="2" fill="url(#med-prog)" />
      <circle cx="160" cy="147" r="4" fill="white" />
      {/* TV stand */}
      <rect x="148" y="175" width="24" height="8" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="135" y="183" width="50" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
      {/* Floating device icons */}
      <rect x="15" y="55" width="30" height="50" rx="5" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <circle cx="30" cy="100" r="2" fill="rgba(255,255,255,0.3)" />
      <rect x="275" y="65" width="22" height="35" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <circle cx="286" cy="95" r="1.5" fill="rgba(255,255,255,0.25)" />
      <defs>
        <linearGradient id="med-bg" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d1a35" /><stop offset="1" stopColor="#1a0d2e" />
        </linearGradient>
        <linearGradient id="med-screen" x1="55" y1="45" x2="265" y2="175" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e3a6e" /><stop offset="1" stopColor="#0f2040" />
        </linearGradient>
        <linearGradient id="med-prog" x1="80" y1="147" x2="160" y2="147" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" /><stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CommsArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="320" height="200" rx="16" fill="url(#com-bg)" />
      {/* Cell tower */}
      <line x1="160" y1="20" x2="140" y2="185" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
      <line x1="160" y1="20" x2="180" y2="185" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
      <line x1="160" y1="20" x2="160" y2="185" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      {/* Cross supports */}
      {[50,80,110,140,165].map((y,i) => {
        const spread = 6 + i * 4;
        return <line key={y} x1={160 - spread} y1={y} x2={160 + spread} y2={y} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />;
      })}
      {/* Top antenna */}
      <line x1="160" y1="20" x2="160" y2="8" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
      <circle cx="160" cy="7" r="3" fill="#6366f1" />
      {/* Signal arcs */}
      {[30,50,70].map((r,i) => (
        <path key={r} d={`M${160-r} ${50-r/2} A ${r} ${r} 0 0 1 ${160+r} ${50-r/2}`}
          stroke="rgba(99,102,241,0.4)" strokeWidth="2" fill="none"
          opacity={1 - i*0.25} strokeDasharray={i ? "4 3" : "none"} />
      ))}
      {/* Network nodes */}
      {[[55,85],[265,75],[40,145],[280,150],[100,165],[220,160]].map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.4)" strokeWidth="1" />
          <circle cx={x} cy={y} r="3" fill="rgba(255,255,255,0.6)" />
          <line x1={x} y1={y} x2="160" y2="100" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
        </g>
      ))}
      <defs>
        <linearGradient id="com-bg" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0a1628" /><stop offset="1" stopColor="#080d1e" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TravelArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="320" height="200" rx="16" fill="url(#trv-bg)" />
      {/* Globe outline */}
      <circle cx="160" cy="105" r="78" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      {/* Latitude lines */}
      {[-40,-20,0,20,40].map((offset,i) => (
        <ellipse key={i} cx="160" cy={105+offset} rx={Math.sqrt(78*78 - offset*offset)} ry="12"
          stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
      ))}
      {/* Meridian lines */}
      {[0,40,80,120,160].map((deg,i) => {
        const rad = (deg * Math.PI) / 180;
        return <ellipse key={i} cx="160" cy="105" rx={Math.abs(Math.cos(rad))*78} ry="78"
          stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />;
      })}
      {/* Airplane silhouette */}
      <g transform="translate(95,55) rotate(-20)">
        <path d="M0 8 L30 0 L35 8 L20 12 L30 30 L24 30 L16 14 L8 16 L9 24 L5 24 L2 14 Z"
          fill="white" opacity="0.85" />
      </g>
      {/* Flight path arc */}
      <path d="M70 150 Q130 40 240 80" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" strokeDasharray="6 4" />
      {/* Destination pins */}
      <circle cx="70" cy="150" r="6" fill="#f59e0b" />
      <circle cx="240" cy="80" r="6" fill="#6366f1" />
      <circle cx="70" cy="150" r="10" stroke="rgba(245,158,11,0.3)" strokeWidth="2" fill="none" />
      <circle cx="240" cy="80" r="10" stroke="rgba(99,102,241,0.3)" strokeWidth="2" fill="none" />
      {/* Clouds */}
      <ellipse cx="40" cy="40" rx="22" ry="10" fill="rgba(255,255,255,0.07)" />
      <ellipse cx="285" cy="30" rx="18" ry="8" fill="rgba(255,255,255,0.06)" />
      <defs>
        <linearGradient id="trv-bg" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#062140" /><stop offset="1" stopColor="#041628" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ElectronicsArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="320" height="200" rx="16" fill="url(#elec-bg)" />
      {/* Circuit board traces */}
      <line x1="0" y1="60" x2="100" y2="60" stroke="rgba(52,211,153,0.2)" strokeWidth="2" />
      <line x1="100" y1="60" x2="100" y2="100" stroke="rgba(52,211,153,0.2)" strokeWidth="2" />
      <line x1="220" y1="60" x2="320" y2="60" stroke="rgba(52,211,153,0.15)" strokeWidth="2" />
      <line x1="220" y1="60" x2="220" y2="100" stroke="rgba(52,211,153,0.2)" strokeWidth="2" />
      <line x1="0" y1="140" x2="80" y2="140" stroke="rgba(52,211,153,0.12)" strokeWidth="1.5" />
      <line x1="80" y1="140" x2="80" y2="100" stroke="rgba(52,211,153,0.12)" strokeWidth="1.5" />
      <line x1="240" y1="140" x2="320" y2="140" stroke="rgba(52,211,153,0.12)" strokeWidth="1.5" />
      <line x1="240" y1="140" x2="240" y2="100" stroke="rgba(52,211,153,0.12)" strokeWidth="1.5" />
      {/* Central chip */}
      <rect x="100" y="70" width="120" height="60" rx="6" fill="url(#elec-chip)" stroke="rgba(52,211,153,0.5)" strokeWidth="1.5" />
      {/* Chip pin traces */}
      {[80,95,110,125,140].map((y,i) => (
        <g key={i}>
          <line x1="100" y1={y} x2="88" y2={y} stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" />
          <line x1="220" y1={y} x2="232" y2={y} stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" />
          <rect x="83" y={y-3} width="5" height="6" rx="1" fill="rgba(52,211,153,0.5)" />
          <rect x="232" y={y-3} width="5" height="6" rx="1" fill="rgba(52,211,153,0.5)" />
        </g>
      ))}
      {/* Chip top/bottom pins */}
      {[120,140,160,180,200].map((x,i) => (
        <g key={i}>
          <line x1={x} y1="70" x2={x} y2="58" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" />
          <line x1={x} y1="130" x2={x} y2="142" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" />
          <rect x={x-3} y="53" width="6" height="5" rx="1" fill="rgba(52,211,153,0.5)" />
          <rect x={x-3} y="142" width="6" height="5" rx="1" fill="rgba(52,211,153,0.5)" />
        </g>
      ))}
      {/* Chip label */}
      <text x="160" y="97" textAnchor="middle" fontSize="9" fill="rgba(52,211,153,0.8)" fontFamily="monospace">QA ENGINE</text>
      <text x="160" y="110" textAnchor="middle" fontSize="7" fill="rgba(52,211,153,0.5)" fontFamily="monospace">v2.4.1</text>
      {/* Corner dots */}
      {[[100,70],[220,70],[100,130],[220,130]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="rgba(52,211,153,0.6)" />
      ))}
      {/* Floating components */}
      <rect x="22" y="30" width="18" height="10" rx="3" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
      <rect x="280" y="155" width="18" height="10" rx="3" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
      <circle cx="50" cy="170" r="8" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.25)" strokeWidth="1" />
      <circle cx="270" cy="30" r="8" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.25)" strokeWidth="1" />
      <defs>
        <linearGradient id="elec-bg" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#062018" /><stop offset="1" stopColor="#030f0e" />
        </linearGradient>
        <linearGradient id="elec-chip" x1="100" y1="70" x2="220" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#064e3b" /><stop offset="1" stopColor="#022c22" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export const INDUSTRY_ART: Record<string, React.FC<Props>> = {
  "banking-finance": BankingArt,
  insurance: InsuranceArt,
  "retail-ecommerce": RetailArt,
  "media-entertainment": MediaArt,
  communications: CommsArt,
  travel: TravelArt,
  "consumer-electronics": ElectronicsArt,
};
