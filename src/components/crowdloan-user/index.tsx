import { UserProvidedConfig } from '@centrifuge/centrifuge-js'
import { Provider } from '@centrifuge/centrifuge-react'
import * as React from 'react'
import { User } from './User'

export type CrowdloanUserProps = {
  network: 'altair' | 'centrifuge'
}

export default function CrowdloanUser({ network }: CrowdloanUserProps) {
  const centConfig: UserProvidedConfig = React.useMemo(
    () => ({
      network,
      ...(process.env.NODE_ENV === 'developments' && {
        centrifugeWsUrl: 'wss://fullnode.development.cntrfg.com',
        altairWsUrl: 'wss://fullnode.development.cntrfg.com',
      }),
    }),
    []
  )

  return (
    <Provider centrifugeConfig={centConfig} walletConnectId="c32fa79350803519804a67fcab0b742a">
      <User />
    </Provider>
  )
}
