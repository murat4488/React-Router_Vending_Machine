import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h3 className="text-2xl">
        Hello I am a vending machine. What would you like to eat?
      </h3>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-6 mx-auto w-60 mt-4">
        <div className="soda">
          <Link to="/soda">Soda</Link>
        </div>

        <div className="chips">
          <Link to="/chips">Chips</Link>
        </div>

        <div className="fresh_sardines">
          <Link to="/fresh_sardines">Fresh Sardines</Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
