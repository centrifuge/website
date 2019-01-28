import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({ description, meta, title }) => (
  <StaticQuery
    query={graphql`
      query DefaultSEOQuery {
        site {
          siteMetadata {
            title
            longTitle
            description
            author
          }
        }
      }
    `}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description;
      const defaultTitle = data.site.siteMetadata.longTitle;

      return (
        <Helmet
          htmlAttributes={{
            lang: "en"
          }}
          defaultTitle={defaultTitle}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription
            },
            {
              property: `og:title`,
              content: title
            },
            {
              property: `og:description`,
              content: metaDescription
            },
            {
              property: `og:type`,
              content: `website`
            },
            {
              name: `twitter:card`,
              content: `summary`
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.author
            },
            {
              name: `twitter:title`,
              content: title
            },
            {
              name: `twitter:description`,
              content: metaDescription
            }
          ].concat(meta)}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  meta: []
};

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string
};

export default SEO;
