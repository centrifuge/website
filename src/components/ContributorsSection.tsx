import { Box, Button, Grid, IconArrowLeft, IconArrowRight, Shelf, Stack, Text } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'
import Marquee from 'react-fast-marquee'
import styled, { useTheme } from 'styled-components'
import link from '../assets/link.svg'
import { CenterContainer } from './CenterContainer'
import { Image, ImageProps } from './Image'

export const query = graphql`
  fragment ContributorsSectionFragment on DataJsonContributors_section {
    title
    items {
      name
      role
      social
      image {
        childImageSharp {
          gatsbyImageData(
            transformOptions: { cropFocus: CENTER, duotone: { highlight: "#ffffff", shadow: "#0038CC" } }
            height: 460
            width: 660
            placeholder: BLURRED
          )
        }
      }
    }
  }
`
type Item = {
  name: string
  role: string
  social: string
  image: ImageProps
}

export type ContributorsSectionProps = {
  title: string
  items: Item[]
}

function Contributor({ item }: { item: Item }) {
  return (
    <Shelf flexDirection={['row', 'column']} width={['auto', 200, 330]} gap={[4, 2]}>
      <Box width={[150, 'auto']} maxWidth={[150, 'initial']} position="relative" pl={[20, 0]}>
        <Box borderRadius="50%" overflow="hidden">
          <Image data={item.image} />
        </Box>
        <Box
          as="a"
          href={item.social}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Social media"
          position="absolute"
          top={[0, 'initial']}
          left={[0, 'initial']}
          bottom={['initial', 0]}
          right={['initial', 0]}
        >
          <Box as="img" display="block" src={link} maxWidth={[24, 30]} />
        </Box>
      </Box>
      <Stack alignItems={['flex-start', 'center']} textAlign={['left', 'center']}>
        <Text variant="heading6" as="h3">
          {item.name}
        </Text>
        <Text variant="body1" color="textDisabled">
          {item.role}
        </Text>
      </Stack>
    </Shelf>
  )
}

const MarqueeWrapper = styled(Box)``
const ButtonWrapper = styled(Box)``
const GridWrapper = styled(CenterContainer)``
const StyledGrid = styled(Grid)<{ $page: number; $pages: number }>(
  {
    transition: 'transform 1000ms ease',
    '& > *': {
      transition: 'opacity 1000ms ease',
    },
  },
  (props) => ({
    [`@media (min-width: ${props.theme.breakpoints['S']})`]: {
      transform: 'none !important',
    },
    [`@media (max-width: ${props.theme.breakpoints['S']})`]: {
      [`& > :not(:nth-child(${props.$pages}n + ${props.$page + 1}))`]: {
        opacity: 0,
      },
    },
  })
)

function ContributorsMarquee({ items, direction = 'left' }: { items: Item[]; direction?: 'left' | 'right' }) {
  return (
    <MarqueeWrapper display={['none', 'block']}>
      <Marquee gradient={false} speed={100} direction={direction} pauseOnHover>
        <Shelf alignItems="flex-start">
          {items.map((item) => (
            <Box mr={5}>
              <Contributor item={item} key={item.name} />
            </Box>
          ))}
        </Shelf>
      </Marquee>
    </MarqueeWrapper>
  )
}

const ITEMS_PER_PAGE = 5

export function ContributorsSection({ title, items }: ContributorsSectionProps) {
  const theme = useTheme()
  const [page, setPage] = React.useState(0)
  const n = Math.floor(items.length / 2)
  const firstHalf = items.slice(0, n)
  const secondHalf = items.slice(n)
  const numPages = Math.ceil(items.length / ITEMS_PER_PAGE)

  return (
    <>
      <Stack gap={8}>
        <CenterContainer>
          <Shelf justifyContent="space-between">
            <Text variant="heading2" as="h2">
              {title}
            </Text>

            <ButtonWrapper display={['block', 'none']}>
              <Shelf>
                <Button
                  variant="tertiary"
                  icon={IconArrowLeft}
                  onClick={() => setPage((prev) => (prev - 1 + numPages) % numPages)}
                />
                <Button
                  variant="tertiary"
                  icon={IconArrowRight}
                  onClick={() => setPage((prev) => (prev + 1) % numPages)}
                />
              </Shelf>
            </ButtonWrapper>
          </Shelf>
        </CenterContainer>
        <ContributorsMarquee items={firstHalf} />
        <ContributorsMarquee items={secondHalf} direction="right" />
        <GridWrapper display={['block', 'none']} overflow="hidden">
          <StyledGrid
            $page={page}
            $pages={numPages}
            columns={[numPages, 2, 2, 3, 4]}
            equalColumns
            rowGap={4}
            width={[`calc(100% * ${numPages})`, 'auto']}
            style={{ transform: `translateX(calc((-${page} / ${numPages}) * 100%))` }}
          >
            {items.map((item) => (
              <Contributor item={item} key={item.name} />
            ))}
          </StyledGrid>
        </GridWrapper>
      </Stack>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<style>
						${MarqueeWrapper} {
							display: none !important;
						}
						${GridWrapper} {
							display: block !important;
						}
						${StyledGrid} {
							width: 100% !important;
						}
						@media (max-width: ${theme.breakpoints['S']}) {
							${StyledGrid} {
								grid-template-columns: 1fr !important;
							}
						}
						${StyledGrid} > * {
							opacity: 1 !important;
						}
						${ButtonWrapper} {
							display: none !important;
						}
					</style>`,
        }}
      />
    </>
  )
}
