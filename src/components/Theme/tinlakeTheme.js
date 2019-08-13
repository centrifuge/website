import { css } from "styled-components";

export default {
  global: {
   edgeSize: {
      tinlakeH1MarginBt: "31px"
    },
   breakpoints: {
      small: {
        edgeSize: {
          tinlakeH1MarginBt: "23px"
        },
      },
      large: {}
    }
  },
  paragraph: {
     extend: props => css`
      font-size: 20px;
      line-height: 32px;

      @media only screen and (min-width: 769px) {
         font-size: 14px;
         line-height: 24px;            
      }
     `
  }
}