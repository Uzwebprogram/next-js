export interface BlogsType {
        date : string,
        excerpt : string
        slug: string
        title : string
        coverImage : {
          url : string
        }
        author: {
          name:string
          title:string
          biography:string
          picture :{
            url:string
          }
        }
        category :{
          label:string
          slug:string
        }
        content :{
          text:string
        }
}