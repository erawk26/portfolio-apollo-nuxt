<template lang="pug">
  v-hover(v-slot:default="{ hover }" close-delay="350")
    component(v-if="project" :is="isTeaser?'project-teaser':'project-full'" :hover="hover" :project="project")
</template>

<script>
import TeaserCard from '~/components/FlipCard'
import FullCard from '~/components/Project--full'
export default {
  components: { 'project-teaser': TeaserCard, 'project-full': FullCard },
  props: {
    isTeaser: { type: Boolean, default: false },
    project: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {},
  mounted() {}
}
</script>
