import * as React from 'react'

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Inter-roman.var.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <style
      dangerouslySetInnerHTML={{
        __html: `
          @font-face {
            font-family: 'Inter';
            font-weight: 400 700;
            font-display: swap;
            font-style: normal;
            font-named-instance: 'Regular';
            src: url(/fonts/Inter-roman.var.woff2) format("woff2");
          }`,
      }}
    />,
  ])
  setHtmlAttributes({ lang: 'en-US' })
}
