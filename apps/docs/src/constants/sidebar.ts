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
  chip: {
    label: 'chip',
    group: '',
    href: '/chip',
  },
  navigation: {
    label: 'navigation',
    group: '',
    href: '/navigation',
  },
  selectable: {
    label: 'selectable',
    group: 'Form',
    href: '/selectable',
  },
  select: {
    label: 'select',
    group: 'Form',
    href: '/select',
  },
};
