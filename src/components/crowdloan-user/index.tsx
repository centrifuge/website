import * as React from 'react'
import { Provider } from '@centrifuge/centrifuge-react'
import { UserProvidedConfig } from '@centrifuge/centrifuge-js'
import { User } from './User'

export type CrowdloanUserProps = {
  network: 'altair' | 'centrifuge'
}

export default function CrowdloanUser({ network }: CrowdloanUserProps) {
  const centConfig: UserProvidedConfig = React.useMemo(
    () => ({
      network,
      ...(process.env.NODE_ENV === 'development' && {
        centrifugeWsUrl: 'wss://fullnode.development.cntrfg.com',
        altairWsUrl: 'wss://fullnode.development.cntrfg.com',
      }),
    }),
    []
  )

  return (
    <Provider centrifugeConfig={centConfig}>
      <User />
    </Provider>
  )
}
