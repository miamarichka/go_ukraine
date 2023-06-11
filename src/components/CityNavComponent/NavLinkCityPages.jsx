import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkStyled } from './NavLinkCityPages.styled';

export const NavCategory = ({ to, element }) => (
  <NavLinkStyled
    to={to}
  >
    {element}

  </NavLinkStyled>
);

NavCategory.propTypes = {
  to: PropTypes.string.isRequired,
  element: PropTypes.element,
};
