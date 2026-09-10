export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/916266316279" target="_blank" rel="noopener noreferrer"
      style={{position:"fixed",bottom:"1.5rem",right:"1.5rem",zIndex:9999,width:56,height:56,borderRadius:"50%",
        background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",
        boxShadow:"0 4px 18px rgba(37,211,102,.45)",transition:"transform .2s"}}
      onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.12)")}
      onMouseLeave={e=>(e.currentTarget.style.transform="")}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.8 6.5L4 29l7.7-1.8A13 13 0 0016 28c6.6 0 12-5.4 12-12S22.6 3 16 3z" fill="white"/>
        <path d="M21.5 18.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07-1.26-.46-2.4-1.48c-.89-.79-1.49-1.77-1.66-2.07s-.02-.46.13-.61.3-.35.45-.52.2-.3.3-.5.05-.37-.02-.52-.67-1.62-.92-2.22c-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08 2.1 3.2 5.08 4.49c.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42s.25-1.3.17-1.42-.27-.2-.57-.35z" fill="#25D366"/>
      </svg>
    </a>
  );
}
