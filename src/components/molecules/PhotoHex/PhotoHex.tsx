import Image from "next/image";
import "./PhotoHex.css";

export function PhotoHex() {
  return (
    <div className="photo-hex">
      <div className="photo-hex__wrap">
        <div className="photo-hex__ring photo-hex__ring--outer">
          <svg viewBox="0 0 190 210" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <polygon
              points="95,3 183,49 183,161 95,207 7,161 7,49"
              fill="none"
              stroke="#00FFC8"
              strokeWidth="1"
              strokeDasharray="7 5"
              opacity="0.38"
            />
          </svg>
        </div>
        <div className="photo-hex__ring photo-hex__ring--inner">
          <svg viewBox="0 0 190 210" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <polygon
              points="95,13 173,56 173,154 95,197 17,154 17,56"
              fill="none"
              stroke="#7B61FF"
              strokeWidth="0.75"
              strokeDasharray="3 9"
              opacity="0.22"
            />
          </svg>
        </div>
        <div className="photo-hex__clip">
          <div className="photo-hex__photo">
            <Image
              src="/og-image.webp"
              alt="Linda Loaiza"
              width={176}
              height={194}
              className="photo-hex__img"
              priority
            />
            <div className="photo-hex__scanlines" />
          </div>
        </div>
        <div className="photo-hex__corner photo-hex__corner--tl" />
        <div className="photo-hex__corner photo-hex__corner--tr" />
        <div className="photo-hex__corner photo-hex__corner--bl" />
        <div className="photo-hex__corner photo-hex__corner--br" />
      </div>
      <div className="photo-hex__info">
        <span className="photo-hex__name">Linda Loaiza</span>
        <span className="photo-hex__role">Software Engineer</span>
        <div className="photo-hex__status">
          <span className="photo-hex__status-dot" />
          <span className="photo-hex__status-text">let&apos;s connect</span>
        </div>
      </div>
    </div>
  );
}
