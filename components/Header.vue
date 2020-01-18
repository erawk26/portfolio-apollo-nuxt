<template lang="pug">
  v-navigation-drawer.nav-main.menu--main.unstyle(v-if="!$vuetify.breakpoint.xsOnly" left fixed expand-on-hover :mini-variant.sync="isMini" :mini-variant-width="50" permanent floating)
      my-menu(v-if="!$apolloData.loading" type="dropdown" :menu="$store.state.menus.main" :parentState="isMini")
        template(v-slot:extra)           
          v-list-item
            v-list-item-action.cursor.no-text(@click="changeTheme")
              v-icon {{$vuetify.theme.dark?'brightness_4':'brightness_5'}}
            v-list-item-content.screen-reader
              v-list-item-title {{$vuetify.theme.dark?'dark':'light'}}
</template>

<script>
import MyMenu from '~/components/Menu'
export default {
  name: 'AppHeader',
  components: { MyMenu },
  computed: {},
  methods: {
    changeTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  },
  data: () => ({ isMini: true }),
  watch: {
    isMini: function () {},
    projects: function (curr) {
      if (curr.length) {
        this.$store.commit('addSubmenu', {key: '/projects', menu: curr})
      }
    }
  }
}
</script>

<style lang="scss">
.v-application aside {
  z-index: 220;
  &.v-navigation-drawer {
    &.v-navigation-drawer--fixed {
      z-index: 20;
    }
    &.theme--light,
    &.theme--dark {
      background: transparent;
    }
    transition: all 200ms ease;
    // .v-list-item {
    //   // padding: 0 20px;
    // }
    .v-list > a.nav-item {
      padding-left: 0;
      padding-right: 0;
      .v-list-group {
        max-width: 100%;
      }
    }
    .v-list-item__icon,
    .v-list-item__action {
      i {
        font-size: 2.5rem;
      }
    }
    .v-navigation-drawer__border {
      border-right: 0 solid transparent;
      transition: border-color 200ms ease;
    }
    &.v-navigation-drawer--is-mouseover {
      > .v-navigation-drawer__border {
        border-color: $black;
        border-width: 1px;
      }
      &.theme--dark {
        background: rgba($black, 0.8);
      }
      &.theme--light {
        background: rgba($white, 0.8);
      }
    }
  }
}
.nav-main {
  &.max-pg-width {
    margin: 0 auto;
  }
}
</style>
