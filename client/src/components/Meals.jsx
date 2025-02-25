import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealItem from "./MealItem";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp(
    "https://food-ordering-web-app-eexb.onrender.com/meals",
    requestConfig,
    []
  );

  if (isLoading) {
    return <p className="center">Pending...........</p>;
  }

  if (error) {
    return <Error title={"Failed to fetch Meals"} message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
