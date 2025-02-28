import { NavLink, useSearchParams } from "react-router";
import useAuthGetInfoContext from "../../auth/context/useAuthGetInfoContext";
import "./Navigation.css";

const Navigation: React.FC = () => {
  const weekNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

  const { isLoggedIn, userMaxWeek, role } = useAuthGetInfoContext();

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
            {weekNumber <= userMaxWeek || role === "admin" ? (
              <NavLink
                to={`/deliveries/week-${weekNumber}${
                  role === "admin" ? "?student=" + student : ""
                }`}
                className="week-number"
              >
                {weekNumber}
              </NavLink>
            ) : (
              <button className="week-number" disabled>
                {weekNumber}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
