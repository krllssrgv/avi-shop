import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainPage, GoodsPage, GoodPage, SearchPage, CartPage, ProfilePage } from "pages";
import { routes } from "shared";


function AppRoutes() {
    return(
        <Suspense fallback={<></>}>
            <BrowserRouter>
                <Routes>
                    <Route path={routes.main} element={<MainPage />} />
                    <Route path={routes.goods} element={<GoodsPage />} />
                    <Route path={routes.good + ':id'} element={<GoodPage />} />
                    <Route path={routes.search + ':text'} element={<SearchPage />} />
                    <Route path={routes.cart} element={<CartPage />} />
                    <Route path={routes.profile} element={<ProfilePage />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default AppRoutes;
