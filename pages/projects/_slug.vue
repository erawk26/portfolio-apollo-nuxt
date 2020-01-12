<template lang="pug">
    project.project(:project="$apolloData.data.project" :projectsArr="projects" :isTeaser="false")
</template>

<script>
import G from '~/graphql/gql.js'
import Project from '~/components/Project'
export default {
  components: {Project},
  apollo: {
    $loadingKey: 'loading',
    projects: {
      query: G.queries.projects
    },
    project: {
      query: G.queries.project,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    },
    skills: {
      query: G.queries.skills
    }
  },
  mounted () {
  },
  methods: {
    // idFromSlug (arr) { return arr.filter(p => p.slug === this.$route.params.slug)[0].id }// this.$route.params.slug }
  },
  computed: {
  }
}
</script>

<style scoped></style>
