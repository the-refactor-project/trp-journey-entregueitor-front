import { NavLink, useSearchParams } from "react-router";
import useAuthGetInfoContext from "../../auth/context/useAuthGetInfoContext";
import "./Navigation.css";

const Navigation: React.FC = () => {
  const { isLoggedIn, userMaxWeek, role } = useAuthGetInfoContext();

  const weekNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].filter(
    (weekNumber) => {
      return weekNumber <= userMaxWeek;
    }
  );

  const [searchParams] = useSearchParams();

  const student = searchParams.get("student");

  if (!isLoggedIn) {
    return null;
  }

  return (
    <nav className="main-navigation">
      <ul>
        {weekNumbers.map((weekNumber) => (
          <li key={weekNumber} className="main-navigation__number">
            <NavLink
              to={`/deliveries/week-${weekNumber}${
                role === "admin" ? "?student=" + student : ""
              }`}
              className="week-number"
            >
              W{weekNumber}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
