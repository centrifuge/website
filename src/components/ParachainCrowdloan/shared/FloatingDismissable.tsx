import React from "react";
import { useLocalStorage } from "react-use";
import styled from "styled-components";

const FloatingDiv = styled.div`
  position: fixed;
  bottom: 0;
  right: 16px;
  width: 268px;
`;

const PositionBase = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const FloatingButtonHoverArea = styled.div`
  display: none;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 100%;
  height: 40px;

  ${FloatingDiv}:hover &,
  &:hover {
    display: block;
  }
`;

const FloatingButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
  appearance: none;
  border: none;
  width: 32px;
  height: 32px;
  background-color: black;
  border-radius: 32px;
  cursor: pointer;
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

type FloatingDismissableProps = {
  storageKey: string;
};

export const FloatingDismissable: React.FC<FloatingDismissableProps> = ({
  children,
  storageKey,
}) => {
  const [visible, setVisible] = useLocalStorage<boolean>(
    `FloatingDismissable(${storageKey})`,
    !!storageKey
  );

  if (!storageKey || !visible) return null;

  const dismiss = () => {
    setVisible(false);
  };

  return (
    <FloatingDiv>
      <PositionBase>
        <FloatingButtonHoverArea>
          <FloatingButton onClick={dismiss}>&#x00D7;</FloatingButton>
        </FloatingButtonHoverArea>
        {children}
      </PositionBase>
    </FloatingDiv>
  );
};
