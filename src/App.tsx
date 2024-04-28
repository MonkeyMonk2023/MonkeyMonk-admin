import { useEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes, useLocation } from 'react-router-dom';

import PageTitle from './components/PageTitle';
import Dashboard from './pages/Dashboard/Dashboard';
import Blogs from './pages/Dashboard/Blogs';
import Users from './pages/Dashboard/Users';
import FeaturedPlaces from './pages/Dashboard/FeaturedPlaces';
import Posts from './pages/Dashboard/Posts';
import Login from './pages/Dashboard/Login';


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/login'} element={<Login />} />
        {/* <Route path="/" element={<DashboardLayout />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

function DashboardLayout() {
  return (
    <>
      <PageTitle title="Dashboard" />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/users" element={<Users />} />
        <Route path="/featured-places" element={<FeaturedPlaces />} />
        <Route path="/user-posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
