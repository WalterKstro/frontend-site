export const profileQuery = gql`
        query{
  profilePage(id:"15JYL7ZrO7frWCwg80RzDz"){
    me{
      name,
      position,
      photo {
        url
      }
    },
    experiencesCollection{
      items{
        position,
        company,
        functions,
        date
      }
    },
    educationsCollection{
      items{
        career,
        institute,
        date
      }
    }
  }
}
    `