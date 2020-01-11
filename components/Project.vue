<template lang="pug">
  component(:is="isTeaser?'project-teaser':'project-full'" :project="project")
</template>

<script>
import TeaserCard from '~/components/FlipCard'
import FullCard from '~/components/Project--full'
export default {
  components: {'project-teaser': TeaserCard, 'project-full': FullCard},
  props: {
    isTeaser: { type: Boolean, default: false },
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
