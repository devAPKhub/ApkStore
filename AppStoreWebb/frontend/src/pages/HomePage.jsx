import React, { useEffect, useState } from 'react';
import API from '../api';
import AppCard from '../components/AppCard';

function HomePage() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      const res = await API.get('/apps');
      setApps(res.data);
    };
    fetchApps();
  }, []);

  return (
    <div className="container">
      <h1>Featured Apps</h1>
      <div className="grid">
        {apps.map(app => (
          <AppCard key={app._id} app={app} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
