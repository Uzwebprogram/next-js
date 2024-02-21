import Head from "next/head"
import { SeoProps } from "./seo.props"

const Seo = ({children , author , metaDescription , metaKeywords , metaTitle}:SeoProps) => {
  return (
    <>
    <Head>
        <title>{metaTitle}</title>
    </Head>
    {children}
    </>
  )
}

export default Seo