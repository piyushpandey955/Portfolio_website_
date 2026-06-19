/**
 * PP monogram — two P bowls stacked, sharing one vertical stem.
 * Colors are hardcoded: cream + volt-green on dark bg (logo has fixed identity across themes).
 */
const Logo = ({ size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Background tile */}
    <rect width="40" height="40" rx="10" fill="#111827" />
    <rect width="40" height="40" rx="10" fill="none" stroke="rgba(0,255,148,0.22)" strokeWidth="0.75" />

    {/* Shared vertical stem */}
    <rect x="9" y="9" width="3.5" height="22" rx="1.75" fill="#EEE9E0" />

    {/* P1 bowl — upper, cream */}
    <path d="M 12.5 9 A 8.25 5.25 0 0 1 12.5 19.5 Z" fill="#EEE9E0" />

    {/* P2 bowl — lower, volt-green (the signature accent) */}
    <path d="M 12.5 20.5 A 7 4.75 0 0 1 12.5 30 Z" fill="#00FF94" />
  </svg>
);

export default Logo;
