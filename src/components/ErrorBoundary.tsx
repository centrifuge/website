import React, { ErrorInfo } from 'react'
import { NoteCard } from './NoteCard'
import { Text } from '@centrifuge/fabric'

type Props = {
  children: React.ReactNode
}

type State = {
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    return this.state.errorInfo ? (
      <NoteCard status="info">
        <Text as="strong" variant="heading6">
          Error happened
        </Text>
        <Text as="p" variant="body1">
          Please try again
        </Text>
      </NoteCard>
    ) : (
      this.props.children
    )
  }
}
