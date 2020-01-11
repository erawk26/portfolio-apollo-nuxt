<template lang="pug">
  a(:href="href" :target="target" :title="title")
    v-icon.link-icon(aria-hidden="true") {{icon}}
    span(:class="{'screen-reader':hideText}") {{ text }}
</template>
<script>
export default {
  components: {},
  props: {
    target: {
      type: String,
      default: '_blank'
    },
    icon: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    hideText: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'Visit Site'
    }
  }
}
</script>
<style>
.mdi-link {
  transform: translateY(-2px) rotate(-45deg);
}
</style>
