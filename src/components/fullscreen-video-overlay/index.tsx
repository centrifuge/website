import * as React from 'react';
import { FullscreenOverlay, CloseIcon, ThumbnailImage } from './style';

type FullscreenVideoOverlayProps = {
  thumbnail: string;
  videoId: string;
};

const FullscreenVideoOverlay: React.FC<FullscreenVideoOverlayProps> = ({ thumbnail, videoId }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  //Close if user clicks outside of vid iframe
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (overlayRef.current === event.target) {
      setIsOpen(false);
    }
  };

  return (
  <>
    <ThumbnailImage src={thumbnail} alt="Play Video" onClick={() => setIsOpen(true)} />
    {isOpen && (
      <FullscreenOverlay ref={overlayRef} onClick={handleOverlayClick}>
        <CloseIcon onClick={() => setIsOpen(false)}>×</CloseIcon>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="Introduction to Centrifuge"
        />
      </FullscreenOverlay>
    )}
  </>
  );
};

export default FullscreenVideoOverlay;
