import Vue from 'vue'
import G from '~/graphql/gql.js'
Vue.mixin({
  methods: {
    machine_readable: (val) => val
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
  },
  apollo: {
    $loadingKey: 'loading',
    skills: {
      query: G.queries.skills
    },
    projects: {
      query: G.queries.projects
    }
  }
})
