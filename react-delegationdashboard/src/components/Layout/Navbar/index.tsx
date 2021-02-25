import React from 'react';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';

const Navbar = () => {

  return (
    <div className="navbar px-4 py-3 flex-nowrap">
      <div className="container-fluid flex-nowrap">
        <div className="d-flex align-items-center mr-3">
          <Logo className="logo mr-2 flex-shrink-0" />
          <span className="h5 text-nowrap mb-0 p-0">Trust Staking</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
