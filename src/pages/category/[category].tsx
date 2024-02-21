import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from 'src/layout/layout'
import { BlogLatestServices, CategoryDetail, CategoryServices, getDetailedBlog } from 'src/services/blog.services'
import { CategoryDetailsProps } from './category.props'
import {Box} from "@mui/system"
import { Content, Sidebar } from 'src/components'
const CategoryDetails = ({blogs , blogsetailes , categories} : CategoryDetailsProps) => {
  return (
    <Layout>
                <Box sx={{display:'flex', gap:4 , padding:'20px' , flexDirection:{xs : 'column' , md:'row'}}}>
        <Sidebar blogsetailes={blogsetailes} categories={categories}/>
        <Content blogs={blogs}/>
        </Box>
    </Layout>
  )
}

export default CategoryDetails

export const getServerSideProps : GetServerSideProps<CategoryDetailsProps> = async ({query}) => {
    const blogs = await CategoryDetail.getCategoryDetails(query.category as string)
    const blogsetailes  = await BlogLatestServices.getEtalesBlogs();
    const categories = await CategoryServices.allCategory();
     return {
      props:{
        blogs,
        blogsetailes,
        categories
      }
     }
  }