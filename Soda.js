import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <div className="soda">
      <h3>OMG Sugarrr</h3>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};
export default Soda;
