<template lang="pug">
    .projects
        Project.project(v-for="project in projects" :key="project.id" :project="project" :isTeaser="true")
</template>

<script>
import { projectsQuery, skillsQuery } from '~/graphql/queries.js'
import Project from '~/components/Project'
export default {
  data: () => ({
    loading: 0
  }),
  methods: {
    machine_readable: function (str) {
      return str
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
    }
  },
  components: {Project},
  apollo: {
    $loadingKey: 'loading',
    projects: {
      query: projectsQuery
    },
    skills: {
      query: skillsQuery
    }
  }
}
</script>

<style scoped></style>
