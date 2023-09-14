import { useState } from "react";
import { Link } from "react-router-dom";

const Chips = ({ homePage }) => {
  const [bags, setBags] = useState(0);

  const count = () => {
    setBags((n) => n + 1);
  };

  return (
    <div>
      <h3>Bags Eaten: {bags}</h3>
      <button
        style={{ border: "1px solid red", background: "red" }}
        onClick={count}
      >
        Nom Nom Nom{" "}
      </button>
      <br />
      <Link to="/">
        <button> Go Back</button>
      </Link>
    </div>
  );
};
export default Chips;
