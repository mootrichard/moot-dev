import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import Layout from '../components/layout';
import NameSVG from '../components/nameSVG';

function Index({location}) {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <Layout>
      <NameSVG className="svg-name" />
    </Layout>
  );
}

export default Index;
