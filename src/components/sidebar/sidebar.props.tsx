import { BlogEtalesType } from "src/interface/blogetales.interface";
import { BlogsType } from "src/interface/blogs.interface";
import { CategoryType } from "src/interface/category.interface";

export interface SidebarProps {
    categories : CategoryType[],
    blogsetailes: BlogEtalesType[]
}