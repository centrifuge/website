import React from 'react'
import styled, { useTheme } from 'styled-components'
import { clamp } from '../../utils/clamp'

const Group = styled.g`
  transform-origin: 50%;
`

const Path = styled.path`
  transform-origin: 50%;
`

const keyframes = [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }]
const duration = 3000
const iterations = Infinity
const fill = 'both'

type SwirlProps = {
  animate: boolean
  delta: number
}

export function Swirl({ animate = false, delta = 0 }: SwirlProps) {
  const { colors } = useTheme()
  const [animations, setAnimations] = React.useState<Animation[]>([])

  const outer = React.useRef<SVGGElement>(null)
  const inner = React.useRef<SVGGElement>(null)
  const path1 = React.useRef<SVGPathElement>(null)
  const path2 = React.useRef<SVGPathElement>(null)
  const path3 = React.useRef<SVGPathElement>(null)

  React.useEffect(() => {
    const _animations: Animation[] = []

    new Array(outer, inner).forEach((element, index) => {
      if (element.current) {
        _animations.push(
          element.current.animate(keyframes, {
            easing: index == 0 ? 'ease-in-out' : 'linear',
            duration,
            iterations,
            fill,
          })
        )
      }
    })

    new Array(path1, path2, path3).forEach((element, index) => {
      if (element.current) {
        _animations.push(
          element.current.animate(keyframes, {
            duration: (1 + Math.random()) * duration,
            direction: 'alternate-reverse',
            easing: 'ease-in-out',
            iterations,
            fill,
          })
        )
      }
    })

    setAnimations(_animations)
  }, [])

  React.useEffect(() => {
    animations.forEach((animation) => {
      if (animate) {
        animation.play()
      } else {
        animation.pause()
      }
    })
  }, [animate, animations])

  React.useEffect(() => {
    animations.forEach((animation) => {
      animation.playbackRate = 0.1 + clamp(delta, 0, 400) * 0.008
    })
  }, [delta, animations])

  return (
    <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Group ref={outer}>
        <Path
          ref={path1}
          d="M125 465.506C86.9952 443.564 55.4357 412.005 33.4936 374C11.5516 335.995 -3.83647e-06 292.884 0 249C3.83648e-06 205.116 11.5516 162.005 33.4937 124C55.4357 85.9952 86.9952 54.4357 125 32.4936L193.75 151.572C176.648 161.446 162.446 175.648 152.572 192.75C142.698 209.852 137.5 229.252 137.5 249C137.5 268.748 142.698 288.148 152.572 305.25C162.446 322.352 176.648 336.554 193.75 346.428L125 465.506Z"
          fill="url(#swirl-fill-0)"
        />
        <Path
          ref={path2}
          d="M465.902 249C465.902 286.899 455.926 324.13 436.976 356.951C418.027 389.772 390.772 417.027 357.951 435.976C325.13 454.926 287.899 464.902 250 464.902C212.101 464.902 174.87 454.926 142.049 435.976L201.422 333.139C216.192 341.667 232.946 346.156 250 346.156C267.054 346.156 283.808 341.667 298.578 333.139C313.347 324.612 325.612 312.347 334.139 297.578C342.667 282.808 347.156 266.054 347.156 249L465.902 249Z"
          fill="url(#swirl-fill-1)"
        />
        <Path
          ref={path3}
          d="M153.247 81.4187C182.664 64.4349 216.033 55.4937 250 55.4937C283.967 55.4937 317.337 64.435 346.753 81.4187C376.17 98.4024 400.598 122.83 417.581 152.247C434.565 181.664 443.506 215.033 443.506 249L319.869 249C319.869 236.735 316.641 224.687 310.509 214.065C304.376 203.444 295.556 194.624 284.935 188.492C274.313 182.359 262.265 179.131 250 179.131C237.735 179.131 225.687 182.359 215.065 188.492L153.247 81.4187Z"
          fill="url(#swirl-fill-2)"
        />
      </Group>
      <Group ref={inner}>
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
        <linearGradient
          id="swirl-fill-0"
          x1="14.2227"
          y1="64.6057"
          x2="146.441"
          y2="475.483"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00586431" stopColor={colors.accentSecondary} />
          <stop offset="1" stopColor={colors.accentSecondary} stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="swirl-fill-1"
          x1="213.9"
          y1="504.961"
          x2="464.105"
          y2="228.657"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00586431" stopColor={colors.accentSecondary} />
          <stop offset="1" stopColor={colors.accentSecondary} stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="swirl-fill-2"
          x1="464.853"
          y1="162.315"
          x2="138.262"
          y2="91.93"
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
