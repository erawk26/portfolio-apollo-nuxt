<template lang="pug">
  v-app
    .main-layout.css-grid-2
      app-header.row-1.row-span-1.col-full
      main.full-width.max-pg-width.row-2.row-span-1.col-full
        nuxt
      app-footer.row-3.row-span-1.col-full
</template>

<script>
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'
export default {
  components: { AppHeader, AppFooter },
  data () {
    return {
      scrolled: 'top'
    }
  },
  computed: {
  },
  watch: {},
  mounted () {
    window.addEventListener('scroll', this.debounce(this.onScroll, 200))
  },
  methods: {
    changeTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    childRoute (href) {
      return this.$route.path.split('/').includes(href.replace('/', ''))
    },
    onScroll: function () {
      const threshhold = 100
      if (window.pageYOffset < threshhold) {
        this.scrolled = 'top'
      } else if (
        window.innerHeight + window.pageYOffset + 1 >=
        document.body.offsetHeight
      ) {
        this.scrolled = 'bottom'
      } else {
        this.scrolled = 'middle'
      }
    },
    debounce: function (func, wait, immediate) {
      var timeout
      return function () {
        var context = this
        var args = arguments
        var later = function () {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/_atomic.scss";
@import "~/assets/scss/_animations.scss";
@import "~/assets/scss/_global.scss";
.main-layout {
  grid-template-rows: 100px 1fr 100px;
  height: 100vh;
}
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
    .v-list-item {
      // padding: 0 20px;
    }
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
footer.v-footer {
  &.theme--dark {
    background-color: #424242;
  }
  &.theme--light {
    background-color: $white;
  }
}
.v-bottom-navigation {
  .nav-main.menu--main {
    padding: 0;
    max-width: 100%;
    i {
      font-size: 2.5rem;
    }
    .nav-item {
      flex: 1;
      padding: 0;
      max-width: 75px;
      &.v-list-item--active {
        i,
        span {
          color: $dk-green;
        }
      }
    }
    button.v-btn {
      padding: 0;
      height: 100%;
    }
  }
}
footer > .v-card {
  width: 100%;
}
.nav-footer {
  .v-list-item__action {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  a.nav-item.v-list-item--link {
    padding: 0 6px;
  }
}
.nav-main {
  &.max-pg-width {
    margin: 0 auto;
  }
}
.menu--main {
  .file-item a {
    // flex: 0;
  }
  .nav-item,
  .file-item {
    a {
      // font-size: 1.6rem;
    }
    // padding: 5px 10px;
    // .menu-title {
    //   display: initial;
    // }
    // .material-icons {
    //   display: none;
    // }
    // @include mobile {
    //   .menu-title {
    //     display: none;
    //   }
    //   .material-icons {
    //     display: initial;
    //   }
    // }
  }
}
.scrolled:not(.top) .navigation-drawer {
  z-index: 100;
  top: -60px;
  left: 0;
  width: 100%;
  transform: translateY(45px);
  position: fixed;
  transition: all 1s ease;
}
// .scrolled:not(.bottom) footer {
//   z-index: 100;
//   bottom: -60px;
//   left: 0;
//   width: 100%;
//   transform: translateY(-60px);
//   position: fixed;
//   transition: all 1s ease 1s;
// }
</style>
