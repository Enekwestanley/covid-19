import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const RenderData = ({ country, total }) => (
  <Link className="country_link" to={`/Details/${country}`}>
    <BsArrowRightCircle className="next1" />
    <span className="country_name">
      <p>{country}</p>
      <p>{total}</p>
    </span>
  </Link>
);

RenderData.propTypes = {
  country: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default RenderData;
