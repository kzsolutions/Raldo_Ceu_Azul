import type { SVGProps } from "react";

type IllustrationProps = SVGProps<SVGSVGElement>;

function Frame({ children, ...props }: IllustrationProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Posto de combustível — painel de ilustração on-brand. */
export function FuelIllustration(props: IllustrationProps) {
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id="fuel-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eaf2ff" />
          <stop offset="1" stopColor="#dbe8fb" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#fuel-bg)" />
      <circle cx="322" cy="58" r="26" fill="#C9A227" opacity="0.9" />
      <path d="M0 196h400v64H0z" fill="#cdd9ec" />
      <path d="M0 210h400v50H0z" fill="#b9c8e0" />
      <rect x="40" y="86" width="220" height="18" rx="9" fill="#000090" />
      <rect x="52" y="104" width="14" height="18" fill="#000078" />
      <rect x="234" y="104" width="14" height="18" fill="#000078" />
      <rect x="70" y="112" width="120" height="86" rx="8" fill="#ffffff" stroke="#c7d4e8" strokeWidth="2" />
      <rect x="84" y="128" width="92" height="34" rx="5" fill="#1878F0" />
      <rect x="92" y="138" width="34" height="14" rx="3" fill="#ffffff" opacity="0.85" />
      <rect x="84" y="176" width="92" height="8" rx="4" fill="#dbe8fb" />
      <path d="M214 118c0-6 5-11 11-11h10l7 22h-28z" fill="#000060" />
      <rect x="222" y="130" width="6" height="40" rx="3" fill="#0b1220" />
      <g fill="#1878F0">
        <rect x="150" y="60" width="8" height="26" rx="4" />
        <rect x="168" y="52" width="8" height="34" rx="4" opacity="0.7" />
        <rect x="186" y="66" width="8" height="20" rx="4" opacity="0.5" />
      </g>
      <rect x="250" y="150" width="120" height="50" rx="12" fill="#ffffff" />
      <rect x="264" y="164" width="42" height="22" rx="5" fill="#1878F0" opacity="0.85" />
      <rect x="316" y="164" width="42" height="22" rx="5" fill="#000090" opacity="0.8" />
      <circle cx="278" cy="206" r="12" fill="#0b1220" />
      <circle cx="344" cy="206" r="12" fill="#0b1220" />
    </Frame>
  );
}

/** Residencial / alojamento. */
export function LodgeIllustration(props: IllustrationProps) {
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id="lodge-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eaf2ff" />
          <stop offset="1" stopColor="#ddeafb" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#lodge-bg)" />
      <circle cx="86" cy="62" r="24" fill="#C9A227" opacity="0.9" />
      <path d="M0 200h400v60H0z" fill="#c3d2e8" />
      <rect x="96" y="96" width="208" height="116" rx="6" fill="#ffffff" stroke="#c7d4e8" strokeWidth="2" />
      <path d="M84 96 200 44l116 52z" fill="#000090" />
      <rect x="186" y="150" width="28" height="62" rx="4" fill="#1878F0" />
      <g fill="#1878F0" opacity="0.85">
        <rect x="120" y="118" width="26" height="24" rx="3" />
        <rect x="162" y="118" width="26" height="24" rx="3" />
        <rect x="212" y="118" width="26" height="24" rx="3" />
        <rect x="254" y="118" width="26" height="24" rx="3" />
        <rect x="120" y="160" width="26" height="24" rx="3" opacity="0.55" />
        <rect x="254" y="160" width="26" height="24" rx="3" opacity="0.55" />
      </g>
      <rect x="58" y="188" width="18" height="24" rx="3" fill="#000060" />
      <circle cx="67" cy="176" r="20" fill="#1878F0" opacity="0.35" />
      <rect x="326" y="196" width="14" height="16" rx="3" fill="#000060" />
      <circle cx="333" cy="188" r="14" fill="#1878F0" opacity="0.35" />
      <path d="M300 84c10-8 22-8 34 0" stroke="#C9A227" strokeWidth="5" fill="none" strokeLinecap="round" />
    </Frame>
  );
}

/** Ferragem / materiais de construção. */
export function HardwareIllustration(props: IllustrationProps) {
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id="hard-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef3fb" />
          <stop offset="1" stopColor="#e0e9f7" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#hard-bg)" />
      <path d="M0 206h400v54H0z" fill="#c3d2e8" />
      <g>
        <rect x="40" y="120" width="120" height="86" rx="8" fill="#ffffff" stroke="#c7d4e8" strokeWidth="2" />
        <g fill="#1878F0">
          <rect x="56" y="138" width="88" height="14" rx="4" />
          <rect x="56" y="160" width="60" height="14" rx="4" opacity="0.7" />
        </g>
        <rect x="56" y="184" width="88" height="10" rx="5" fill="#000090" opacity="0.85" />
      </g>
      <g>
        <rect x="176" y="96" width="54" height="26" rx="4" fill="#C9A227" />
        <rect x="188" y="122" width="30" height="84" rx="6" fill="#0b1220" />
      </g>
      <g stroke="#000090" strokeWidth="12" strokeLinecap="round" fill="none">
        <path d="M272 96v96" />
        <path d="M272 96h-22" />
      </g>
      <circle cx="316" cy="118" r="26" fill="none" stroke="#1878F0" strokeWidth="12" />
      <path d="M316 144h34" stroke="#1878F0" strokeWidth="12" strokeLinecap="round" />
      <g fill="#000060" opacity="0.85">
        <rect x="60" y="58" width="40" height="18" rx="3" />
        <rect x="104" y="72" width="46" height="18" rx="3" />
      </g>
    </Frame>
  );
}

/** Catering e eventos. */
export function CateringIllustration(props: IllustrationProps) {
  return (
    <Frame {...props}>
      <defs>
        <linearGradient id="cat-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eaf2ff" />
          <stop offset="1" stopColor="#ddeafb" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#cat-bg)" />
      <circle cx="326" cy="56" r="22" fill="#C9A227" opacity="0.9" />
      <path d="M0 200h400v60H0z" fill="#c3d2e8" />
      <ellipse cx="200" cy="200" rx="150" ry="20" fill="#b6c6df" />
      <path d="M110 200c0-50 40-88 90-88s90 38 90 88z" fill="#ffffff" stroke="#c7d4e8" strokeWidth="2" />
      <path d="M118 200c0-46 37-80 82-80s82 34 82 80z" fill="#eef4fc" />
      <rect x="192" y="96" width="16" height="18" rx="6" fill="#1878F0" />
      <circle cx="200" cy="90" r="9" fill="#000090" />
      <g stroke="#9fb2cf" strokeWidth="8" strokeLinecap="round" fill="none">
        <path d="M84 128v72" />
        <path d="M74 128v22M94 128v22" />
        <path d="M316 128v72" />
        <path d="M308 122c0-8 16-8 16 0v18h-16z" fill="#1878F0" stroke="none" />
      </g>
      <g fill="#1878F0" opacity="0.55">
        <rect x="140" y="146" width="16" height="10" rx="3" />
        <rect x="244" y="146" width="16" height="10" rx="3" />
      </g>
    </Frame>
  );
}

export const illustrations = {
  combustiveis: FuelIllustration,
  residencial: LodgeIllustration,
  ferragem: HardwareIllustration,
  catering: CateringIllustration,
} as const;
