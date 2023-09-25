import Disperse from './pages/Disperse';

const App = () => {
  return (
    <div className="min-w-screen min-h-screen dark:bg-gray-800">
      <div className=" dark:bg-gray-800 min-h-[calc(100vh-80px)] px-[1rem] md:px-[5rem] lg:px-[6rem]">
        {<Disperse />}
      </div>
    </div>
  );
};

export default App;
