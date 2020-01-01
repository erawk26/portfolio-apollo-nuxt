<template lang="pug">
  .main-layout.css-grid-2
    app-header.row-1.row-span-1.col-full
    main.max-pg-width.row-2.row-span-1.col-full
      nuxt
    app-footer.row-3.row-span-1.col-full
</template>

<script>
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'
export default {
  components: { AppHeader, AppFooter }
}
</script>

<style lang="scss">
@import "~/assets/scss/_atomic.scss";
@import "~/assets/scss/_animations.scss";
@import "~/assets/scss/_global.scss";
.main-layout {
  grid-template-columns: 100px 1fr 100px;
  height: 100vh;
}
</style>
