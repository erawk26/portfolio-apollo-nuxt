
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
        slug
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
    links{
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
} `
export const skilledProjectsQuery = gql`
query skill($slug: String!){
  skill(where: {slug: $slug}) {
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
      links{
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
} `
