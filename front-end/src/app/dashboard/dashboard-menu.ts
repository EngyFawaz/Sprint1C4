import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

   { title: 'Dashboard', icon: 'nb-paper-plane', link: '/dashboard', home: true },
  {
    title: 'Store',
    icon: 'fa fa-shopping-basket',
    link: '/dashboard/store',
    children: [
      {
        title: 'Toys Store (C4)',
        icon: 'fa fa-gamepad',
        link: '/dashboard/store/toystore',

      }


  ]
  },
  {
    title: 'Cart',
    icon: 'fa fa-cart-arrow-down',
    link: '/dashboard/items'
  }
];
