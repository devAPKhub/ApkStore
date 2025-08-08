import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

function AppDetailsPage() {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    const fetchApp = async () => {
      const res = await API.get(`/apps/${id}`);
      setApp(res.data);
    };
    fetchApp();
  }, [id]);

  if (!app) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{app.name}</h1>
      <img src={app.icon} alt={app.name} width="100" />
      <p>{app.description}</p>
      <p>Version: {app.version}</p>
      <p>Size: {app.size}</p>
      <a href={app.apkUrl} download>
        <button>Download APK</button>
      </a>
    </div>
  );
}

export default AppDetailsPage;
