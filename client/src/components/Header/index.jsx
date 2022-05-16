// Importing external dependencies
import React from 'react';
import { Container } from '@mui/material';



const Header = () => {
  const styles = {
    backgroundColor: "#8BD3DD",
    color: "#001858",
    fontFamily: ['Arvo', 'serif'],
    container: {
      marginTop: "10vh",
      textAlign: "center",
    },
  }

  return (
    <Container style={styles.container}>
      <div style={styles.header}>
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1 className="m-0">Squishy Faces</h1>
        <h3 p className="m-0">The joy and pain of being created adorable</h3>
      </div>
    </header>
    </div>
    </Container >
  );
};

export default Header;
