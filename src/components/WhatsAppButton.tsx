// WhatsAppButton.tsx — floating WhatsApp button (no external deps)
import { useState } from 'react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/916266316279"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 9999,
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: hovered
          ? '0 8px 32px rgba(37,211,102,.55)'
          : '0 4px 18px rgba(37,211,102,.4)',
        transform: hovered ? 'scale(1.12)' : 'scale(1)',
        transition: 'transform .2s ease, box-shadow .2s ease',
        textDecoration: 'none',
      }}
    >
      {/* WhatsApp SVG icon */}
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.697-1.81A12.94 12.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3Z"
          fill="white"
        />
        <path
          d="M21.5 18.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
          fill="#25D366"
        />
      </svg>

      {/* Pulse ring */}
      <span style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        border: '2px solid #25D366',
        animation: 'wa-pulse 2s ease-out infinite',
        opacity: 0,
      }} />

      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: .7; }
          70%  { transform: scale(1.6); opacity: 0;  }
          100% { transform: scale(1.6); opacity: 0;  }
        }
      `}</style>
    </a>
  );
}
