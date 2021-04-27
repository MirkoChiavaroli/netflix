import data from "./data.json";
console.log(data);

const Selection = () => {
  return (
    <div>
      {data.map((elem, index) => {
        return (
          <div>
            key={index}
            category={elem.category}
            images={elem.images}
          </div>
        );
      })}
    </div>
  );
};

export default Selection;
