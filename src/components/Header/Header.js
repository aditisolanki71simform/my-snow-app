import React from 'react';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import SearchBar from '../SearchBar/SearchBar';
import BlogIcon from '../Icon/Header/BlogIcon';
import StarIcon from '../Icon/Header/StarIcon';
import SunIcon from '../Icon/Header/SunIcon';
import ClockCounterClockwiseIcon from '../Icon/Header/ClockCounterClockWiseIcon';
import BellIcon from '../Icon/Header/BellIcon';
import { HeaderStyles } from './Header.styles';
import './Header.scss';

const Header = (props) => {
  return (
    <HeaderStyles>
      <div className="header_container">
        <div className="header_left">
          <BlogIcon />
          <StarIcon />
          <BreadCrumb
            items={[
              {
                title: 'dashboards',
              },
              {
                title: <a href="/">Default</a>,
              },
            ]}
          />
        </div>
        <div className="header_right">
          <div>
            <SearchBar />
          </div>
          <SunIcon />
          <ClockCounterClockwiseIcon />
          <a href="/notification">
            <BellIcon />
          </a>
          <BlogIcon />
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
