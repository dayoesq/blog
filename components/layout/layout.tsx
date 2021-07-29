import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import MainNavigation from './main-navigation';

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        {children}
      </main>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
export default Layout;
