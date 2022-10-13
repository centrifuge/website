import * as React from 'react'
import { graphql } from 'gatsby'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export const query = graphql`
  fragment SeoFragment on DataJsonSeo {
    title
    description
  }
`

export type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  children?: React.ReactNode
}

export const SEO = ({ title, description, pathname, children }: SEOProps) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ''}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="/favicon.png" />
      {children}
    </>
  )
}
