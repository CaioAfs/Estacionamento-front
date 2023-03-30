import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const Topmenu = () => {
  return (
    <div className="top-menu">
      <Logo />
      <Menu />
    </div>
  ); 
};

const Menu = () => {
  return (
    <DropdownButton title="Menu" variant="secondary">
      <Dropdown.Item>Sair</Dropdown.Item>
    </DropdownButton>
  );
};

const Logo = () => {
  return(
    <h1>Led Parking</h1>
  );
};


export default Topmenu;