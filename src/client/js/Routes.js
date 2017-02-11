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

import React from 'react';
import { Route, IndexRoute } from 'react-router'
import Home from './components/home/Home';
import BOM from './components/bom/BOM';
import BomItemsGrid from './components/bom/BomItemsGrid'
import BomItemsTable from './components/bom/BomItemsTable'
import {TransitionContainer} from 'reactimate'
import NotFoundPage from './components/NotFoundPage';
    // let routes = [
    //   { path: '/', component: TransitionContainer, indexRoute: { component: Home },
    //     childRoutes: [
    //       { path: 'home', component: Home },
    //       { path: 'bom/:bomID/', component: BOM, indexRoute: {component: BomItemsGrid},
    //         childRoutes: [
    //           { path: 'grid', component: BomItemsGrid },
    //           { path: 'table', component: BomItemsTable }
    //         ]
    //       }
    //     ]
    //   }
    // ];

    export let routes = (

      <Route path="/" component={TransitionContainer}>
          <IndexRoute component={Home}/>
          <Route path="home" component={Home}/>
          <Route path="bom/:bomID" component={BOM}>
            <IndexRoute component={BomItemsGrid}/>
            <Route path="grid" component={BomItemsGrid}/>
            <Route path="table" component={BomItemsTable}/>
          </Route>
          <Route path="*" component={NotFoundPage}/>
        </Route>


    )
