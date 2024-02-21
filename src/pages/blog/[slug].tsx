import { Box } from '@mui/system'
import {Typography ,Divider , Avatar} from "@mui/material"
import { GetServerSideProps } from 'next'
import React from 'react'
import { BlogLatestServices, BlogsServices, CategoryServices, getDetailedBlog } from 'src/services/blog.services'
import { BlogProps } from './slug.props'
import Layout from 'src/layout/layout'
import { Sidebar } from 'src/components'
import Image from 'next/image'
import styles from "./style.module.css"
import {format} from "date-fns"
import { calculateEstimedTimeToRead } from 'src/helpers/time.format'
const DetailsBlogPage = ({blog , blogsetailes ,  categories} : BlogProps) => {
  
  return (
    <Layout>
              <Box sx={{display:'flex', gap:4 , padding:'20px', flexDirection:{xs : 'column' , md:'row'}}}>
              <Box width={{xs : '100%' , md:'70%'}}>
                
        <Box
          key={blog.slug}
          sx={{ background: "white" }}
          width={"100%"}
          marginBottom={"20px"}
          borderRadius={"3px"}
          padding={"20px"}
        >
          <Box
            position={"relative"}
            width={"100%"}
            borderRadius={5}
            height={{xs : '35vh' , md:'70vh'}}
          >
            <Image
              style={{ borderRadius: 10 }}
              src={blog?.coverImage?.url}
              fill
              alt={blog?.title}
            />
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
             <Avatar
              src={blog?.author?.picture?.url}
              style={{ marginRight: "10px" , width:60 , height:60 }}
              
            />
                      <Box>
                      <Typography color={"black"} variant='h5'>{blog?.author?.name}</Typography>
                    <Typography color={"gray"}>{format(new Date() , 'dd MMM, yyyy')} &#x2022; {calculateEstimedTimeToRead(blog?.content?.text)} min read</Typography>
                      </Box>
          </Box>

          <Typography
            color={"black"}
            style={{ marginBottom: "20px", marginTop: "30px" }}
            variant="h3"
            sx={{fontSize:{xs : '30px' , md:'50px'}}} 
          >
            {blog.title}
          </Typography>
          <Typography color={"black"} variant="h6">
            {blog.excerpt}
          </Typography>

            <div  className={styles.description} dangerouslySetInnerHTML={{__html: blog?.content?.html}}>
              
              
            </div>
        </Box>
    </Box>
        <Sidebar blogsetailes={blogsetailes} categories={categories}/>
        </Box>
    </Layout>
  )
}

export default DetailsBlogPage

export const getServerSideProps : GetServerSideProps<BlogProps> = async ({query}) => {
  const blog = await getDetailedBlog.getDetalesBlog(query.slug as string)
  const blogsetailes  = await BlogLatestServices.getEtalesBlogs();
  const categories = await CategoryServices.allCategory();
   return {
    props:{
      blog,
      blogsetailes,
      categories
    }
   }
}