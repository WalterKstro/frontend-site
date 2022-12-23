export const homeQuery = gql`
        query{
            homePage(id:"WHk4w8tVg19EHQF6rOsRg"){
                name,
                position,
                extract,
                greeting,
                description,
                frontend,
                backend,
                imagesCollection{
                items{
                    url
                }
                }
            }
        }
    `