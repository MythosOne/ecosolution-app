import React, { useState, useEffect } from 'react';
import { apiServiceData } from '../../Api/apiService.js';
import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { Homepage } from 'pages/Homepage.jsx';
import { Loader } from 'components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    apiServiceData()
      .then()
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Header />
      <Homepage />
      <Footer />
      {isLoading && <Loader />}
    </>
  );
}

export default App;
