import data from "./data.json";
console.log(data);

const Selection = () => {
  return (
    <div className="container">
      {data.map((elem, index) => {
        return (
          <div className="block-2">
            {/* key={index} */}
            <h2>{elem.category}</h2>

            <img src={elem.images} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Selection;
