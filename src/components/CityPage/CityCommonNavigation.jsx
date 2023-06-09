import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { NavCategoryBox } from '../CityNavComponent/NavLinkCityPages.styled';
import { NavCategory } from '../CityNavComponent/NavLinkCityPages';
import { HomeNav } from '../CityNavigationParts/HomeNav';
import { DrivewayNav } from '../CityNavigationParts/DrivewayNav';
import { HotelsNav } from '../CityNavigationParts/HotelsNav';
import { RestaurantsNav } from '../CityNavigationParts/RestaurantsNav';
import { EntertainmentNav } from '../CityNavigationParts/EntertainmentNav';

export const Categories = ({ city }) => {
  const { city: cityParam } = useParams();
  const selectedCity = city || cityParam;

  return (
    <nav>
      <NavCategoryBox>
        <NavCategory
          to={`/${selectedCity}/overview`}
          element={<HomeNav />}
        >
          Overview
        </NavCategory>
        <NavCategory
          to={`/${selectedCity}/route`}
          element={<DrivewayNav />}
        >
          Driveaway
        </NavCategory>
        <NavCategory
          to={`/${selectedCity}/hotels`}
          element={<HotelsNav />}
        >
          Hotels
        </NavCategory>
        <NavCategory
          to={`/${selectedCity}/restaurants`}
          element={<RestaurantsNav />}
        >
          Restaurants
        </NavCategory>
        <NavCategory
          to={`/${selectedCity}/entertainment`}
          element={<EntertainmentNav />}
        >
          Entertainment
        </NavCategory>
      </NavCategoryBox>
    </nav>
  );
};

Categories.propTypes = {
  city: PropTypes.string,
};

Categories.defaultProps = {
  city: 'Kiev',
};
