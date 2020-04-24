import React from 'react'
import { Box, Button, Layer as GrommetLayer, ResponsiveContext } from 'grommet'
import { StaticQuery, graphql, navigate } from 'gatsby'
import styled, { css } from 'styled-components'
import { breakpointStyle } from 'grommet/utils'
import { X } from 'styled-icons/feather/X'
import { Menu } from 'styled-icons/feather/Menu'

import Container from '../Container'
import { List, Item } from '../List'
import { InternalLink, ExternalLink } from '../Links'
import theme, { breakpoints } from '../Theme/theme'

import wordmark from '../../images/centrifuge-wordmark.svg'

const NavLink = ({ children, to }) => (
  <InternalLink
    style={{ fontWeight: 'var(--fw-medium)' }}
    activeStyle={{ color: 'var(--c-brand)' }}
    to={to}
  >
    {children}
  </InternalLink>
)

const ExternalNavLink = ({ children, href, ...rest }) => (
  <ExternalLink
    style={{ fontWeight: 'var(--fw-medium)' }}
    activeStyle={{ color: 'var(--c-brand)' }}
    href={href}
    {...rest}
  >
    {children}
  </ExternalLink>
)

const BrandLink = () => (
  <div
    onContextMenu={e => {
      e.preventDefault()
      navigate('/design')
    }}
  >
    <NavLink to='/'>
      <Logo alt='Centrifuge Wordmark' src={wordmark} />
    </NavLink>
  </div>
)

const Logo = styled.img`
  vertical-align: middle;
  height: 32px;
`

const PaddedItem = styled(Item)`
  padding: 1.5rem 0;
  line-height: 1rem;
`

const Layer = styled(GrommetLayer)`
  display: none;

  ${breakpointStyle(
    breakpoints.small,
    css`
      display: initial;
    `
  )}
`

const Dropdowns = styled(Box)`
  ${breakpointStyle(
    breakpoints.small,
    css`
      display: none;
    `
  )}

  /* Item (PaddedItem) */
  > li {
    display: block;
    position: relative;

    /* Item:Hover Targeting Dropdown */
    &:hover > ul,
    &:focus-within > ul,
    > ul:hover,
    > ul:focus {
      visibility: visible;
      opacity: 1;
      display: block;
    }
  }

  /* Dropdown Styles */
  > li > ul {
    background-color: #fff;
    box-shadow: ${theme.global.elevation.light.small};
    visibility: hidden;
    opacity: 0;
    padding: 0.5rem 0;
    min-width: 120px;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 1.5rem;
    border-radius: ${theme.global.edgeSize.xsmall};
    left: -16px;
    display: none;

    /* Dropdown Item Styles */
    > li {
      white-space: nowrap;
      width: 100%;
    }

    /* Dropdown Item Link Styles */
    > li > a {
      line-height: 1rem;
      display: block;
      padding: 0.5rem 1rem;
    }
  }
`

const Nav = styled(Box)`
  z-index: 2000;
  position: sticky;
  -webkit-position: sticky;
  top: 0;

  ${breakpointStyle(
    breakpoints.small,
    css`
      top: 1rem;
    `
  )}

  &::after {
    content: '';
    position: absolute;
    background-color: white;
    z-index: -1;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    ${breakpointStyle(
      breakpoints.small,
      css`
        bottom: -1rem;
        top: -1rem;
      `
    )}
  }
`

const NavButton = styled(Button)`
  display: none;
  ${breakpointStyle(
    breakpoints.small,
    css`
      display: initial;
    `
  )}
`

const MenuItem = styled(Item)`
  display: block;
  padding: 0.5rem 0;

  /* Item (SubItem) */
  > li:last-child {
    padding-bottom: 0;
  }
`

const SubItem = styled(Item)`
  display: block;
  padding: 0.5rem 1rem;
`

const MobileBox = styled(Box)`
  background: white;

  ${breakpointStyle(
    breakpoints.small,
    css`
      height: 100vh;
      overflow-y: scroll;
    `
  )}
`

class Navigation extends React.Component {
  state = {
    mobileNavIsOpen: false
  }

