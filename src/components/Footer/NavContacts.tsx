import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  onClick: () => void;
};

export const NavContacts: FC<Props> = ({ onClick }) => (
  <div className="footer__links-container">
    <Link
      to="https://github.com/juliiaap/Phone_Catalog_React"
      target="_blank"
      rel="noreferrer"
      className="nav-link-style footer__link"
    >
      github
    </Link>
    <Link
      to="/"
      className="nav-link-style footer__link"
      onClick={onClick}
    >
      contacts
    </Link>
    <Link
      to="/"
      className="nav-link-style footer__link"
      onClick={onClick}
    >
      rights
    </Link>
  </div>
);
