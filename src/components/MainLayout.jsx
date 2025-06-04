import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>
        <h1>
        <Link to="/">
          Task Manager
          </Link>
          </h1>
          <ul className='navbar'>
            <li>
              <Link to="/">
                Dashboard
              </Link>
            </li>

          </ul>
        </header>
      <main>
        <Outlet /> {/* Renders child routes here */}
      </main>
      <footer><p>© 2025 Task App</p></footer>
    </div>
  );
};

export default MainLayout;
