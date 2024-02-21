/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['raditycmswebsite-live-5f5ab2ec57ec4907b-b52c0bb.divio-media.net' , 'assets-global.website-files.com'  , 'instagram.ftas8-1.fna.fbcdn.net' , 'media.graphassets.com']
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}

module.exports = nextConfig
