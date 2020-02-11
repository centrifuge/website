import React from 'react'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

import Hero from '../../partials/deep-tier-finance/Hero'
import TraditionalVsDTF from '../../partials/deep-tier-finance/TraditionalVsDTF'
import DTFImage from '../../partials/deep-tier-finance/DTFImage'
import HowDoesDTFWork from '../../partials/deep-tier-finance/HowDoesDTFWork'
import PoweredByCentrifuge from '../../partials/deep-tier-finance/PoweredByCentrifuge'
import WhyIsThisBeneficial from '../../partials/deep-tier-finance/WhyIsThisBeneficial'

const DeepTierFinancePage = () => {
  const metadata = {
    title: 'Deep Tier Finance',
    description: null
  }

  return (
    <Layout>
      <SEO {...metadata} />

      {/* Block 1 */}
      <Hero />

      {/* Block 2 */}
      <TraditionalVsDTF />

      {/* Block 3 */}
      <DTFImage />

      {/* Block 4 */}
      <HowDoesDTFWork />

      {/* Block 5 */}
      <PoweredByCentrifuge />

      {/* Block 6 */}
      <WhyIsThisBeneficial />
    </Layout>
  )
}

export default DeepTierFinancePage
