<template lang="pug">
  span
    v-footer(padless)
      v-card.max-pg-width.d-flex.align-center.justify-start.flex-wrap.px-2(tile elevation="0")
        .cell.copy
          sub &copy; 2015-{{ year }}. Made by Erik Olsen
        .cell
          my-menu.nav-footer.menu--footer.d-flex.justify-start(:menu="menus.footer" :hide-text='true' type="flat")
    v-bottom-navigation(fixed bottom v-show="$vuetify.breakpoint.xsOnly")
      my-menu.nav-main.menu--main.d-flex.justify-center.full-width(:menu="menus.main" :hide-text='true' type="mobile")
</template>

<script>
import MyMenu from '~/components/Menu'
export default {
  name: 'AppFooter',
  components: {MyMenu},
  computed: {
    menus () {
      return this.$store.state.menus
    },
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

</style>
