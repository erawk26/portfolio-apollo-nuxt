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
