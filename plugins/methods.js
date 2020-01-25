import Vue from 'vue'
import G from '~/graphql/gql.js'
Vue.mixin({
  methods: {
    looper (dir, arr) {
      const len = arr.length
      return arr[(arr.indexOf(this.$route.params.slug) + ((dir * -1) % len) + len) % len]
    },
    machine_readable: (val) => val
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
  },
  apollo: {
    $loadingKey: 'loading',
    skills: {
      prefetch: true,
      query: G.queries.skills
    },
    projects: {
      prefetch: true,
      query: G.queries.projects
    }
  }
})