  toggleMobileNav = () =>
    this.setState({
      mobileNavIsOpen: !this.state.mobileNavIsOpen
    })

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allContentfulControlCenterNavigationCta {
              edges {
                node {
                  enableNavigationCallToAction
                  buttonUrl
                  buttonText
                }
              }
            }
          }
        `}
        render={data => {
          const {
            enableNavigationCallToAction,
            buttonText,
            buttonUrl
          } = data.allContentfulControlCenterNavigationCta.edges[0].node

          return (
            <Nav as='nav' role='navigation'>
              <Container>
                <List style={{ display: 'flex', alignItems: 'center' }}>
                  {/* Logo */}
                  <Item style={{ flex: 1 }}>
                    <BrandLink />
                  </Item>

                  {/* Mobile Nav Toggle */}
                  <NavButton onClick={this.toggleMobileNav}>
                    {this.state.mobileNavIsOpen ? (
                      <X size={32} />
                    ) : (
                      <Menu size={32} />
                    )}
                  </NavButton>

                  {/* Desktop Nav */}
                  <Dropdowns direction='row' align='center' gap='large'>
                    <PaddedItem>
                      <NavLink to='/products/tinlake'>Products</NavLink>
                      <List>
                        <Item>
                          <NavLink to='/products/tinlake'>Tinlake</NavLink>
                          <NavLink to='/products/chain'>Chain</NavLink>
                          <NavLink to='/products/deep-tier-finance'>
                            Deep Tier Finance
                          </NavLink>
                        </Item>
                      </List>
                    </PaddedItem>

                    <PaddedItem>
                      <NavLink to='/technology'>Technology</NavLink>
                      <List>
                        <Item>
                          <ExternalNavLink href='https://developer.centrifuge.io/'>
                            Developer Docs
                          </ExternalNavLink>
                          <NavLink to='/technology/contribute'>
                            Contribute
                          </NavLink>
                          <NavLink to='/technology#download'>Download</NavLink>
                        </Item>
                      </List>
                    </PaddedItem>

                    <PaddedItem>
                      <NavLink to='/ecosystem'>Ecosystem</NavLink>
                      <List>
                        <Item>
                          <NavLink to='/ecosystem/#use-cases'>
                            Use Cases
                          </NavLink>
                        </Item>
                      </List>
                    </PaddedItem>

                    <PaddedItem>
                      <NavLink to='/about'>About</NavLink>
                      <List>
                        <Item>
                          <NavLink to='/about/#mission'>Mission</NavLink>
                        </Item>
                        <Item>
                          <NavLink to='/about/#team'>Team</NavLink>
                        </Item>
                        <Item>
                          <NavLink to='/about/#partners'>Partners</NavLink>
                        </Item>
                        <Item>
                          <NavLink to='/careers'>Careers</NavLink>
                        </Item>
                      </List>
                    </PaddedItem>

                    <PaddedItem>
                      <NavLink to='/news'>News</NavLink>
                    </PaddedItem>

                    {/* Call To Action */}
                    {enableNavigationCallToAction && (
                      <Item>
                        <Button
                          label={buttonText}
                          href={buttonUrl}
                          style={{
                            paddingTop: '5px',
                            paddingBottom: '5px',
                            paddingLeft: '30px',
                            paddingRight: '30px',
                            fontSize: 14
                          }}
                        />
                      </Item>
                    )}
                  </Dropdowns>
                </List>
              </Container>

              {/* Mobile Nav */}
              <MobilePanel
                state={this.state.mobileNavIsOpen}
                toggleFunc={this.toggleMobileNav}
              />
            </Nav>
          )
        }}
      />
    )
  }
}

const MobilePanel = ({ state, toggleFunc }) => (
  <ResponsiveContext.Consumer>
    {size =>
      state &&
      size === 'small' && (
        <Layer
          onClickOutside={toggleFunc}
          onEsc={toggleFunc}
          position='top'
          full='horizontal'
          responsive={false}
          animate={true}
          modal
        >
          <MobileBox
            direction='column'
            pad={{
              top: 'xxlarge',
              bottom: 'xlarge',
              left: 'large',
              right: 'large'
            }}
            gap='medium'
          >
            <List>
              <MenuItem>
                <NavLink to='/products/tinlake'>Products</NavLink>

                <SubItem>
                  <NavLink to='/products/chain'>Chain</NavLink>
                </SubItem>
                <SubItem>
                  <NavLink to='/products/tinlake'>Tinlake</NavLink>
                </SubItem>
                <SubItem>
                  <NavLink to='/products/deep-tier-finance'>
                    Deep Tier Finance
                  </NavLink>
                </SubItem>
              </MenuItem>

              <MenuItem>
                <NavLink to='/technology'>Technology</NavLink>

                <SubItem>
                  <ExternalNavLink href='https://developer.centrifuge.io/'>
                    Developer Docs
                  </ExternalNavLink>
                </SubItem>
                <SubItem>
                  <NavLink to='/technology/contribute'>Contribute</NavLink>
                </SubItem>
                <SubItem>
                  <NavLink to='/technology#download'>Download</NavLink>
                </SubItem>
              </MenuItem>

              <MenuItem>
                <NavLink to='/ecosystem'>Ecosystem</NavLink>

                <SubItem>
                  <NavLink to='/ecosystem/#use-cases'>Use Cases</NavLink>
                </SubItem>
              </MenuItem>

              <MenuItem>
                <NavLink to='/news'>News</NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to='/about'>About</NavLink>

                <SubItem>
                  <NavLink to='/about/#mission'>Mission</NavLink>
                </SubItem>
                <SubItem>
                  <NavLink to='/about/#team'>Team</NavLink>
                </SubItem>
                <SubItem>
                  <NavLink to='/about/#partners'>Partners</NavLink>
                </SubItem>
                <SubItem>
                  <NavLink to='/careers'>Careers</NavLink>
                </SubItem>
              </MenuItem>

              <MenuItem>
                <NavLink to='/getstarted'>Get Started</NavLink>
              </MenuItem>
            </List>
          </MobileBox>
        </Layer>
      )
    }
  </ResponsiveContext.Consumer>
)

export default Navigation
