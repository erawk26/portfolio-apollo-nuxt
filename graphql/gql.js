import gql from 'graphql-tag'
export default {
  queries: {
    project: () => gql`
      query project($slug: String!) {
        project(where: { slug: $slug }) {
          id
          date
          title
          body
          slug
          mainImage {
            url
            width
            height
            handle
            id
          }
          links {
            id
            url
            title
            text
            icon
            hideText
          }
          skills {
            id
            slug
            title
          }
        }
      }
    `,
    projects: () => gql`
      {
        projects {
          id
          date
          title
          body
          slug
          mainImage {
            url
            width
            height
            handle
            id
          }
          skills {
            slug
            title
          }
        }
      }
    `,
    skill: () => gql`
      query skill($slug: String!) {
        skill(where: { slug: $slug }) {
          title
          slug
          projects {
            id
            date
            title
            body
            slug
            mainImage {
              url
              width
              height
              handle
              id
            }
            links {
              id
              url
              icon
              title
              text
              hideText
            }
            skills {
              slug
              title
            }
          }
        }
      }
    `,
    skills: () => gql`
      {
        skills {
          id
          slug
          title
          projects {
            id
            slug
          }
        }
      }
    `
  },
  mutations: {
    upsertProject: () => gql`
      mutation($slug: String!) {
        upsertProject(where: {slug: $slug}, 
          create: {title: "new project"}, 
          update: {title: "updated project"}) {//TODO finish this mutation
          id
          updatedAt
          title
        }
      }
    `
  }
}
