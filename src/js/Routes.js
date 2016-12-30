/*H**********************************************************************
* FILENAME :        Routes.js
*
* DESCRIPTION :
*       Defines all routes and its respective components to be rendered.
*
* EXPORTS :
*       ---
*
* NOTES :
*       ---
*
* AUTHOR :    Jay Sridharan       START DATE :    22 Dec 16
*
*H*/


import Home from './components/home/Home';
import BOM from './components/bom/BOM';

export let routes = [
  { path: '/fs-bom/www/', component: TransitionContainer, childRoutes:

    [

      { path: '/fs-bom/www/bom/:bomID', component: BOM},
      { path: '/fs-bom/www/home', component: Home},

    ]

  },

];
