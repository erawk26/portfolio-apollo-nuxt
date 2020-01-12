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
  components: { MyMenu },
  computed: {
    menus () {
      return this.$store.state.menus
    }
  },
  data: () => ({ isMini: true }),
  watch: {
    isMini: function () {}
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
        font-size: 3rem;
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
