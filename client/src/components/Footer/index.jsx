import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        <h4>
          Donate $10 with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          to Squishies Flat-Faced Animal Rescue
        </h4> 
        <form action="/create-checkout-session" method="POST">
          <button type="submit">
            DONATE
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
