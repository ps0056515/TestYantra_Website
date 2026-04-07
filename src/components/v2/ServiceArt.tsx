type Props = { className?: string };

/* ── Managed QA: shield + checklist motif ── */
export function ManagedQAArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="360" height="180" rx="16" fill="url(#mqa-bg)" />
      {/* Central shield */}
      <path d="M180 22 L230 46 L230 100 Q230 135 180 150 Q130 135 130 100 L130 46 Z" fill="url(#mqa-shield)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      {/* Checklist lines inside shield */}
      {[72,90,108,126].map((y,i) => (
        <g key={y}>
          <circle cx="153" cy={y} r="5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
          {i < 3 && <path d={`M150 ${y} L153 ${y+3} L158 ${y-3}`} stroke="rgba(99,102,241,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>}
          <rect x="163" y={y-3} width="40" height="5" rx="2" fill="rgba(255,255,255,0.15)"/>
        </g>
      ))}
      {/* Orbiting check nodes */}
      {[0,120,240].map((deg,i) => {
        const r=70, rad=(deg*Math.PI)/180;
        const x=180+r*Math.cos(rad), y=86+r*Math.sin(rad)*0.45;
        return <g key={i}><circle cx={x} cy={y} r="12" fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.5)" strokeWidth="1"/><path d={`M${x-4} ${y} L${x-1} ${y+3} L${x+4} ${y-3}`} stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></g>;
      })}
      <circle cx="180" cy="86" r="75" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="5 4"/>
      {/* Corner stat chips */}
      <rect x="16" y="20" width="55" height="30" rx="8" fill="rgba(255,255,255,0.07)"/>
      <text x="43" y="36" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">3×</text>
      <text x="43" y="46" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.45)">Automation</text>
      <rect x="289" y="130" width="55" height="30" rx="8" fill="rgba(255,255,255,0.07)"/>
      <text x="316" y="146" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">60%</text>
      <text x="316" y="156" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.45)">Less defects</text>
      <defs>
        <linearGradient id="mqa-bg" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#1e1b4b"/><stop offset="1" stopColor="#0f0d28"/></linearGradient>
        <linearGradient id="mqa-shield" x1="130" y1="22" x2="230" y2="150" gradientUnits="userSpaceOnUse"><stop stopColor="#4338ca"/><stop offset="1" stopColor="#1e1b4b"/></linearGradient>
      </defs>
    </svg>
  );
}

/* ── Crowd Testing: globe + device grid ── */
export function CrowdTestingArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="360" height="180" rx="16" fill="url(#ct-bg)" />
      {/* Globe */}
      <circle cx="180" cy="90" r="65" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
      {[-30,-10,10,30].map((o,i)=><ellipse key={i} cx="180" cy={90+o} rx={Math.sqrt(65*65-o*o)} ry="11" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none"/>)}
      {[0,45,90,135].map((deg,i)=>{const rad=deg*Math.PI/180;return<ellipse key={i} cx="180" cy="90" rx={Math.abs(Math.cos(rad))*65} ry="65" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none"/>})}
      {/* Device pins */}
      {[[115,55],[200,42],[255,75],[130,130],[220,140],[90,100],[275,110]].map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x} cy={y} r="7" fill="rgba(251,146,60,0.3)" stroke="rgba(251,146,60,0.6)" strokeWidth="1"/>
          <circle cx={x} cy={y} r="2.5" fill="rgba(251,146,60,0.9)"/>
          <line x1={x} y1={y} x2="180" y2="90" stroke="rgba(251,146,60,0.12)" strokeDasharray="3 3"/>
        </g>
      ))}
      {/* Device icons floating */}
      <rect x="22" y="30" width="22" height="36" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <circle cx="33" cy="62" r="2" fill="rgba(255,255,255,0.4)"/>
      <rect x="316" y="40" width="28" height="18" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
      <rect x="316" y="125" width="22" height="34" rx="4" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
      <circle cx="327" cy="154" r="2" fill="rgba(255,255,255,0.3)"/>
      <defs>
        <linearGradient id="ct-bg" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#1c1410"/><stop offset="1" stopColor="#0f0c09"/></linearGradient>
      </defs>
    </svg>
  );
}

