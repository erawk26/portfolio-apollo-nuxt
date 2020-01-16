<template lang="pug">
    div(v-if="$apolloData.data.skill")
        h1 {{$apolloData.data.skill.title}}
        v-container.cards(grid-list-lg)
          v-layout.row.wrap
            v-flex.li(v-for='project in $apolloData.data.skill.projects' :key='project.id' xs12 sm6 lg4)
              project.project(:project="project" :projectsArr="$store.state.projects" :isTeaser="true")
</template>

<script>
import G from '~/graphql/gql.js'
import Project from '~/components/Project'
export default {
  components: { Project },
  apollo: {
    $loadingKey: 'loading',
    skill: {
      query: G.queries.skill,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
  mounted () {
  },
  methods: {},
  computed: {
  }
}
</script>

<style scoped></style>