import { Box, BoxProps } from '@centrifuge/fabric'
import * as React from 'react'

type YoutubeEmbedOwnProps = {
  videoId: string
  autoplay?: boolean
  suggestions?: boolean
  controls?: boolean
  showInfo?: boolean
}

export type YoutubeEmbedProps = YoutubeEmbedOwnProps & BoxProps

export function YoutubeEmbed(props: YoutubeEmbedProps) {
  const url = getFullVideoUrl(props)
  const { videoId, autoplay, suggestions, controls, showInfo, ...rest } = props
  return (
    <Box
      as="iframe"
      src={url}
      frameBorder="0"
      allowFullScreen={true}
      title="Youtube Embed Video"
      aspectRatio="16 / 9"
      {...rest}
    />
  )
}

function getFullVideoUrl(props: YoutubeEmbedOwnProps) {
  const { videoId, autoplay, suggestions, controls, showInfo } = props
  const params = {
    rel: suggestions ? '1' : '0',
    controls: controls ? '1' : '0',
    showinfo: showInfo ? '1' : '0',
    autoplay: autoplay ? '1' : '0',
  }
  const url = new URL(`https://www.youtube-nocookie.com/embed/${videoId}`)
  url.search = new URLSearchParams(params).toString()
  return url.toString()
}
