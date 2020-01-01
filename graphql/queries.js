
import gql from 'graphql-tag'
export const projectsQuery = gql`
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
        id
        title
      }
    }
  }
  `
export const skillsQuery = gql`
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
export const projectQuery = gql`
query project($slug: String!){
  project(where: {slug: $slug}) {
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
      id
      slug
      title
    }
  }
} `
