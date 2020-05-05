import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import image from "../../images/ogimage.png";

const SEO = ({ description, meta, title }) => (
  <StaticQuery
    query={graphql`
      query DefaultSEOQuery {
        site {
          siteMetadata {
            title
            longTitle
            siteUrl
            description
            author
          }
        }
      }
    `}
    render={(data) => {
      const metaDescription = description || data.site.siteMetadata.description;
      const defaultTitle = data.site.siteMetadata.longTitle;
      const pageTitle = title || defaultTitle;

      return (
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
          defaultTitle={defaultTitle}
          title={pageTitle}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              name: `title`,
              content: pageTitle,
            },
            {
              name: `author`,
              content: data.site.siteMetadata.author,
            },
            {
              property: `og:title`,
              content: pageTitle,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              property: `og:image`,
              content: `${data.site.siteMetadata.siteUrl}${image}`,
            },
            {
              propert: `og:image:width`,
              content: `600`,
            },
            {
              propert: `og:image:height`,
              content: `315`,
            },
            {
              property: `twitter:card`,
              content: `summary_large_image`,
            },
            {
              property: `twitter:creator`,
              content: data.site.siteMetadata.author,
            },
            {
              property: `twitter:title`,
              content: title,
            },
            {
              property: `twitter:image`,
              content: `${data.site.siteMetadata.siteUrl}${image}`,
            },
            {
              property: `twitter:description`,
              content: metaDescription,
            },
          ].concat(meta)}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string,
};

export default SEO;
