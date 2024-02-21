import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import ImageAvatar from "./../../../public/avatar.jpg"
import { Box } from '@mui/material'
const About = () => {
  return (
    <div className={styles.about}>
        <div className={styles.about_right}>
            <h2>Title Lorem ipsum dolor sit amet.</h2>
            <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur tempora minima inventore ad earum nisi a perferendis temporibus corrupti? Qui quis molestiae, dolore, dolor nemo corrupti doloribus impedit nisi numquam quod fugit at libero dignissimos? Dolorem doloribus, quasi, quo labore tempore deserunt cupiditate tempora, modi eos recusandae suscipit facere?
            </p>
            <p>
                
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur tempora minima inventore ad earum nisi a perferendis temporibus corrupti? Qui quis molestiae, dolore, dolor nemo corrupti doloribus impedit nisi numquam quod fugit at libero dignissimos? Dolorem doloribus, quasi, quo labore tempore deserunt cupiditate tempora, modi eos recusandae suscipit facere?
            </p>
            <p>
                
                Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur tempora minima inventore ad earum nisi a perferendis temporibus corrupti? Qui quis molestiae, dolore, dolor nemo corrupti doloribus impedit nisi numquam quod fugit at libero dignissimos? Dolorem doloribus, quasi, quo labore tempore deserunt cupiditate tempora, modi eos recusandae suscipit facere?
                </p>
        </div>
        <Box   sx={{ position:'relative',  width:{xs:'100%' , md:'50%'} , height:{xs:'60vh' , md:'85vh'}  , cursor:'pointer'}}>
                <Image src={ImageAvatar} alt={"title"} fill style={{objectFit:'cover' , borderRadius:'25px'}} />
              </Box>

    </div>
  )
}

export default About