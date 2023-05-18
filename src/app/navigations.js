export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  { label: 'Master Data', type: 'label' },
  // {
  //   name: 'Industry Master',
  //   icon: 'storageicon',
  //   children: [
  //     { name: 'Airline Master', iconText: 'SI', path: '/material/table' },
  //     { name: 'Country', iconText: 'SU', path: '/session/signup' },
  //     { name: 'Currency', iconText: 'FP', path: '/session/forgot-password' },
  //     { name: 'Exchange Rates ', iconText: '404', path: '/session/404' },
  //   ],
  // },
  {
    name: 'Industry Master',
    icon: 'storageicon',
    children: [
      { name: 'Airline Master', iconText: 'AI', path: '/Airline/Table' },
      { name: 'Country', iconText: 'CO', path: '/session/signup' },
      { name: 'Currency', iconText: 'CNT', path: '/session/forgot-password' },
      { name: 'Exchange Rates ', iconText: '404', path: '/session/404' },
    ],
  },
  {
    name: 'Reference Master',
    icon: 'photo',
    children: [
      { name: 'Vendors', iconText: 'SI', path: '/Airline/Table' },
      { name: 'Aircraft', iconText: 'SU', path: '/session/signup' },
      { name: 'Services', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Parameter', iconText: '404', path: '/session/404' },
    ],
  },
  // { label: 'Components', type: 'label' },
  // {
  //   name: 'Components',
  //   icon: 'favorite',
  //   badge: { value: '30+', color: 'secondary' },
  //   children: [
  //     { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
  //     { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
  //     { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
  //     { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
  //     { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
  //     { name: 'Form', path: '/material/form', iconText: 'F' },
  //     { name: 'Icons', path: '/material/icons', iconText: 'I' },
  //     { name: 'Menu', path: '/material/menu', iconText: 'M' },
  //     { name: 'Progress', path: '/material/progress', iconText: 'P' },
  //     { name: 'Radio', path: '/material/radio', iconText: 'R' },
  //     { name: 'Switch', path: '/material/switch', iconText: 'S' },
  //     { name: 'Slider', path: '/material/slider', iconText: 'S' },
  //     { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
  //     { name: 'Table', path: '/material/table', iconText: 'T' },
  //   ],
  // },
  // {
  //   name: 'Charts',
  //   icon: 'trending_up',
  //   children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  // },
  // {
  //   name: 'Documentation',
  //   icon: 'launch',
  //   type: 'extLink',
  //   path: 'http://demos.ui-lib.com/matx-react-doc/',
  // },
];
