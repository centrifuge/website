import React from 'react'
import styled, { keyframes, useTheme } from 'styled-components'

const rotate = keyframes`
 100% { transform: rotate(360deg) }
`

const Group = styled.g`
  transform-origin: 50%;
  animation: ${rotate} 3s infinite linear;
  animation-direction: normal;
`

const Path = styled.path<{ stagger: number }>`
  transform-origin: 50%;
  animation-name: ${rotate};
  animation-iteration-count: infinite;
  animation-duration: ${({ stagger }) => stagger * 3}s;
  animation-direction: alternate-reverse;
`

export function Swirl() {
  const { colors } = useTheme()

  return (
    <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Group>
        <Path
          stagger={1.5}
          d="M372.5 462.176C335.259 483.677 293.015 494.998 250.013 495C207.011 495.002 164.765 483.686 127.522 462.189C90.2791 440.692 59.35 409.771 37.843 372.533C16.3361 335.296 5.00902 293.054 5.00001 250.051L122.711 250.027C122.716 272.368 128.601 294.315 139.775 313.662C150.949 333.008 167.018 349.073 186.367 360.242C205.717 371.411 227.665 377.29 250.007 377.289C272.348 377.288 294.296 371.406 313.644 360.235L372.5 462.176Z"
          fill="url(#swirl-fill-0)"
        />
        <Path
          stagger={1}
          d="M359.255 48.5864C393.317 69.0528 421.392 98.1238 440.659 132.878C459.926 167.633 469.706 206.846 469.017 246.577C468.328 286.309 457.193 325.16 436.732 359.225C416.271 393.29 387.204 421.369 352.453 440.642L293.782 334.849C309.965 325.875 323.5 312.799 333.028 296.936C342.557 281.072 347.742 262.981 348.063 244.479C348.384 225.977 343.829 207.716 334.857 191.532C325.885 175.348 312.811 161.811 296.95 152.28L359.255 48.5864Z"
          fill="url(#swirl-fill-1)"
        />
        <Path
          stagger={2.5}
          d="M53 250C53 215.423 62.1008 181.455 79.3878 151.509C96.6749 121.563 121.539 96.6951 151.482 79.4033C181.425 62.1116 215.392 53.0054 249.969 53C284.546 52.9946 318.516 62.09 348.464 79.3724L295.596 170.987C281.728 162.984 265.997 158.773 249.986 158.775C233.974 158.778 218.245 162.994 204.379 171.002C190.514 179.009 179 190.525 170.995 204.392C162.989 218.259 158.775 233.988 158.775 250H53Z"
          fill="url(#swirl-fill-2)"
        />
      </Group>
      <Group>
        <path
          d="M250.383 297.561C256.579 297.561 262.714 296.341 268.438 293.97C274.163 291.599 279.364 288.124 283.745 283.742C288.126 279.361 291.602 274.16 293.973 268.436C296.344 262.711 297.564 256.576 297.564 250.38C297.564 244.184 296.344 238.049 293.973 232.324C291.602 226.6 288.126 221.399 283.745 217.018C279.364 212.636 274.163 209.161 268.438 206.79C262.714 204.419 256.579 203.198 250.383 203.198L250.383 228.326C253.279 228.326 256.147 228.897 258.823 230.005C261.498 231.113 263.929 232.738 265.977 234.786C268.025 236.834 269.65 239.265 270.758 241.94C271.866 244.616 272.437 247.484 272.437 250.38C272.437 253.276 271.866 256.144 270.758 258.82C269.65 261.495 268.025 263.926 265.977 265.974C263.929 268.022 261.498 269.647 258.823 270.755C256.147 271.863 253.279 272.434 250.383 272.434L250.383 297.561Z"
          fill="url(#swirl-fill-3)"
        />
        <path
          d="M250.383 203.199C244.187 203.199 238.052 204.419 232.327 206.79C226.603 209.161 221.402 212.636 217.021 217.018C212.639 221.399 209.164 226.6 206.793 232.324C204.422 238.049 203.201 244.184 203.201 250.38C203.201 256.576 204.422 262.711 206.793 268.436C209.164 274.16 212.639 279.361 217.021 283.742C221.402 288.124 226.603 291.599 232.327 293.97C238.052 296.341 244.187 297.562 250.383 297.562L250.383 272.434C247.487 272.434 244.619 271.863 241.943 270.755C239.268 269.647 236.837 268.022 234.789 265.974C232.741 263.926 231.116 261.495 230.008 258.82C228.9 256.144 228.329 253.276 228.329 250.38C228.329 247.484 228.9 244.616 230.008 241.94C231.116 239.265 232.741 236.834 234.789 234.786C236.837 232.738 239.268 231.113 241.943 230.005C244.619 228.897 247.487 228.326 250.383 228.326L250.383 203.199Z"
          fill="url(#swirl-fill-4)"
        />
      </Group>
      <defs>
        <linearGradient id="swirl-fill-0" x1="390" y1="449.5" x2="4.99997" y2="250" gradientUnits="userSpaceOnUse">
          <stop offset="0.00586431" stopColor={colors.accentSecondary} />
          <stop offset="1" stopColor={colors.accentSecondary} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="swirl-fill-1" x1="355.5" y1="41" x2="388.5" y2="475" gradientUnits="userSpaceOnUse">
          <stop offset="0.00586431" stopColor={colors.accentSecondary} />
          <stop offset="1" stopColor={colors.accentSecondary} stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="swirl-fill-2"
          x1="40.0335"
          y1="263.682"
          x2="339.985"
          y2="53.1898"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00586431" stopColor={colors.accentSecondary} />
          <stop offset="1" stopColor={colors.accentSecondary} stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id="swirl-fill-3"
          x1="250.019"
          y1="196.896"
          x2="286.932"
          y2="292.331"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.accentPrimary} stopOpacity="0" />
          <stop offset="1" stopColor={colors.accentPrimary} />
        </linearGradient>
        <linearGradient
          id="swirl-fill-4"
          x1="250.747"
          y1="303.864"
          x2="213.834"
          y2="208.429"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.accentPrimary} stopOpacity="0" />
          <stop offset="1" stopColor={colors.accentPrimary} />
        </linearGradient>
      </defs>
    </svg>
  )
}
