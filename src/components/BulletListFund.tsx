import {Text, Stack, IconArrowRight} from '@centrifuge/fabric'
import * as React from 'react'
import styled from 'styled-components'
import ReactMarkdown from "react-markdown";
import {links} from '../../config/links'

type BulletListProps = {
  items: string[]
}

const Icon = styled(IconArrowRight)`
    vertical-align: middle;
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    transform: rotate(45deg);
`

export function BulletListFund({items}: BulletListProps) {
  return items && items.length ? (
    <Stack as="ul" gap={1}>
      <Text as="li">
        <Icon/>
        Reduce yield spreads by 25 bps (
        <Text
          as="a"
          href={links.bis}
          rel="noopener noreferrer"
          target="_blank"
          variant="body1"
          style={{textDecoration: 'underline'}}
        >
          BIS
        </Text>
        )
      </Text>
      <Text as="li">
        <Icon/>
        Improve liquidity by 5.3% (
        <Text
          as="a"
          href={links.hkma}
          rel="noopener noreferrer"
          target="_blank"
          variant="body1"
          style={{textDecoration: 'underline'}}
        >
          HKMA
        </Text>
        )
      </Text>
      <Text as="li">
        <Icon/>
        Save up to 150 bps running the fund
      </Text>
    </Stack>
  ) : null;
}

