import { ProjectsCollectionItem } from "~~/interfaces/ProjectInterface"
import { Projects } from '../interfaces/ProjectInterface';

export const useFilterMap = (id:string,projects:ProjectsCollectionItem[]) => {
    const [project] =   projects
                            .filter( project => project.sys.id == id) 
                            .map( ({title, extract,technologiesCollection,imagesCollection,links}) => ({ 
                                    title,
                                    extract,
                                    technologies: technologiesCollection.items,
                                    images: imagesCollection.items,
                                    links 
                                }))
    return project
}