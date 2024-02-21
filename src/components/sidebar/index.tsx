import { Typography, Button, Divider, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import Image from "next/image";
import React, { Fragment } from "react";
import { navItems } from "src/config/constants";
import { SidebarProps } from "./sidebar.props";
import { useRouter } from "next/router";

const Sidebar = ({categories , blogsetailes} : SidebarProps) => {
    const router = useRouter();
  return (
    <Box width={{xs : '100%' , md:'30%'}}>
    <Box position={'sticky'} top={'100px'}  sx={{transition:'all .3s ease'}}>
    <Box
        padding={"20px"}
        sx={{ background: "white" }}
        borderRadius={"3px"}

      >
        <Typography variant="h5" style={{ color: "#000000" }}>
          Latest blog
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
        >
            {blogsetailes.map(item => (
                <Box onClick={() => router.push(`/blog/${item.slug}`)} sx={{cursor:'pointer'}} key={item.title} >
                    <Box  sx={{display:'flex' , gap:'20px', alignItems:'center', marginTop: "20px" }}>
                        <Image
                            src={item.coverImage.url}
                            alt={item.title}
                            width={100}
                            height={100}
                            style={{objectFit:'cover', borderRadius:'8px'}}
                        />
                        <Box sx={{display:'flex' , flexDirection:'column' , gap:'5px'}}>
                            <Typography style={{color:'#000000'}} variant="body1">{item.title}</Typography>
                            <Box sx={{display:'flex' ,gap:'10px' , marginTop:'10px'}}>
                                <Avatar alt={item.author.name} src={item.author.picture.url} />
                                <Box>
                                    <Typography variant="body2" style={{color:'#000000'}}>{item.author.name}</Typography>
                                    <Box style={{color:'#000000'}} sx={{opacity: '.6'}}>{format(new Date , 'dd MMM , yyyy')}</Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
      </Box>
    <Box
        padding={"20px"}
        sx={{ background: "white" }}
        borderRadius={"3px"}
        marginTop={'20px'}
      >
        <Typography variant="h5" style={{ color: "#000000" }}>
          Category
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
        >
          {categories.map((elem) => (
            <Fragment key={elem.slug}>
              <Button
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  height: "50px",
                  color: "#000000",
                }}
                onClick={()=>router.push(`/category/${elem.slug}`)}
              >
                {elem.label}
              </Button>
              <Divider sx={{ backgroundColor: "gray" }} />
            </Fragment>
          ))}
        </Box>
      </Box>

    </Box>
    </Box>
  );
};

export default Sidebar;
