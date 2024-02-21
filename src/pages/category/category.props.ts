import { BlogEtalesType } from "src/interface/blogetales.interface";
import { BlogsType } from "src/interface/blogs.interface";
import { CategoryType } from "src/interface/category.interface";

export interface CategoryDetailsProps {
    blogs : BlogsType[],
    blogsetailes : BlogEtalesType[],
    categories: CategoryType[]
}