/* ── Professional Services: people/org chart ── */
export function ProfessionalServicesArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="360" height="180" rx="16" fill="url(#ps-bg)" />
      {/* Org chart */}
      {/* Top node */}
      <rect x="145" y="20" width="70" height="38" rx="8" fill="url(#ps-node1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <circle cx="180" cy="31" r="7" fill="rgba(255,255,255,0.3)"/>
      <rect x="160" y="42" width="40" height="5" rx="2" fill="rgba(255,255,255,0.2)"/>
      {/* Connector lines */}
      <line x1="180" y1="58" x2="180" y2="72" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      <line x1="75" y1="72" x2="285" y2="72" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <line x1="75" y1="72" x2="75" y2="86" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      <line x1="180" y1="72" x2="180" y2="86" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      <line x1="285" y1="72" x2="285" y2="86" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      {/* Second row nodes */}
      {[40,145,250].map((x,i)=>(
        <g key={i}>
          <rect x={x} y="86" width="70" height="36" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
          <circle cx={x+20} cy="97" r="6" fill="rgba(255,255,255,0.2)"/>
          <rect x={x+30} y="92" width="28" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
          <rect x={x+30} y="99" width="20" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
          {/* Bottom connectors */}
          <line x1={x+35} y1="122" x2={x+35} y2="132" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
          <line x1={x+15} y1="132" x2={x+55} y2="132" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          {[x+15,x+55].map((lx,j)=>(
            <g key={j}>
              <line x1={lx} y1="132" x2={lx} y2="142" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              <rect x={lx-15} y="142" width="30" height="22" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              <circle cx={lx} cy="150" r="4" fill="rgba(255,255,255,0.15)"/>
            </g>
          ))}
        </g>
      ))}
      <defs>
        <linearGradient id="ps-bg" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#0f1e35"/><stop offset="1" stopColor="#080f1e"/></linearGradient>
        <linearGradient id="ps-node1" x1="145" y1="20" x2="215" y2="58" gradientUnits="userSpaceOnUse"><stop stopColor="#1e40af"/><stop offset="1" stopColor="#1e3a8a"/></linearGradient>
      </defs>
    </svg>
  );
}

/* ── Training: graduation cap + learning path ── */
export function TrainingArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="360" height="180" rx="16" fill="url(#tr-bg)" />
      {/* Graduation cap */}
      <polygon points="180,30 260,65 180,100 100,65" fill="url(#tr-cap)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      <rect x="170" y="63" width="20" height="48" rx="2" fill="rgba(255,255,255,0.15)"/>
      <ellipse cx="190" cy="111" rx="22" ry="8" fill="rgba(255,255,255,0.12)"/>
      {/* Tassel */}
      <line x1="260" y1="65" x2="260" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
      <circle cx="260" cy="108" r="5" fill="rgba(251,191,36,0.7)"/>
      {/* Progress steps */}
      {[1,2,3,4].map((n,i)=>{
        const x=40+i*75, y=148;
        const done=i<3;
        return (
          <g key={n}>
            {i>0&&<line x1={x-48} y1={y} x2={x-12} y2={y} stroke={done?"rgba(251,191,36,0.5)":"rgba(255,255,255,0.15)"} strokeWidth="2"/>}
            <circle cx={x} cy={y} r="14" fill={done?"rgba(251,191,36,0.2)":"rgba(255,255,255,0.05)"} stroke={done?"rgba(251,191,36,0.6)":"rgba(255,255,255,0.2)"} strokeWidth="1.5"/>
            {done?<path d={`M${x-5} ${y} L${x-2} ${y+3} L${x+5} ${y-4}`} stroke="rgba(251,191,36,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>:<text x={x} y={y+4} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.4)">{n}</text>}
          </g>
        );
      })}
      <defs>
        <linearGradient id="tr-bg" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#1a1200"/><stop offset="1" stopColor="#0e0c00"/></linearGradient>
        <linearGradient id="tr-cap" x1="100" y1="30" x2="260" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#854d0e"/><stop offset="1" stopColor="#422006"/></linearGradient>
      </defs>
    </svg>
  );
}

