import { Routes, Route, Outlet } from 'react-router-dom';
import Disperse from './pages/Disperse';

const DisperseBody = () => {
  return (
    <div className="min-w-screen min-h-screen dark:bg-gray-800">
      <div className=" dark:bg-gray-800 min-h-[calc(100vh-80px)] px-[1rem] md:px-[5rem] lg:px-[6rem]">
        <Outlet />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DisperseBody />}>
        <Route index element={<Disperse />} />
      </Route>
    </Routes>
  );
};

export default App;
