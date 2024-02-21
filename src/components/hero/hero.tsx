import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system'
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {format} from "date-fns"
import { HeroProps } from './hero.props';
import { calculateEstimedTimeToRead } from 'src/helpers/time.format';
import { useRouter } from 'next/router';
import ImageHero from "../../../public/avatar.jpg"
import styles from "./style.module.css"
const Hero = ({blogsetailes} : HeroProps) => {
  const router = useRouter();
  return (
<>
<Box width={'100%'}  height={'100vh'}>
                              <Box   sx={{ position:'relative', width:'100%' , height:'100vh' , cursor:'pointer'}}>
                <Image src={ImageHero} alt={"title"} fill style={{objectFit:'cover'}} />
              </Box>

    </Box>
          <div className={styles.media} >
          <Carousel responsive={{
                mobile: {
                  breakpoint: { max: 4000, min: 0 },
                  items: 1
                }
            }}
            autoPlay
            infinite
            arrows={false}
            >
    
              {blogsetailes.map(item =>
                            <Box key={item.slug} position={'relative'}>
                            <Box  key={item.slug} sx={{ position:'relative', width:'100%' , height:'82vh' , cursor:'pointer' ,  borderRadius:'25px'}}>
                    <Image key={item.slug} src={item.coverImage?.url} alt={item.title} fill style={{objectFit:'cover' , borderRadius:'25px'}} />
                    <Box 
                    sx={{
                      position:'absolute',
                      top:0,
                      left:0,
                      right:0,
                      bottom:0,
                      width:'100%',
                      height:'100%',
                      borderRadius:'25px'
                    }}
                    >
                      <Box 
                      width={{xs:'100%', sm:'70%' , background:'#bc7f8fc6' , marginLeft:'20px' , padding:'30px 10px' , borderRadius:'15px'}}
                      position={'relative'} 
                      color={'white'}
                      zIndex={999}
                      sx={{top:'50%' , transform:'translateY(-50%)' , paddingLeft:{xs : '10px' , md:'50px'}}}
                      >
                        <Typography variant='h2' sx={{fontSize:{xs : '35px' , md:'50px'}}} >{item.title.slice(0 ,35)}...</Typography>
                        <Typography variant='h5' sx={{fontSize:{xs : '20px' , md:'30px'}}} >{item.excerpt}</Typography>
                        <Box sx={{display:'flex' , alignItems:'center' , marginTop:'20px'}}>
                        <Avatar  src={item.author.picture?.url} style={{marginRight:'10px'}} />
                          <Box>
                          <Typography>{item.author.name}</Typography>
                        <Typography>{format(new Date() , 'dd MMM, yyyy')} &#x2022; {calculateEstimedTimeToRead(item.content.text)} min read</Typography>
                          </Box>
                        </Box>
                        <button onClick={() => router.push(`/blog/${item.slug}`)} style={{cursor:'pointer' , padding:'10px 15px' , fontSize:'24px' , borderRadius:'3px' , border:'none' , marginTop:'20px'}}>Read more</button>
                      </Box>
                    </Box>
                  </Box>
              </Box>
                  
                )}
    </Carousel>
          </div>
          <div className={styles.desktop} >
          <Carousel responsive={{
                mobile: {
                  breakpoint: { max: 4000, min: 0 },
                  items: 1
                }
            }}
            autoPlay
            infinite
            arrows={false}
            >
    
              {blogsetailes.map(item =>
          <Box key={item.slug} display={'flex'}>
                                <Box  key={item.slug} sx={{display:'flex', position:'relative', width:'100%' , height:'82vh' , cursor:'pointer' ,  borderRadius:'25px'}}>
                                  <Image src={item.coverImage?.url} alt={item.title} fill style={{objectFit:'cover' , borderRadius:'25px'}} />
                                </Box>
                                <Box 
                                  >
                                    <Box 
                                    width={{xs:'100%', sm:'90%' , background:'#bc7f8fc6' , marginLeft:'20px' , padding:'30px 10px' , borderRadius:'15px'}}
                                    position={'relative'} 
                                    color={'white'}
                                    zIndex={999}
                                    sx={{top:'50%' , transform:'translateY(-50%)' , paddingLeft:{xs : '10px' , md:'50px'}}}
                                    >
                                      <Typography variant='h2' sx={{fontSize:{xs : '35px' , md:'50px'}}} >{item.title.slice(0 ,35)}...</Typography>
                                      <Typography variant='h5' sx={{fontSize:{xs : '20px' , md:'30px'}}} >{item.excerpt}</Typography>
                                      <Box sx={{display:'flex' , alignItems:'center' , marginTop:'20px'}}>
                                      <Avatar  src={item.author.picture?.url} style={{marginRight:'10px'}} />
                                        <Box>
                                        <Typography>{item.author.name}</Typography>
                                      <Typography>{format(new Date() , 'dd MMM, yyyy')} &#x2022; {calculateEstimedTimeToRead(item.content.text)} min read</Typography>
                                        </Box>
                                      </Box>
                                      <button onClick={() => router.push(`/blog/${item.slug}`)} style={{cursor:'pointer' , padding:'10px 15px' , fontSize:'24px' , borderRadius:'3px' , border:'none' , marginTop:'20px'}}>Read more</button>
                                    </Box>
                                  </Box>
                                </Box>)}
                                </Carousel>
          </div>
</>
  )
}

export default Hero

const data = [
  {
      image: "https://assets-global.website-files.com/6273c9b2e848857c53c4fecb/62a046a17db17f61ee8b1a5d_openocean-vc-03.jpg",
      title: "Technical SEO with Hygraph",
      exerpt: "Get started width your SEO implementation when using a Headless CMS",
      author: {
          name: "Kamronbey Sunnatov",
          image: "https://instagram.ftas8-1.fna.fbcdn.net/v/t51.2885-19/405204424_731437585086030_3676421639885268046_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftas8-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=7XPmgEFtndEAX_lUOiG&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAdAII6_inwQGrVnhsvfTVg7VYQW04eiKLu1HqLlDhSvA&oe=65C60EF1&_nc_sid=8b3546"
      }
  },
  {
      image: "https://raditycmswebsite-live-5f5ab2ec57ec4907b-b52c0bb.divio-media.net/filer_public/1a/96/1a96e7de-b055-44ae-9a13-dee8534eab30/about-us-bg-1992-2.png",
      title: "Union Types and Sortable Relations with Hygraph",
      exerpt: "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
      author: {
          name: "Kamronbey Sunnatov",
          image: "https://instagram.ftas8-1.fna.fbcdn.net/v/t51.2885-19/405204424_731437585086030_3676421639885268046_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftas8-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=7XPmgEFtndEAX_lUOiG&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAdAII6_inwQGrVnhsvfTVg7VYQW04eiKLu1HqLlDhSvA&oe=65C60EF1&_nc_sid=8b3546"
      }
  }
]