import React from 'react'
import { Paragraph,Box } from "grommet";


export default function Disclaimer() {
   return (
      <Box>
        <Paragraph>
           Centrifuge builds Tinlake as a decentralized application (dApp) powered by Centrifuge OS, the decentralized operating system for the financial supply chain. Tinlake is a new set of software tools to operate and manage the collateralization and financing of assets. Centrifuge is neither installing, running, operating nor controlling any collateralization or financing offer using Tinlake.
        </Paragraph>
        <Paragraph>
  Tinlake is published as open source software. Any entity or person providing services by using Tinlake shall commit to using it at their own risk and with full responsibility. Centrifuge does not give any warranty or representation, whether expressly or implied, of any kind related to the usage of Tinlake, nor does Centrifuge take any responsibility or liability whatsoever for any direct, indirect, incidental, or consequential damages related to the usage of Tinlake, whether in contract, tort (including negligence), breach of statutory duty, or otherwise. Centrifuge will not be liable for loss of profits, sales, business, or revenue, business interruption, anticipated savings, business opportunity, goodwill or reputation or any indirect or consequential loss or damage.
        </Paragraph>
      </Box>
   )
}
