<template lang="pug">
  v-img(:alt="alt" :lazy-src="`http://via.placeholder.com/${imgWidth}x${imgHeight}`" :src="imageUrl")
    template(v-slot:placeholder)
      v-row.fill-height.ma-0(align='center' justify='center')
        v-progress-circular(indeterminate color='grey lighten-5')
</template>

<script>
export default {
  data: () => ({resize: null, imgWidth: 100, imgHeight: 100, imageUrl: ''}),
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
        this.resize = `resize=w:${this.imgWidth},h:${this.imgHeight},fit:crop/`
        break
      case 'full':
        this.imgWidth = 1600
        this.imgHeight = 900
        this.resize = `resize=w:${this.imgWidth},h:${this.imgHeight},fit:crop/`
        break
      case 'avatar':
        this.imgWidth = 300
        this.imgHeight = 300
        this.resize = `resize=w:${this.imgWidth},h:${this.imgHeight},fit:crop/`
        break
      case 'original':
        this.resize = ''
    }
    this.imgUrl = `https://media.graphcms.com/${this.resize}${this.handle}`
  },
  methods: {},
  computed: {
  }
}
</script>

<style lang="scss"></style>
