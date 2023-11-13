import {
  mdiMenu,
  mdiClockOutline,
  mdiCloud,
  mdiCrop,
  mdiAccount,
  mdiCogOutline,
  mdiEmail,
  mdiLogout,
  mdiThemeLightDark,
  mdiGithub,
  mdiReact,
  mdiApplicationArrayOutline,
  mdiPower  
} from '@mdi/js'

export default [
  {
    icon: mdiApplicationArrayOutline ,
    label: 'Application Name: Internet Banking',
    menu: [
      {
        icon: mdiClockOutline,
        label: 'Debit Cards'
      },
      {
        icon: mdiCloud,
        label: 'Credit Cards'
      },
      {
        isDivider: true
      },
      {
        icon: mdiCrop,
        label: 'Employee Portal'
      }
    ]
  },
  // {
  //   isCurrentUser: true,
  //   menu: [
  //     {
  //       icon: mdiAccount,
  //       label: 'My Profile',
  //       to: '/profile'
  //     },
  //     {
  //       icon: mdiCogOutline,
  //       label: 'Settings'
  //     },
  //     {
  //       icon: mdiEmail,
  //       label: 'Messages'
  //     },
  //     {
  //       isDivider: true
  //     },
  //     {
  //       icon: mdiLogout,
  //       label: 'Log Out',
  //       isLogout: true
  //     }
  //   ]
  // },
  {
    icon: mdiThemeLightDark,
    label: 'Light/Dark',
    isDesktopNoLabel: true,
    isToggleLightDark: true
  }
  // ,
  // {
  //   icon: mdiPower ,
  //   label: 'Log out',
  //   isDesktopNoLabel: true,
  //   isLogout: true
  // }
]
