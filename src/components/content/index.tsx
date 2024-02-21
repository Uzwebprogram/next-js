import { Box } from "@mui/system";
import React from "react";
import { ContentProps } from "./content.props";
import Image from "next/image";
import { Avatar, Divider, Typography } from "@mui/material";
import { calculateEstimedTimeToRead } from "src/helpers/time.format";
import { useRouter } from "next/router";

const Content = ({ blogs  }: ContentProps) => {
  const route = useRouter();
  return (
    <Box width={{xs : '100%' , md:'70%'}}>
      {blogs.map((elem) => (
        <Box
          key={elem.slug}
          sx={{ background: "white" }}
          width={"100%"}
         
          marginBottom={"20px"}
          borderRadius={"3px"}
          padding={"20px"}
          onClick={() => route.push(`/blog/${elem.slug}`)}
        >
          <Box
            position={"relative"}
            width={"100%"}
            borderRadius={5}
            height={{xs : '35vh' , md:'70vh'}}
          >
            <Image
              style={{ borderRadius: 10 }}
              src={elem.coverImage.url}
              fill
              alt={elem.title}
            />
          </Box>

          <Typography
            color={"black"}
            style={{ marginBottom: "20px", marginTop: "30px"  }}
            sx={{ fontSize:{xs : '30px' , md:'20px'}}}
            variant="h3"
          >
            {elem.title}
          </Typography>
          <Typography color={"black"} variant="h6">
            {elem.excerpt}
          </Typography>
          <Divider
            style={{
              background: "gray",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <Avatar
              src={elem.author.picture?.url}
              style={{ marginRight: "10px" }}
            />
            <Box>
              <Typography color={"black"}>{elem.author.name}</Typography>
              <Typography color={"gray"}>
                {calculateEstimedTimeToRead(elem.content.text)} min read
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Content;
