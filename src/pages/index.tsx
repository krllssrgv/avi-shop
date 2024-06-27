import { lazy } from 'react';

const MainPage = lazy(() => import('./MainPage/MainPage')),
      GoodsPage = lazy(() => import('./GoodsPage/GoodsPage')),
      GoodPage = lazy(() => import('./GoodPage/GoodPage')),
      SearchPage = lazy(() => import('./SearchPage/SearchPage')),
      CartPage = lazy(() => import('./CartPage/CartPage')),
      ProfilePage = lazy(() => import('./ProfilePage/ProfilePage'));

export { MainPage, GoodsPage, GoodPage, SearchPage, CartPage, ProfilePage };