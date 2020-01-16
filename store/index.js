export const state = () => ({
  menus: {
    main: [
      {
        external: false,
        icon: 'home',
        title: 'Intro',
        to: '/'
      },
      {
        external: false,
        icon: 'work',
        title: 'Projects',
        to: '/projects'
      },
      {
        external: false,
        icon: 'mail_outline',
        title: 'Contact',
        to: '/contact'
      },
      {
        external: true,
        icon: 'mdi-file-pdf',
        title: 'Resume',
        href: './ErikOlsen_Resume.pdf'
      }
    ],
    footer: [
      {
        external: false,
        icon: 'mail_outline',
        to: '/contact',
        title: 'me@erikthedeveloper.com'
      },
      {
        external: true,
        icon: 'mdi-linkedin-box',
        href: 'https://www.linkedin.com/in/erikthedeveloper',
        title: 'LinkedIn'
      },
      {
        external: true,
        icon: 'mdi-github-circle',
        href: 'https://github.com/erawk26',
        title: 'GitHub'
      },
      {
        external: true,
        icon: 'mdi-codepen',
        href: 'https://codepen.io/erawk26',
        title: 'CodePen'
      },
      {
        external: true,
        icon: 'mdi-instagram',
        href: 'https://www.instagram.com/erikthedeveloper',
        title: 'Instagram'
      }
    ]
  }
})

export const mutations = {
  addMenu (state, payload) {
    state.menus[payload.key] = payload.menu
  },
  addBase (state, payload) {
    state[payload.key] = payload[payload.key]
  }
}
