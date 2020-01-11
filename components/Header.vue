<template lang="pug">
  v-navigation-drawer.nav-main.menu--main.unstyle(left fixed expand-on-hover :mini-variant.sync="isMini" :mini-variant-width="50" permanent floating)
      my-menu(type="dropdown" :menu="menus.main" :parentState="isMini")
        template(v-slot:extra)           
          v-list-item
            v-list-item-action()
              v-switch.px-1.mr-3(v-model="$vuetify.theme.dark")
            v-list-item-content()
              v-list-item-title {{$vuetify.theme.dark?'dark':'light'}}
</template>

<script>
import MyMenu from '~/components/Menu'
export default {
  name: 'AppHeader',
  components: {MyMenu},
  computed: {
    menus () {
      return this.$store.state.menus
    }
  },
  data: () => ({isMini: true}),
  watch: {
    isMini: function () {}
  }
}
</script>

<style scoped></style>
