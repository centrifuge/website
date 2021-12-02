import theme from "../../Theme/theme";

export function mediaGreaterThan(
  breakpoint: keyof typeof theme.global.breakpoints
) {
  return `
  @media only screen and (min-width: ${theme.global.breakpoints[breakpoint]
    .value + 1}px) 
  
`;
}

export const mediaGreaterThanPx = (px: number) => `@media (min-width: ${px}px)`;
