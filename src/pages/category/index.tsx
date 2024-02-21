import React from 'react'
import Layout from 'src/layout/layout'
import {Box , Typography } from "@mui/material"
import styles from './style.module.css'
import { CategoryServices } from 'src/services/blog.services'
import { GetServerSideProps } from 'next'
import { CategoryDetailsProps } from './category.props'
import { CategorysProps } from './categories.props'
const Category = ({categories} : CategorysProps) => {
  return (
    <Layout>
        <Box padding={'30px'}>
              <Box sx={{width:'100%' ,  background:'white' , height:'100%' , textAlign:'center' }}>
            <h2 className={styles.category_h2}>
              All Categories
            </h2>
            <div className={styles.buttons}>
              {categories.map(elem =>
            <button key={elem.slug} className={styles.button}>{elem.label}</button>
                )}
            </div>
      </Box>
        </Box>
    </Layout>
  )
}

export default Category

export const getServerSideProps : GetServerSideProps<CategorysProps> = async () => {
  const categories = await CategoryServices.allCategory();
   return {
    props:{
      categories
    }
   }
}