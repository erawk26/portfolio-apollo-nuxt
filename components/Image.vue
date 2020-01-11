<template lang="pug">
  img(:alt="alt" :src="`https://media.graphcms.com/resize=w:${imgWidth},h:${imgHeight},fit:crop/${handle}`")
</template>

<script>
export default {
  data: () => ({imgWidth: 100, imgHeight: 100}),
  props: {
    imageStyle: { type: String, default: 'thumb' },
    handle: { type: String, default: '' },
    alt: { type: String, default: '' },
    title: { type: String, default: '' }
  },
  mounted () {
    switch (this.imageStyle) {
      case 'thumb':
        this.imgWidth = 100
        this.imgHeight = 100
        break
      case 'full':
        this.imgWidth = 1600
        this.imgHeight = 900
        break
      case 'avatar':
        this.imgWidth = 300
        this.imgHeight = 300
        break
    }
  },
  computed: {
  }
}
</script>

<style lang="scss"></style>
