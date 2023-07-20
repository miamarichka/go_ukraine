import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { Main } from "./components/MainPage/Main";
import { City } from "./components/CityPage/City";
import { HotelsSection } from "./components/CitySections/HotelPage/HotelsSection";
import { RestaurantsSection } from "./components/CitySections/RestaurantsPage/RestaurantsSection";
import { EntertainmentSection } from "./components/CitySections/EntertainmentPage/EntertainmentSection";
import { DrivewaySection } from "./components/CitySections/DrivewayPage/DrivewaySection";
import { SharedLayout } from "./components/TemplateComponents/Layout";
import { HomeSection } from "./components/CitySections/HomePage/HomeSection";
import { Account } from "./components/HeaderPages/AccountPage/Account";
import { EditProfileForm } from "./components/Forms/EditProfileForm";
import { Loader } from "./components/Loader/Loader";
import { LogOutPage } from "./components/HeaderPages/AccountPage/LogOut";
import {SavedPage} from "./components/HeaderPages/SavedPage/SavedPage";
import { PrivateRoute } from "./privateRoutes/PrivateRoutes";
import { useAuthStore } from "./api/zustand/authStore";

export const App = () => {
  const { isRefreshing } = useAuthStore();
  const refreshing = useAuthStore((state) => state.refreshUser);

  useEffect(() => {
    refreshing();
}, [refreshing])

  return (
    <ThemeProvider theme={theme}>
      {/* <FavoriteProvider> */}
      <Suspense fallback={<Loader />}>
       {isRefreshing ? "refresing" :(
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Main />} />
            <Route path='/:city' element={<City />}>
              <Route index element={<Navigate to='overview' replace />} />
              <Route path='overview' element={<HomeSection />} />
              <Route path='route' element={<DrivewaySection />} />
              <Route path='hotels' element={<HotelsSection />} />
              <Route path='restaurants' element={<RestaurantsSection />} />
              <Route path='entertainment' element={<EntertainmentSection />} />
            </Route>
            <Route
              path='/saved'
              element={<PrivateRoute component={SavedPage} redirectTo='/' />}
            />
            <Route
              path='/account'
              element={<PrivateRoute component={Account} redirectTo='/' />}>
              <Route index element={<Navigate to='editprofile' replace />} />
              <Route path='editprofile' element={<EditProfileForm />} />
              <Route
                path='reviews'
                element={<h2>You haven`t published a review yet...</h2>}
              />
              <Route path='logout' element={<LogOutPage />} />
            </Route>
            <Route path='*' element={<Main />} />
          </Route>
        </Routes>
        )}
      </Suspense>
      {/* </FavoriteProvider> */}
    </ThemeProvider>
  );
};
