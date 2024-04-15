const Recipe = ({
  image,
  title,
  description,
  PreparationTime,
  ingredients,
  instructions,
  nutritionDesc,
  nutritionalTable,
}) => {
  return (
    <div className="max-w-[736px] bg-n-1 md:rounded-3xl">
      <div className="md:px-10 md:pt-10 overflow-hidden">
        <img className="md:rounded-xl" src={image} alt={title} />
      </div>

      <div className="py-10 px-8 md:px-10">
        <div className="border-b-[1px] border-n-4 space-y-8 pb-8">
          <div className="space-y-6">
            <h1 className="font-youngSerif font-normal text-4xl text-n-6 md:text-[40px]">
              {title}
            </h1>
            <p className="font-outfit font-normal text-base text-n-5">
              {description}
            </p>
          </div>

          <div className="p-6 bg-n-2 rounded-xl space-y-4 md:p-7">
            <p className="font-outfit font-semibold text-xl text-p-2">
              Preparation time
            </p>

            <ul className="list-disc marker:text-p-2 ml-6 space-y-2">
              {PreparationTime.map((item) => (
                <li className="pl-4" key={item.title}>
                  <p className="font-outfit font-normal text-base text-n-5">
                    <span className="font-bold">{item.title}:</span> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="font-youngSerif font-normal text-[28px] text-p-1">
              Ingredients
            </h2>

            <ul className="list-disc marker:text-p-1 marker:text-xs ml-6 space-y-2">
              {ingredients.map((item) => (
                <li className="pl-4" key={item}>
                  <p className="font-outfit font-normal text-base text-n-5">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="font-youngSerif font-normal text-[28px] text-p-1 space-y-6 pt-8 pb-8 border-b-[1px] border-n-4">
          <h2 className="font-youngSerif font-normal text-[28px] text-p-1">
            Instructions
          </h2>

          <ol className="list-decimal marker:text-p-1 marker:font-outfit marker:font-bold text-base  ml-6 space-y-2">
            {instructions.map((item) => (
              <li className="pl-4" key={item.title}>
                <p className="font-outfit font-normal  text-n-5">
                  <strong>{item.title}</strong>: {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="pt-8 space-y-6">
          <h2 className="font-youngSerif font-normal text-[28px] text-p-1">
            Nutrition
          </h2>
          <p className="font-outfit font-normal text-base text-n-5">
            {nutritionDesc}
          </p>

          <table className="w-full">
            <tbody>
              {nutritionalTable.map((item, index, arr) => (
                <tr key={item.name} className="space-x-4">
                  <td
                    className={`font-outfit text-n-5 ${
                      index === 0 ? "pt-0" : ""
                    } py-3 pl-8 ${
                      index !== arr.length - 1
                        ? "border-b-[1px] border-n-4 "
                        : "pb-0"
                    } `}
                  >
                    {item.name}
                  </td>
                  <td
                    className={`font-outfit text-p-1 font-bold ${
                      index === 0 ? "pt-0" : ""
                    } py-3 pl-4 pr-8 ${
                      index !== arr.length - 1
                        ? "border-b-[1px] border-n-4 "
                        : "pb-0"
                    }`}
                  >
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
