import React from 'react';
import { Container } from '@mui/material';

const Footer = () => {
  const styles = {
    backgroundColor: "#8BD3DD",
    color: "#001858",
    fontFamily: ['Arvo', 'serif'],
    container: {
      marginTop: "10vh",
      textAlign: "center",
    },
    link: {
      underline: "none",
      textDecoration: "none",
      color: "#001858",
    },
    footer: {
      fontSize: "0.75rem",
    }
  }

  return (
    <Container style={styles.container}>
      
      <div style={styles.footer}>
      <h4>
        <form action="/create-checkout-session" method="POST">
          <button type="submit">
            Donate $10
          </button>
        </form>
             with{' '}
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
      </div>
    </Container >
  )
};

export default Footer;
