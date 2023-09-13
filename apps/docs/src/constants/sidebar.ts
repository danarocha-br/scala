export interface NavigationItem {
  label: string;
  group: string;
  href: string;
}

export default {
  home: {
    label: 'Home',
    group: '',
    href: '/',
  },
  avatar: {
    label: 'avatar',
    group: '',
    href: '/avatar',
  },
  button: {
    label: 'button',
    group: '',
    href: '/button',
  },
  calendar: {
    label: 'calendar',
    group: '',
    href: '/calendar',
  },
  chip: {
    label: 'chip',
    group: '',
    href: '/chip',
  },
  // datepicker: {
  //   label: 'datePicker',
  //   group: 'form',
  //   href: '/datepicker',
  // },
  slider: {
    label: 'slider',
    group: 'form',
    href: '/slider',
  },
  editor: {
    label: 'editor',
    group: '',
    href: '/editor',
  },
  navigation: {
    label: 'navigation',
    group: '',
    href: '/navigation',
  },
  selectable: {
    label: 'selectable',
    group: 'form',
    href: '/selectable',
  },
  select: {
    label: 'select',
    group: 'form',
    href: '/select',
  },
  tabs: {
    label: 'tabs',
    group: 'Navigation',
    href: '/tabs',
  },
  textarea: {
    label: 'textarea',
    group: 'form',
    href: '/textarea',
  },
};
