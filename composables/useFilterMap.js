export const useFilterMap = (id,projects) => {
    const [project] =   projects.
                            filter( project => project.sys.id == id) 
                            .map( ({title, extract,technologiesCollection,imagesCollection,links}) => 
                                ({ 
                                    title,
                                    extract,
                                    technologies: technologiesCollection.items,
                                    images: imagesCollection.items,
                                    links 
                                }))
    return project
}