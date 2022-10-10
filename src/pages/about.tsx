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
        <HeroVideo
          title="Mission"
          body="Centrifuge unlocks economic opportunity for all by connecting people to borrow and lend money transparently and cost-effectively; free of intermediaries and the inefficiencies of traditional finance."
          videoUrl="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
        <OrgSection title="How we work" />
        <ValuesSection title="Our values" />
        <BeliefsSection title="We believe in" />
      </Stack>
    </Layout>
  )
}
export default AboutPage
