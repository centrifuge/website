import { Box, Grid, Shelf, ShelfProps, Stack, Text } from '@centrifuge/fabric'
import type { Body as MatterBody } from 'matter-js'
import * as React from 'react'
import styled from 'styled-components'
import { CenterContainer } from './CenterContainer'

export type ValuesSectionProps = {
  title: string
  items: [string, string, string, string]
}

const StyledBall = styled(Shelf)`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.accentPrimary};
  background-color: ${({ theme }) => theme.colors.yellowScale[30]};
  aspect-ratio: 1 / 1;
  justify-content: center;
`

type BallProps = ShelfProps

const Ball = React.forwardRef<HTMLDivElement, BallProps>(({ children, ...rest }, ref) => {
  return (
    <StyledBall ref={ref} role="listitem" p={3} {...rest}>
      <Text fontSize={[20, 32, 48, 56]} fontWeight={500} color="accentPrimary">
        {children}
      </Text>
    </StyledBall>
  )
})

export function ValuesSection({ title, items }: ValuesSectionProps) {
  const state = React.useState(() => ({
    containerRef: React.createRef<HTMLDivElement>(),
    titleRef: React.createRef<HTMLDivElement>(),
    ballRefs: Array.from({ length: 4 }, () => React.createRef<HTMLDivElement>()),
    mouse: { x: 0, y: 0 },
    cleanup: null as null | (() => void),
  }))[0]

  const [one, two, three, four] = items

  async function boot() {
    const Matter = await import('matter-js')
    const { Engine, Composite, Bodies, Runner, Body, World, Events, Vector } = Matter

    const engine = Engine.create()
    const runner = Runner.create()

    engine.gravity.scale = 0

    const container = state.containerRef.current!
    const title = state.titleRef.current!
    const cw = container.clientWidth
    const ch = container.clientHeight

    let isContainerVisible = false
    let raf: number
    let mouse = Vector.create(0, 0)
    let lastWindowWidth = window.innerWidth

    const bodies: MatterBody[] = []

    // Box to avoid the balls overlapping the title
    const titleBox = Bodies.rectangle(
      title.offsetLeft + title.clientWidth / 2,
      title.offsetTop + title.clientHeight / 2,
      title.clientWidth,
      title.clientHeight,
      { isStatic: true }
    )

    // Boundaries to avoid balls escaping
    const borderTop = Bodies.rectangle(cw / 2, -10, 5000, 20, { isStatic: true })
    const borderLeft = Bodies.rectangle(-10, ch / 2, 20, 5000, { isStatic: true })
    const borderBottom = Bodies.rectangle(cw / 2, ch + 10, 5000, 20, { isStatic: true })
    const borderRight = Bodies.rectangle(cw + 10, ch / 2, 20, 5000, { isStatic: true })

    World.add(engine.world, [titleBox, borderTop, borderLeft, borderBottom, borderRight])

    // Add a circle for each ball
    state.ballRefs.forEach((ref, i) => {
      const el = ref.current!
      const { x, y, r } = getCircle(el)
      const body = Bodies.circle(x, y, r, { mass: 100000 })

      World.add(engine.world, body)
      bodies[i] = body
    })

    function getCircle(el: HTMLElement) {
      const r = el.clientWidth / 2 + 2
      const x = el.offsetLeft + r
      const y = el.offsetTop + r
      return {
        x,
        y,
        r: r + 8,
      }
    }

    function getVectorToLine(linePoint: { x: number; y: number }, lineAngle: number, point: { x: number; y: number }) {
      const { x: lx, y: ly } = linePoint
      const { x: px, y: py } = point

      const distance = Math.cos(lineAngle) * (ly - py) - Math.sin(lineAngle) * (lx - px)
      const absDistance = Math.abs(distance)
      const sign = Math.sign(distance)
      const angle = sign === -1 ? lineAngle - 0.5 * Math.PI : lineAngle + 0.5 * Math.PI
      const vector = Vector.create(absDistance * Math.cos(angle), absDistance * Math.sin(angle))
      return vector
    }

    function loop() {
      raf = requestAnimationFrame(loop)

      // Only run the simulation when the section is visible
      if (!isContainerVisible) return

      const time = performance.now()

      Runner.tick(runner, engine, time)

      bodies.forEach((body, i) => {
        const el = state.ballRefs[i].current!
        const r = el.clientWidth / 2
        const elX = el.offsetLeft + r
        const elY = el.offsetTop + r
        const {
          position: { x, y },
        } = body
        // Position each DOM element at the same position as its physics circle
        el.style.transform = `translate(${x - elX}px,${y - elY}px)`
      })
    }

    Events.on(engine, 'beforeUpdate', () => {
      const x = Math.sin(performance.now() / 1000 / 4) / 2 + 0.5
      const lineAngle = lerp(-1 * Math.PI, 0.5 * Math.PI, x)

      const container = state.containerRef.current!
      const title = state.titleRef.current!
      const cw = container.clientWidth
      const ch = container.clientHeight
      const center = Vector.create(cw / 2, ch / 2)

      bodies.forEach((body, i) => {
        const el = state.ballRefs[i].current!
        const { r } = getCircle(el)

        // Reposition borders and resize balls in case of window resize
        const windowWidth = window.innerWidth
        if (windowWidth !== lastWindowWidth) {
          lastWindowWidth = windowWidth

          const scale = r / (body.circleRadius ?? 1)
          if (body.circleRadius && body.circleRadius != r) {
            Body.scale(body, scale, scale)
          }

          Body.setPosition(
            titleBox,
            Vector.create(title.offsetLeft + title.clientWidth / 2, title.offsetTop + title.clientHeight / 2)
          )
          Body.setPosition(borderTop, Vector.create(cw / 2, -10))
          Body.setPosition(borderLeft, Vector.create(-10, ch / 2))
          Body.setPosition(borderBottom, Vector.create(cw / 2, ch + 10))
          Body.setPosition(borderRight, Vector.create(cw + 10, ch / 2))
        }

        const fromMouse = Vector.sub(body.position, mouse)
        const distFromMouse = Vector.magnitude(fromMouse)
        const mouseForce = distFromMouse < r ? Vector.mult(Vector.normalise(fromMouse), 10) : Vector.create(0, 0)

        const lineForce = Vector.div(getVectorToLine(center, lineAngle, body.position), 100)
        const force = Vector.add(mouseForce, lineForce)
        Body.applyForce(body, body.position, force)
      })
    })

    // Add observer to check if section is in view
    const io = new IntersectionObserver(
      (entries) => {
        isContainerVisible = entries[0].isIntersecting
      },
      {
        threshold: 0,
      }
    )
    io.observe(container)

    function handleMouseMove(e: MouseEvent) {
      const container = state.containerRef.current!
      const rect = container.getBoundingClientRect()
      mouse.x = e.clientX - rect.x
      mouse.y = e.clientY - rect.y
    }

    document.addEventListener('mousemove', handleMouseMove)

    state.cleanup = () => {
      cancelAnimationFrame(raf)
      // @ts-expect-error bad type for optional arguments
      Events.off(engine)
      io.unobserve(container)
      document.removeEventListener('mousemove', handleMouseMove)
    }

    raf = requestAnimationFrame(loop)
  }

  React.useEffect(() => {
    boot()
    return () => {
      if (state.cleanup) state.cleanup()
    }
  }, [])

  return (
    <CenterContainer as="section">
      <Stack alignItems="center" ref={state.containerRef} position="relative">
        <Box ref={state.titleRef}>
          <Text variant="heading2" as="h2">
            {title}
          </Text>
        </Box>
        <Grid columns={[1, 1, 2]} role="list" alignItems="center" justifyItems="center" gap={1}>
          <Ball
            width={['60vw', '70vw', '50vw']}
            maxWidth="580px"
            position="relative"
            left={['-10vw', '-10vw', 0, '-5vw']}
            ref={state.ballRefs[0]}
          >
            {one}
          </Ball>
          <Ball
            width={['35vw', '35vw', '35vw']}
            maxWidth="300px"
            position="relative"
            left={['20vw', '20vw', 0, '-5vw']}
            ref={state.ballRefs[1]}
          >
            {two}
          </Ball>
          <Ball
            width={['45vw', '45vw', '40vw']}
            maxWidth="420px"
            position="relative"
            left={['-10vw', '-10vw', 0, '5vw']}
            ref={state.ballRefs[2]}
          >
            {three}
          </Ball>
          <Ball
            width={['50vw', '60vw', '45vw']}
            maxWidth="500px"
            position="relative"
            left={['10vw', '10vw', 0, '5vw']}
            ref={state.ballRefs[3]}
          >
            {four}
          </Ball>
        </Grid>
      </Stack>
    </CenterContainer>
  )
}

function lerp(start: number, end: number, fraction: number) {
  return (1 - fraction) * start + fraction * end
}
