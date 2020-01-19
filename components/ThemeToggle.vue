<template lang="pug">
  span
    v-list-item
        v-list-item-action.cursor.no-text(@click="cycleTheme()")
            v-icon {{colorMode==='auto'?'brightness_auto':$vuetify.theme.dark?'brightness_4':'brightness_5'}}
        v-list-item-content.screen-reader
            v-list-item-title {{colorMode==='auto'?'dark':$vuetify.theme.dark?'light':'auto'}}
</template>

<script>
export default {
  methods: {
    changeTheme (bool) {
      // just change from light to dark, not cycling modes in here
      this.$vuetify.theme.dark =
        bool === undefined ? !this.$vuetify.theme.dark : bool
    },
    getNextColorMode (color) {
      // just cycle the different modes, not changing color in here
      const nextColor =
        color === 'auto' ? 'dark' : color === 'dark' ? 'light' : 'auto'
      return nextColor
    },
    cycleTheme () {
      // toggle theme color, button apearance, vars
      this.colorMode = this.getNextColorMode(this.colorMode)
      this.colorMode === 'auto'
        ? this.changeTheme(this.isNight())
        : this.changeTheme()
    },
    isNight: () => new Date().getHours() < 7 && new Date().getHours() > 18
  },
  mounted () {
    if (this.colorMode === 'auto') {
      // if the color mode is set to auto change the theme based on time of day
      this.changeTheme(this.isNight())
    }
  },
  data: () => ({ colorMode: 'auto', isMini: true })
}
</script>

<style lang="scss" scoped></style>