/* ── Test Automation: code + pipeline ── */
export function TestAutomationArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="360" height="180" rx="16" fill="url(#ta-bg)" />
      {/* Code window */}
      <rect x="30" y="25" width="185" height="130" rx="10" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      {/* Window dots */}
      <circle cx="48" cy="40" r="4" fill="rgba(239,68,68,0.7)"/><circle cx="62" cy="40" r="4" fill="rgba(251,191,36,0.7)"/><circle cx="76" cy="40" r="4" fill="rgba(34,197,94,0.7)"/>
      {/* Code lines */}
      {[
        {x:46,y:58,w:60,c:"rgba(129,140,248,0.8)"},
        {x:56,y:70,w:80,c:"rgba(52,211,153,0.7)"},
        {x:56,y:82,w:65,c:"rgba(251,191,36,0.6)"},
        {x:56,y:94,w:90,c:"rgba(52,211,153,0.7)"},
        {x:46,y:106,w:45,c:"rgba(129,140,248,0.8)"},
        {x:56,y:118,w:70,c:"rgba(255,255,255,0.2)"},
        {x:56,y:130,w:50,c:"rgba(52,211,153,0.5)"},
        {x:46,y:142,w:30,c:"rgba(129,140,248,0.8)"},
      ].map((l,i)=><rect key={i} x={l.x} y={l.y} width={l.w} height="6" rx="3" fill={l.c}/>)}
      {/* Pipeline stages */}
      {["Build","Test","Gate","Deploy"].map((label,i)=>{
        const x=240+i*0, startY=35+i*36;
        return (
          <g key={label}>
            <rect x="240" y={startY} width="90" height="26" rx="6" fill={i===1?"rgba(99,102,241,0.3)":"rgba(255,255,255,0.06)"} stroke={i===1?"rgba(99,102,241,0.5)":"rgba(255,255,255,0.1)"} strokeWidth="1"/>
            <text x="285" y={startY+16} textAnchor="middle" fontSize="9" fill={i===1?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.45)"}>{label}</text>
            {i<3&&<path d="M285 0 L280 8 L290 8 Z" transform={`translate(0,${startY+26})`} fill="rgba(255,255,255,0.15)"/>}
          </g>
        );
      })}
      {/* Green checkmark on Test stage */}
      <circle cx="253" cy="48" r="6" fill="rgba(34,197,94,0.3)"/>
      <path d="M250 48 L252 51 L257 45" stroke="rgba(34,197,94,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="ta-bg" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#0d1117"/><stop offset="1" stopColor="#010409"/></linearGradient>
      </defs>
    </svg>
  );
}

