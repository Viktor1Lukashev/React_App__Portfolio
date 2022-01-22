import React from 'react';
import { Link } from 'react-router-dom';

function DevPage({ name, projects }) {
  return (
    <main>
      <h1>{name}</h1>
      <h2>Проекты</h2>
      <ul>
        {projects.length
          ? projects.map(({ name: projectName, url }) => (
              <li key={projectName}>
                <Link to={`../project/${url}`}>{projectName}</Link>
              </li>
            ))
          : 'Пока здесь ничего нет'}
      </ul>
    </main>
  );
}

export default DevPage;
