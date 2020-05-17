<template lang="pug">
  v-container.cards(grid-list-lg='')
    v-layout.row.wrap
      v-flex.li(v-for='project in projects' :key='project.id' xs12 sm6 lg4)
        project.project(:project="project" :isTeaser="true")
</template>

<script>
import Project from '~/components/Project'
export default {
  components: { Project },
  data: () => ({
    loading: 0
  }),
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
.cards {
  width: 100%;
  height: 100%;
  .li {
    .ar .abs-center {
      width: 100%;
      height: 100%;
    }
  }
  .flip-card {
    h1,
    h2,
    h3,
    h4 {
      font-size: 2.2rem;
      font-weight: $h2-weight;
      margin: 0;
      line-height: 1.2;
    }
    .content {
      padding: 1.5rem 2rem;
      width: 100%;
    }
    .col {
      padding: 0;
    }

    .card-front .content {
      border-top: 4px solid $dk-green;
    }
  }
}
</style>
