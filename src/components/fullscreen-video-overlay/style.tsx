import styled from 'styled-components';

export const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 70%;
    height: 70%;
  }
`;

export const CloseIcon = styled.button`
  font-family: Inter, sans-serif;
  position: absolute;
  top: 1%;
  right: 3%;
  background: none;
  border: none;
  color: white;
  font-size: 80px;
  cursor: pointer;
`;

export const ThumbnailImage = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  aspect-ratio: 4/3;
`;
