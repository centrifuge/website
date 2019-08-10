import { css } from "styled-components";

export default {
   heading: {
      extend: () => css`
         @media only screen and (max-width: 768px) {
            font-size: 28px;
            line-height: 48px;
            text-align: center;
         }
      `
   },
   paragraph: {
      extend: () => css`
         @media only screen and (max-width: 768px) {
            text-align: center;
         }
      `
   },
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
  }
}