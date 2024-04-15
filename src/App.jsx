import Recipe from "./components/Recipe";
import { recipes } from "./constants";

function App() {
  return (
    <>
      <div className="bg-n-3 flex justify-center items-center md:py-[123px]">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} {...recipe} />
        ))}
      </div>
    </>
  );
}

export default App;
