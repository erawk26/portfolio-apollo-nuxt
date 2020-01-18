<template lang="pug">
  span
    project.project(v-if="!$apolloData.loading" :project="project" :isTeaser="false")
    loading(v-else)
</template>

<script>
import G from '~/graphql/gql.js'
import Project from '~/components/Project'
import Loading from '~/components/Loading'
export default {
  components: { Project, Loading },
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
  }
}
</script>
