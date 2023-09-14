import { Link } from "react-router-dom";

const FreshSardines = () => {
  return (
    <div>
      <h3>You don't eat the sardines. The sardines, they eat you!</h3>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};
export default FreshSardines;
