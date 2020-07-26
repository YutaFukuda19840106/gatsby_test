import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default ({ pagetitle, pagedesc, pagekey, pagepath, pageimg, pageimgw, pageimgh }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          lang
          title
          siteurl
          keywords
          locale
          fbappid
        }
      }
    }
  `)

  const title = pagetitle
    ? `${pagetitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title

  const description = pagedesc || data.site.siteMetadata.description

  const keywords = pagekey || data.site.siteMetadata.keywords
  
  const url = pagepath
    ? `${data.site.siteMetadata.siteurl}${pagepath}`
    : data.site.siteMetadata.siteurl

  const imgurl = pageimg
    ? `${data.site.siteMetadata.siteUrl}${pageimg}`
    : `${data.site.siteMetadata.siteUrl}/thumb.jpg`
    //    : props.blogimg || `${data.site.siteMetadata.siteUrl}/thumb.jpg`


  const imgw = pageimgw || 1280
  const imgh = pageimgh || 640

  return (
  <Helmet>
    <html lang={data.site.siteMetadata.lang} />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={url} />

    <meta property="og:site_name" content={data.site.siteMetadata.title} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content={data.site.siteMetadata.locale} />
    <meta property="fb:app_id" content={data.site.siteMetadata.fbappid} />

    <meta property="og:image" content={imgurl} />
    <meta property="og:image:width" content={imgw} />
    <meta property="og:image:height" content={imgh} />
  </Helmet>
  )
}

