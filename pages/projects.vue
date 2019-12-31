<template>
  <h2 v-if="loading > 0">
    Loading...
  </h2>
  <div v-else>
    <div v-for="project in projects" :key="project.id">
      <div class='projects'>
        <div class='info-header'>
          <img
          v-if="project.mainImage"
            :alt="project.title"
            :src="`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${project.mainImage.handle}`"
          />
          <h1>{{project.title}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  const projects = gql`
  query {
    projects {
      id
      date
      title
      body
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

export default {
    name: 'ProductsPage',
    data: () => ({
      loading: 0
    }),
    apollo: {
      $loadingKey: 'loading',
      projects: {
        query: projects
      }
    }
  }
</script>

<style scoped>
  .projects {
    margin-bottom: 72px; 
  }
  .info-header {
    text-align: center;
  }
  img {
    height: 120px;
    width: auto;
  }
</style>
