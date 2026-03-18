import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bar">
        <div className="footer__left">
          Designed &amp; built by <span className="footer__arrow">▸</span> Linda Loaiza · 2025
        </div>
        <div className="footer__right">
          <span className="footer__tech">Next.js</span>
          <span className="footer__tech">TypeScript</span>
          <span className="footer__tech">CSS BEM</span>
        </div>
      </div>
    </footer>
  );
}
