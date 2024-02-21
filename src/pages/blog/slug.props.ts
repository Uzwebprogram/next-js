import { BlogDetailes } from "src/interface/blogdetailes.interface";
import { BlogEtalesType } from "src/interface/blogetales.interface";
import { CategoryType } from "src/interface/category.interface";

export interface BlogProps {
    blog : BlogDetailes,
    blogsetailes : BlogEtalesType[],
    categories: CategoryType[]
}