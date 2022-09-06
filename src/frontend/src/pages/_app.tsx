import type { AppProps } from 'next/app';
import '@styles/globals.css';
import { useEffect, useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  const [departamento, setDepartamento] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('api/departamento/')
      .then(response => response.json())
      .then(data => {
        setDepartamento(data);
        setLoading(false);
      })
  }, []);
}

export default App
