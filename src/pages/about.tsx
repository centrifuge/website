import { Stack } from '@centrifuge/fabric'
import * as React from 'react'
import { EthicsSection } from '../components/EthicsSection'
import { HeroVideo } from '../components/HeroVideo'
import { Layout } from '../components/Layout'
import { OrgSection } from '../components/OrgSection'
import { ValuesSection } from '../components/ValuesSection'

function AboutPage() {
  return (
    <Layout>
      <Stack gap={168}>
        <HeroVideo title="hello" body="body" videoUrl="asd" />
        <OrgSection title="How we work" />
        <ValuesSection title="Our values" />
        <EthicsSection title="We believe in" />
      </Stack>
    </Layout>
  )
}
export default AboutPage
