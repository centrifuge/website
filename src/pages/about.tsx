import { Stack } from '@centrifuge/fabric'
import * as React from 'react'
import { BeliefsSection } from '../components/BeliefsSection'
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
        <BeliefsSection title="We believe in" />
      </Stack>
    </Layout>
  )
}
export default AboutPage
