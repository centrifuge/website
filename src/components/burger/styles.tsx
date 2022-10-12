import styled from 'styled-components'

export const Button = styled.button`
  --size: 40px;

  position: relative;
  display: block;
  width: var(--size);
  height: var(--size);

  span {
    --width: 80%;
    --height: 2px;

    position: absolute;
    top: calc(50% - var(--height) * 0.5);
    left: calc(50% - var(--width) * 0.5);
    width: var(--width);
    height: var(--height);

    transition: transform 0.2s;
    background-color: ${({ theme }) => theme.colors.textPrimary};
  }

  span:nth-child(1) {
    transform: ${({ open }) => (open ? 'translateY(0) rotate(-45deg)' : 'translateY(-400%) rotate(0)')};
  }

  span:nth-child(2) {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  span:nth-child(3) {
    transform: ${({ open }) => (open ? 'translateY(0) rotate(-45deg)' : 'translateY(400%) rotate(0)')};
  }
`
