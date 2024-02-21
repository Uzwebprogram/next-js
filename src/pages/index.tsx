import { Box } from '@mui/system'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { Content, Hero, Sidebar } from 'src/components'
import About from 'src/components/about'
import { BlogEtalesType } from 'src/interface/blogetales.interface'
import { BlogsType } from 'src/interface/blogs.interface'
import { CategoryType } from 'src/interface/category.interface'
import Layout from 'src/layout/layout'
import { BlogLatestServices, BlogsServices, CategoryServices } from 'src/services/blog.services'

const Home = ({blogs , blogsetailes , categories}:HomePageProps) => {
  return (
      <>
          <Layout>
        <Hero blogsetailes={blogsetailes}/>
        <About/>
        <Box sx={{display:'flex', gap:4 , padding:'20px' , flexDirection:{xs : 'column' , md:'row'}}}>
        <Sidebar blogsetailes={blogsetailes} categories={categories}/>
        <Content blogs={blogs}/>
        </Box>
    </Layout></>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs  = await BlogsServices.getAllBlogs();
  const blogsetailes  = await BlogLatestServices.getEtalesBlogs();
  const categories = await CategoryServices.allCategory();
  return {
    props :{
      blogs,
      blogsetailes,
      categories
    }
  }
}

interface HomePageProps {
  blogs: BlogsType[]
  blogsetailes: BlogEtalesType[]
  categories:CategoryType[]
}