<template lang="pug">
  span
    nuxt-child(v-if="!loading")
    h1(v-else) loading...
</template>

<script>
import G from '~/graphql/gql.js'
export default {
  data: () => ({loading: true}),
  name: 'ProductsPage',
  apollo: {
    $loadingKey: 'loading',
    skills: {
      query: G.queries.skills,
      result ({data}) {
        data.key = 'skills'
        this.$store.commit('addBase', data)
      }
    },
    projects: {
      query: G.queries.projects,
      result ({data}) {
        data.key = 'projects'
        this.$store.commit('addBase', data)
      }
    }
  },
  mounted () {
    this.loading = false
  }
}
</script>
