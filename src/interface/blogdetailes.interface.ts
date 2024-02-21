export interface BlogDetailes{
    title:string,
    slug:string,
    id:string,
    excerpt:string
    date:string
    coverImage: {
      url:string
    }
    author: {
        name:string
        picture :{
          url:string
        }
        title:string
      }
      content:{
        text:string
        html : string
      }
}