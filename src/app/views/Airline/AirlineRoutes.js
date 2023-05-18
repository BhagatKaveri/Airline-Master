import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const Airline = Loadable(lazy(() => import('./Table')));
const AppForm = Loadable(lazy(() => import('./AddAirline/Appform')));
const EditForm = Loadable(lazy(() => import('./EditAirline/EditForm')));
const SearchForm = Loadable(lazy(() => import('./SearchAirline/SearchForm')));
const AirlineRoutes = [
  {
    path: '/Airline/Table',
    element: <Airline />,
  },
  {
    path: '/AddAirline/Appform',
    element: <AppForm />,
  },
  {
    path: '/EditAirline/EditForm/:id',
    element: <EditForm />,
  },
  {
    path: '/SearchAirline/SearchForm',
    element: <SearchForm />,
  },
];

export default AirlineRoutes;
