<template lang="pug">
    Project.project(:project="$apolloData.data.project" :isTeaser="false")
</template>

<script>
import { projectQuery, projectsQuery, skillsQuery } from '~/graphql/queries.js'
import Project from '~/components/Project'
export default {
  components: {Project},
  apollo: {
    $loadingKey: 'loading',
    projects: {
      query: projectsQuery
    },
    project: {
      query: projectQuery,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    },
    skills: {
      query: skillsQuery
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
