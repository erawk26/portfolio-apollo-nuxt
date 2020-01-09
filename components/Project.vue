<template lang="pug">
    .eo-flex.center.col
        nuxt-link.unstyle(:to="'/projects/'+project.slug") {{project.title}}
        app-img(v-if="project.mainImage"
            :alt="project.title"
            :imageStyle="isTeaser?'thumb':'full'"
            :handle="project.mainImage.handle")
        p.body(v-if="project.body&&!isTeaser") {{project.body}}
        a.external-link(v-if="!isTeaser" v-for="link in project.links" :href="link.url" :title="link.title||link.text" target="_blank") {{link.text}}    
        .skills(v-if="project.skills&&!isTeaser")
            nuxt-link(v-for="skill in project.skills" :key="skill.id" :to="'/projects/by-skill/'+skill.slug") {{skill.title}}
</template>

<script>
import AppImg from '~/components/Image'
export default {
  components: {AppImg},
  props: {
    isTeaser: { type: Boolean, default: false },
    project: {
      type: Object,
      default: () => ({
        id: null,
        mainImage: null,
        date: null,
        title: null,
        skills: [],
        links: [],
        slug: null,
        body: null
      })
    }
  },
  mounted () {
  },
  computed: {}
}
</script>

<style lang="scss"></style>
