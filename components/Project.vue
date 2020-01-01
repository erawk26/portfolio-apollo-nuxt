<template lang="pug">
    .eo-flex.center.col
        nuxt-link.unstyle(:to="'/projects/'+project.slug") {{project.title}}
        img(v-if="project.mainImage"
            :alt="project.title"
            :src="`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${project.mainImage.handle}`")
        .skills(v-if="project.skills")
            span(v-for="skill in project.skills") {{machine_readable(skill.title)}}
</template>

<script>
export default {
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
        slug: null,
        body: null
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss"></style>
