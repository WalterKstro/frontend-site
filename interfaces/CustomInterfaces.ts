import { ImagesCollectionItem, TechnologiesCollectionItem } from "./ProjectInterface";

export interface IProjectSelected {
    title:string,
    extract:string,
    technologies: TechnologiesCollectionItem[],
    images: ImagesCollectionItem[],
    links: string[]
}