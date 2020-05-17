<template lang="pug">
  span
    div(v-if="!$apolloData.loading")
      h1 {{skill.title}}
      v-container.cards(grid-list-lg)
        v-layout.row.wrap
          v-flex.li(v-for='project in skill.projects' :key='project.id' xs12 sm6 lg4)
            project.project(:project="project" :isTeaser="true")
    loading(v-else)
</template>

<script>
import G from '~/graphql/gql.js'
import Project from '~/components/Project'
import Loading from '~/components/Loading'
export default {
  components: { Loading, Project },
  apollo: {
    $loadingKey: 'loading',
    skill: {
      query: G.queries.skill,
      variables() {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  }
}
</script>