/* ── Performance Engineering: gauge / load chart ── */
export function PerformanceEngineeringArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="360" height="180" rx="16" fill="url(#pe-bg)" />
      {/* Gauge arc background */}
      <path d="M75 140 A 105 105 0 0 1 285 140" stroke="rgba(255,255,255,0.08)" strokeWidth="18" strokeLinecap="round" fill="none"/>
      {/* Gauge filled — ~75% */}
      <path d="M75 140 A 105 105 0 0 1 249 66" stroke="url(#pe-gauge)" strokeWidth="18" strokeLinecap="round" fill="none"/>
      {/* Gauge needle */}
      <line x1="180" y1="140" x2="246" y2="68" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="180" cy="140" r="8" fill="white"/>
      <circle cx="180" cy="140" r="4" fill="url(#pe-bg)"/>
      {/* Speed labels */}
      <text x="68" y="158" fontSize="8" fill="rgba(255,255,255,0.35)">0</text>
      <text x="170" y="40" fontSize="8" fill="rgba(255,255,255,0.35)">50%</text>
      <text x="282" y="158" fontSize="8" fill="rgba(255,255,255,0.35)">100%</text>
      {/* Load chart bars on right */}
      {[35,55,45,70,85,75,90,60,95,80].map((h,i)=>(
        <rect key={i} x={242+i*10} y={155-h*0.55} width="7" height={h*0.55} rx="2"
          fill={i>=8?"rgba(239,68,68,0.7)":i>=6?"rgba(251,191,36,0.6)":"rgba(52,211,153,0.5)"}/>
      ))}
      {/* Stat chips */}
      <rect x="16" y="20" width="60" height="28" rx="7" fill="rgba(255,255,255,0.07)"/>
      <text x="46" y="33" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">4×</text>
      <text x="46" y="43" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.4)">Peak capacity</text>
      <rect x="16" y="55" width="60" height="28" rx="7" fill="rgba(255,255,255,0.06)"/>
      <text x="46" y="68" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">70%</text>
      <text x="46" y="78" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.4)">Incident drop</text>
      <defs>
        <linearGradient id="pe-bg" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#1a0500"/><stop offset="1" stopColor="#0d0300"/></linearGradient>
        <linearGradient id="pe-gauge" x1="75" y1="140" x2="285" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#22c55e"/><stop offset="0.6" stopColor="#f59e0b"/><stop offset="1" stopColor="#ef4444"/></linearGradient>
      </defs>
    </svg>
  );
}

/* ── Security Testing: lock + scan lines ── */
export function SecurityTestingArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="360" height="180" rx="16" fill="url(#sec-bg)" />
      {/* Lock body */}
      <rect x="145" y="80" width="70" height="60" rx="10" fill="url(#sec-lock)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      {/* Lock shackle */}
      <path d="M162 80 L162 58 A 18 18 0 0 1 198 58 L198 80" stroke="rgba(255,255,255,0.5)" strokeWidth="5" strokeLinecap="round" fill="none"/>
      {/* Keyhole */}
      <circle cx="180" cy="105" r="8" fill="rgba(0,0,0,0.4)"/>
      <rect x="176" y="105" width="8" height="14" rx="2" fill="rgba(0,0,0,0.4)"/>
      {/* Scan line animation substitute — horizontal bars */}
      {[30,50,70,90,110,130,150,170].map((y,i)=>(
        <line key={y} x1="16" y1={y} x2="344" y2={y}
          stroke={i===4?"rgba(239,68,68,0.6)":"rgba(255,255,255,0.03)"}
          strokeWidth={i===4?2:1}/>
      ))}
      {/* Warning triangles */}
      <polygon points="55,40 75,72 35,72" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5"/>
      <text x="55" y="64" textAnchor="middle" fontSize="14" fill="rgba(239,68,68,0.8)">!</text>
      <polygon points="305,120 325,152 285,152" fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.3)" strokeWidth="1"/>
      <text x="305" y="144" textAnchor="middle" fontSize="12" fill="rgba(239,68,68,0.6)">!</text>
      {/* Shield arcs */}
      <circle cx="180" cy="110" r="80" stroke="rgba(239,68,68,0.05)" strokeWidth="2" fill="none" strokeDasharray="6 4"/>
      <circle cx="180" cy="110" r="100" stroke="rgba(239,68,68,0.03)" strokeWidth="1" fill="none" strokeDasharray="4 6"/>
      <defs>
        <linearGradient id="sec-bg" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#1a0808"/><stop offset="1" stopColor="#0d0404"/></linearGradient>
        <linearGradient id="sec-lock" x1="145" y1="80" x2="215" y2="140" gradientUnits="userSpaceOnUse"><stop stopColor="#7f1d1d"/><stop offset="1" stopColor="#450a0a"/></linearGradient>
      </defs>
    </svg>
  );
}

