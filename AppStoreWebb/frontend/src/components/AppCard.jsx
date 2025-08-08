import React from 'react';
import { Link } from 'react-router-dom';

function AppCard({ app }) {
  return (
    <div className="app-card">
      <Link to={`/apps/${app._id}`}>
        <img src={app.icon} alt={app.name} width="80" height="80" />
        <h3>{app.name}</h3>
      </Link>
      <p>Category: {app.category}</p>
      <p>Version: {app.version}</p>
      <p>Downloads: {app.downloads || 0}</p>
    </div>
  );
}

export default AppCard;
