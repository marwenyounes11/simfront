import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
 
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Gestion Sim',
        url: '/home/base/gestionsim',
        icon: 'icon-puzzle'
      },
      {
        name: 'Gestion Ressource Humaine',
        url: '/home/base/gestionressourcehumaine',
        icon: 'icon-puzzle'
      },
      {
        name: 'Gestion Sim By  Ressource Humaine',
        url: '/home/base/gestionsimbyrh',
        icon: 'icon-puzzle'
      },
      {
        name: 'Nombre Sim By  Ressource Humaine',
        url: '/home/base/nbrsimbyrh',
        icon: 'icon-puzzle'
      },
    ]
  },
 
 
];