/* ── AI Testing: brain / neural network ── */
export function AITestingArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="360" height="180" rx="16" fill="url(#ai-bg)" />
      {/* Neural network nodes */}
      {/* Input layer */}
      {[40,80,120,160].map((y,i)=><circle key={i} cx="60" cy={y} r="10" fill="rgba(168,85,247,0.25)" stroke="rgba(168,85,247,0.6)" strokeWidth="1.5"/>)}
      {/* Hidden layer 1 */}
      {[55,95,135].map((y,i)=><circle key={i} cx="160" cy={y} r="11" fill="rgba(99,102,241,0.25)" stroke="rgba(99,102,241,0.6)" strokeWidth="1.5"/>)}
      {/* Hidden layer 2 */}
      {[70,110,150].map((y,i)=><circle key={i} cx="260" cy={y} r="11" fill="rgba(56,189,248,0.2)" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5"/>)}
      {/* Output */}
      <circle cx="330" cy="100" r="13" fill="rgba(52,211,153,0.25)" stroke="rgba(52,211,153,0.6)" strokeWidth="2"/>
      <path d="M323 100 L327 104 L337 94" stroke="rgba(52,211,153,0.9)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Connections input→h1 */}
      {[40,80,120,160].flatMap((y1,i)=>[55,95,135].map((y2,j)=>(
        <line key={`${i}-${j}`} x1="70" y1={y1} x2="149" y2={y2} stroke="rgba(168,85,247,0.12)" strokeWidth="1"/>
      )))}
      {/* Connections h1→h2 */}
      {[55,95,135].flatMap((y1,i)=>[70,110,150].map((y2,j)=>(
        <line key={`${i}-${j}`} x1="171" y1={y1} x2="249" y2={y2} stroke="rgba(99,102,241,0.12)" strokeWidth="1"/>
      )))}
      {/* Connections h2→output */}
      {[70,110,150].map((y,i)=>(
        <line key={i} x1="271" y1={y} x2="317" y2="100" stroke="rgba(56,189,248,0.15)" strokeWidth="1"/>
      ))}
      {/* Spark/AI label */}
      <text x="185" y="170" textAnchor="middle" fontSize="8" fill="rgba(168,85,247,0.5)" fontFamily="monospace" letterSpacing="3">NEURAL · QA</text>
      <defs>
        <linearGradient id="ai-bg" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#0d0518"/><stop offset="1" stopColor="#060210"/></linearGradient>
      </defs>
    </svg>
  );
}

/* ── DevOps/CI-CD: pipeline flow ── */
export function DevOpsCICDArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="360" height="180" rx="16" fill="url(#dv-bg)" />
      {/* Pipeline stages */}
      {[
        {label:"Code",x:30,color:"rgba(99,102,241,0.8)"},
        {label:"Build",x:95,color:"rgba(56,189,248,0.8)"},
        {label:"Test",x:160,color:"rgba(52,211,153,0.8)"},
        {label:"Scan",x:225,color:"rgba(251,191,36,0.8)"},
        {label:"Deploy",x:290,color:"rgba(239,68,68,0.5)"},
      ].map((stage,i)=>(
        <g key={stage.label}>
          {/* Arrow connector */}
          {i>0&&<path d={`M${stage.x-5} 90 L${stage.x+5} 90`} stroke="rgba(255,255,255,0.2)" strokeWidth="2" markerEnd="url(#dv-arrow)"/>}
          <circle cx={stage.x+22} cy="90" r="20" fill="rgba(255,255,255,0.04)" stroke={stage.color} strokeWidth="1.5"/>
          <text x={stage.x+22} y="87" textAnchor="middle" fontSize="7.5" fill={stage.color} fontWeight="600">{stage.label}</text>
          {i<4&&<text x={stage.x+22} y="98" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.3)">✓</text>}
        </g>
      ))}
      {/* Connecting lines */}
      <line x1="52" y1="90" x2="95" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      <line x1="117" y1="90" x2="160" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      <line x1="182" y1="90" x2="225" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      <line x1="247" y1="90" x2="290" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      {/* Feedback loop arc */}
      <path d="M312 90 Q340 90 340 50 Q340 20 180 20 Q20 20 20 50 Q20 70 52 90" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" strokeDasharray="5 4"/>
      <text x="180" y="15" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.2)">continuous feedback</text>
      {/* Branch indicators */}
      <path d="M160 110 L160 135 L195 155 M160 135 L125 155" stroke="rgba(52,211,153,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <circle cx="195" cy="158" r="5" fill="rgba(52,211,153,0.3)" stroke="rgba(52,211,153,0.6)" strokeWidth="1"/>
      <circle cx="125" cy="158" r="5" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <text x="195" y="172" textAnchor="middle" fontSize="7" fill="rgba(52,211,153,0.5)">main</text>
      <text x="125" y="172" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.3)">feature</text>
      <defs>
        <linearGradient id="dv-bg" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#020a0d"/><stop offset="1" stopColor="#000507"/></linearGradient>
      </defs>
    </svg>
  );
}

