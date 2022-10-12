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
        {/* <OrgSection
          title="How we work"
          items={[
            {
              image: 'center',
              title: 'Self-managed organization (SMO)',
              body: 'As an SMO, we work to minimize hierarchy and decentralize power, similar to the way our product is built.',
            },
            { image: 'remote', title: 'Fully remote', body: 'Work anywhere in the world' },
            { image: 'group', title: 'Retreat', body: 'In-person retreats bi-annually' },
          ]}
        /> */}
        <ValuesSection title="Our values" items={['Bold', 'Trustworthy', 'Inclusive', 'Collaborative']} />
        <BeliefsSection
          title="We believe in"
          items={[
            {
              title: 'No boundaries',
              body: 'We want to build a culture of deep curiosity- one that nurtures intellectual exploration above all. We want to give space for ideas to flourish, explore tangents and for releasing ourselves from rigid thought patterns.',
            },
            {
              title: 'Autonomy &amp; Accountability',
              body: 'We nurture a high sense of responsibility to ourselves, to our team members and the mission carried out. We work on our own terms, but keep our eye on the collective goal.',
            },
            {
              title: 'Knowledge Sharing',
              body: 'We believe that a collective brain is more valuable than individual ones, so we foster a culture of sharing and transparency. From weekly all-hands, monthly book clubs and quarterly personal feedback to cooking up big group lunches, encouraging transparency and knowledge sharing is crucial at Centrifuge.',
            },
            {
              title: 'Enthusiasm!',
              body: 'We want people to be excited to work for Centrifuge and respect that people get out of bed for different reasons. We are flexible with schedules and allow our employees to climb, dance or do yoga when it suits them. We aim to build an inclusive company- hiring people from different backgrounds with a passion for something outside themselves, whether for alternative governance or techno, community activism or decentralization.',
            },
          ]}
        />
      </Stack>
    </Layout>
  )
}
export default AboutPage
