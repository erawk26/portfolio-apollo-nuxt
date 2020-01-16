<template lang="pug">
    project.project(:project="project" :isTeaser="false")
</template>

<script>
import G from '~/graphql/gql.js'
import Project from '~/components/Project'
export default {
  components: {Project},
  apollo: {
    $loadingKey: 'loading',
    project: {
      query: G.queries.project,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
  mounted () {

  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped></style>