/* ── Application Development: browser + code layers ── */
export function AppDevelopmentArt({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="360" height="180" rx="16" fill="url(#apd-bg)" />
      {/* Browser window */}
      <rect x="40" y="20" width="280" height="145" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      {/* Browser header */}
      <rect x="40" y="20" width="280" height="28" rx="10" fill="rgba(255,255,255,0.07)"/>
      <rect x="40" y="38" width="280" height="10" fill="rgba(255,255,255,0.07)"/>
      <circle cx="57" cy="34" r="4" fill="rgba(239,68,68,0.6)"/>
      <circle cx="71" cy="34" r="4" fill="rgba(251,191,36,0.6)"/>
      <circle cx="85" cy="34" r="4" fill="rgba(34,197,94,0.6)"/>
      {/* URL bar */}
      <rect x="100" y="28" width="160" height="12" rx="6" fill="rgba(255,255,255,0.06)"/>
      <text x="180" y="37" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.3)">testyantra.app/dashboard</text>
      {/* App UI mockup */}
      {/* Sidebar */}
      <rect x="48" y="48" width="55" height="110" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      {[58,72,86,100,114,128,142].map((y,i)=>(
        <rect key={i} x="55" y={y} width="34" height="8" rx="3" fill={i===0?"rgba(99,102,241,0.4)":"rgba(255,255,255,0.07)"}/>
      ))}
      {/* Main content area */}
      <rect x="110" y="52" width="200" height="50" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <rect x="118" y="60" width="80" height="8" rx="3" fill="rgba(255,255,255,0.15)"/>
      <rect x="118" y="72" width="120" height="6" rx="3" fill="rgba(255,255,255,0.07)"/>
      <rect x="118" y="82" width="100" height="6" rx="3" fill="rgba(255,255,255,0.05)"/>
      {/* Cards row */}
      {[0,1,2].map(i=>(
        <rect key={i} x={110+i*68} y="112" width="62" height="40" rx="6"
          fill={i===0?"rgba(99,102,241,0.15)":"rgba(255,255,255,0.04)"}
          stroke={i===0?"rgba(99,102,241,0.3)":"rgba(255,255,255,0.06)"} strokeWidth="1"/>
      ))}
      {/* Stack badges */}
      {["React","Node","TS","AWS"].map((t,i)=>(
        <g key={t}>
          <rect x={40+i*78} y="163" width="50" height="14" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
          <text x={65+i*78} y="173" textAnchor="middle" fontSize="6.5" fill="rgba(255,255,255,0.5)">{t}</text>
        </g>
      ))}
      <defs>
        <linearGradient id="apd-bg" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse"><stop stopColor="#0f0a1e"/><stop offset="1" stopColor="#060410"/></linearGradient>
      </defs>
    </svg>
  );
}

export const SERVICE_ART: Record<string, React.FC<Props>> = {
  "managed-qa": ManagedQAArt,
  "crowd-testing": CrowdTestingArt,
  "professional-services": ProfessionalServicesArt,
  training: TrainingArt,
  "test-automation": TestAutomationArt,
  "performance-engineering": PerformanceEngineeringArt,
  "security-testing": SecurityTestingArt,
  "ai-testing": AITestingArt,
  "devops-cicd": DevOpsCICDArt,
  "application-development": AppDevelopmentArt,
};
