<template lang="pug">
  .eo-flex.center.col
    h1 {{project.title}}
    app-img(v-if="project.mainImage"
      :alt="project.title"
      imageStyle="full"
      :handle="project.mainImage.handle")
    p.body(v-if="project.body") {{project.body}}
    a.external-link(v-for="link in project.links" :href="link.url" :title="link.title||link.text" target="_blank") {{link.text}}    
    .skills(v-if="project.skills")
      nuxt-link(v-for="skill in project.skills" :key="skill.id" :to="'/projects/by-skill/'+skill.slug") {{skill.title}}
</template>

<script>
import AppImg from '~/components/Image'
export default {
  name: 'ProjectFull',
  components: {AppImg},
  props: {
    project: {
      type: Object,
      default: () => ({})
    }
  },
  mounted () {
  },
  computed: {}
}
</script>

<style lang="scss"></style>
