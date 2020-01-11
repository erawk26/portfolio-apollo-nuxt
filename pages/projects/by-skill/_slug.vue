<template lang="pug">
    div(v-if="$apolloData.data.skill")
        h1 {{$apolloData.data.skill.title}}
        v-container.cards(grid-list-lg)
          v-layout.row.wrap
            v-flex.li(v-for='project in $apolloData.data.skill.projects' :key='project.id' xs12 sm6 lg4)
              project.project(:project="project" :isTeaser="true")
</template>

<script>
import { skilledProjectsQuery, skillsQuery } from '~/graphql/queries.js'
import Project from '~/components/Project'
export default {
  components: { Project },
  apollo: {
    $loadingKey: 'loading',
    skill: {
      query: skilledProjectsQuery,
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
  methods: {},
  computed: {
  }
}
</script>

<style scoped></style>