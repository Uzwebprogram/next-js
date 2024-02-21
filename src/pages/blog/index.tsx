import React from 'react'
import Layout from 'src/layout/layout'
import { BlogsServices } from 'src/services/blog.services'
import { BlogProps } from './slug.props'
import { GetServerSideProps } from 'next'
import { BlogsType } from 'src/interface/blogs.interface'
import { Content } from 'src/components'
import {Box} from "@mui/system"
const Blogs = ({blogs} : BlogsProps ) => {
  return (
    <Layout>
                <Box sx={{display:'flex', gap:4 , padding:'20px' , justifyContent:'center'}}>
                <Content blogs={blogs}/>
                </Box>
    </Layout>
  )
}

export default Blogs

export const getServerSideProps: GetServerSideProps<BlogsProps> = async () => {
    const blogs  = await BlogsServices.getAllBlogs();
    return {
      props :{
        blogs,
      }
    }
  }
interface BlogsProps {
    blogs : BlogsType[]
}