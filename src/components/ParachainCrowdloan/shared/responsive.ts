const BREAKPOINT_NAME = ["S", "M", "L"];
const BREAKPOINT_START = [0, 500, 900, 9999999];

export const onBreakpoint = (bp: typeof BREAKPOINT_NAME[number]) => {
  const i = BREAKPOINT_NAME.indexOf(bp);
  return `@media (min-width: ${BREAKPOINT_START[i]}px)`;
};
