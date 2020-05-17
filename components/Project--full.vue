<template lang="pug">
  .project-container.max-pg-width(v-if="!$apolloData.loading" v-touch="{ left: () => swipe('Left'), right: () => swipe('Right')}")
    v-breadcrumbs.eo-flex.a-start.j-start.pl-0(:items='crumbs' dense)
      template(v-slot:divider='')
        v-icon mdi-chevron-right
    div
      v-card
        app-img(v-if="project.mainImage" :handle="project.mainImage.handle" imageStyle="full" aspect-ratio="1.77" :title="project.title" :alt="project.title")
      .title-wrapper.d-flex.align-end.justify-space-between
        .cell.eo-flex.a-end
          h1.display-2 {{ project.title }}
          app-link.mx-4(v-for="(link,i) in project.links" :key="'link-'+ i + 1" hide-text :title="link.title||link.text||'Visit Site'" :text="link.text||link.title||'Visit Site'" :href="link.url" :icon="link.icon||'mdi-link'" target="_blank")
        small.counter.flex-shrink-0(@click="updatePage(looper(1,keys))") {{keys.indexOf(project.slug) + 1}} / {{keys.length}}
          nuxt-link(:to="looper(1,keys)")
            v-icon chevron_right
      v-divider.my-3
      .eo-flex.wrap.j-center.a-start
        .cell.alpha.mt-2
          p.mt-0 {{ project.body }}
        .cell.omega
          .eo-flex.wrap.skills.mt-2(v-if="project.skills")
            small.full-width Skills:
            v-chip.mr-1.mb-1(small :to="'/projects/by-skill/'+skill.slug" ripple v-for="(skill, i) in project.skills" :key="'skill-'+i+1") {{skill.title}}
    .text-center
      v-pagination(v-model='page' total-visible="5" :length='keys.length' circle)  
</template>

<script>
import AppLink from '~/components/Link'
import AppImg from '~/components/Image'
export default {
  name: 'ProjectFull',
  components: { AppLink, AppImg },
  props: {
    hover: { type: Boolean, default: false },
    project: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({ slideTransition: 'fade', swipeDirection: null, page: null }),
  computed: {
    keys() {
      return this.projects ? this.projects.map((k) => k.slug) : []
    },
    crumbs() {
      return [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: 'Projects',
          disabled: false,
          href: '/projects'
        },
        {
          text: this.project.title,
          disabled: true,
          href: '/projects/' + this.$route.params.slug
        }
      ]
    }
  },
  watch: {
    page(curr, prev) {
      if (prev && prev !== curr) {
        this.paginationChange(curr)
      }
    }
  },
  mounted() {
    this.page = this.keys.indexOf(this.$route.params.slug) + 1
  },
  methods: {
    paginationChange(num) {
      const _path = '/projects/' + this.projects[num - 1].slug
      this.$router.push({ path: _path })
    },
    updatePage(slug) {
      this.page = this.keys.indexOf(slug) + 1
    },
    swipe(dir) {
      this.swipeDirection = dir
      const x = dir === 'Left' || dir === 'Up' ? 1 : -1
      this.slideTransition = x > 0 ? 'slide-left' : 'slide-right'
      this.$router.push({
        path: '/projects/' + this.looper(x, this.keys)
      })
    }
  }
}
</script>
<style lang="scss">
.skills {
  a {
    display: block;
    font-size: 0.8em;
  }
  h6 {
    width: 100%;
  }
}
.project-container {
  .title-wrapper {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    h1.display-2 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
  }
  .v-card {
    width: 100%;
  }
  .v-btn i {
    margin-right: 0.25em;
  }
  .alpha {
    flex: 2;
    margin-right: 2rem;
    @media (max-width: 599px) {
      min-width: 100%;
      margin-right: 0;
    }
  }
  .omega {
    flex: 1;
  }
}
</style>
