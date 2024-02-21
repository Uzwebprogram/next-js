import {request , gql} from "graphql-request"
import { BlogDetailes } from "src/interface/blogdetailes.interface";
import { BlogEtalesType } from "src/interface/blogetales.interface";
import { BlogsType } from "src/interface/blogs.interface";
import { CategoryType } from "src/interface/category.interface";

const graphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

export const BlogsServices = {
    async getAllBlogs() {
        const query = gql`
        query GetBlogs {
            blogs {
              date
              excerpt
              slug
              title
              coverImage {
                url
              }
              author {
                name
                title
                biography
                picture {
                  url
                }
              }
              category {
                label
                slug
              }
              content {
                text
              }
            }
          }
        `;
        const result = await request<{blogs:BlogsType[]}>(graphAPI , query);
        return result.blogs;
    }
}
export const CategoryServices = {
  async allCategory() {
      const query = gql`
      query Category {
        categories {
          label
          slug
        }
      }      
      `;
      const result = await request<{categories:CategoryType[]}>(graphAPI , query);
      return result.categories;
  }
}
export const BlogLatestServices = {
  async getEtalesBlogs() {
      const query = gql`
      query GetBlogs {
          blogs(last:2) {
            date
            excerpt
            slug
            title
            coverImage {
              url
            }
            author {
              name
              title
              biography
              picture {
                url
              }
            }
            category {
              label
              slug
            }
            content {
              text
            }
          }
        }
      `;
      const result = await request<{blogs:BlogEtalesType[]}>(graphAPI , query);
      return result.blogs;
  }
}
export const getDetailedBlog = {
  async getDetalesBlog(slug: string) {
      const query = gql`
      query BlogDetailes($slug: String!) {
        blog(where: {slug: $slug}) {
          title
          slug
          id
          excerpt
          date
          coverImage {
            url
          }
          author {
            name
            picture {
              url
            }
            title
          }
          content {
            text
            html
          }
        }
      }
      `;
      const result = await request<{blog:BlogDetailes}>(graphAPI , query , {slug});
      return result.blog;
  }
}

export const CategoryDetail = {
  async getCategoryDetails(slug: string) {
    const query = gql`
      query CategoryDetails($slug: String!) {
        blogs(where: { category: { slug: $slug } }) {
          date
          excerpt
          slug
          title
          coverImage {
            url
          }
          author {
            name
            title
            biography
            picture {
              url
            }
          }
          category {
            label
            slug
          }
          content {
            text
          }
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphAPI, query, { slug });
    return result.blogs;
  }
};
