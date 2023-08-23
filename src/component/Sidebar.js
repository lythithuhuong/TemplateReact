import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div>
      Đây là sidebar
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
