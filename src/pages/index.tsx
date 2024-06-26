import { lazy } from 'react';

const MainPage = lazy(() => import('./MainPage/MainPage')),
      GoodsPage = lazy(() => import('./GoodsPage/GoodsPage')),
      GoodPage = lazy(() => import('./GoodPage/GoodPage')),
      CartPage = lazy(() => import('./CartPage/CartPage')),
      ProfilePage = lazy(() => import('./ProfilePage/ProfilePage'));

export { MainPage, GoodsPage, GoodPage, CartPage, ProfilePage };