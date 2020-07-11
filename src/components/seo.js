import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          lang
          title
          siteurl
          keywords
        }
      }
    }
  `)

  const title = props.pagetitle
    ? `${props.pagetitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title

  const description = props.pagedesc || data.site.siteMetadata.description

  const keywords = props.pagekey || data.site.siteMetadata.keywords
  
  const url = props.pagepath
    ? `${data.site.siteMetadata.siteurl}${props.pagepath}`
    : data.site.siteMetadata.siteurl

  return (
  <Helmet>
    <html lang={data.site.siteMetadata.lang} />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={url} />
  </Helmet>
  )
}

