import React from 'react'
import { Box } from 'grommet'

import Layout from '../../../components/Layout'
import SEO from '../../../components/SEO'

import Hero from '../../../partials/tinlake/Hero'
import WhatIsTinlake from '../../../partials/tinlake/WhatIsTinlake'
import WhyWeBuiltTinlake from '../../../partials/tinlake/WhyWeBuiltTinlake'
import TinlakeWork from '../../../partials/tinlake/TinlakeWork'
import Governance from '../../../partials/tinlake/Governance'
import Benefits from '../../../partials/tinlake/Benefits'
import GetInTouch from '../../../partials/tinlake/GetInTouch'

const TinlakePage = () => {
  const metadata = {
    title: 'Tinlake',
    description:
      'Tinlake is a platform that enables you to draw loans against non-fungible assets, such as invoices, royalty payments or artworks.'
  }

  return (
    <Layout>
      <SEO {...metadata} />
      {/* Block 1 */}
      <Hero />

      {/* Block 2 */}
      <WhatIsTinlake />

      {/* Block 3 */}
      <WhyWeBuiltTinlake />

      {/* Block 4 */}
      <TinlakeWork />

      {/* Block 5 */}
      <Governance />

      {/* Block 6 */}
      <Benefits />

      {/* Block 7 */}
      <GetInTouch />
    </Layout>
  )
}

export default TinlakePage
