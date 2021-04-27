const selections = ({ category, images, index }) => {
  // console.log(category);
  return (
    <div>
      <h2>{category}</h2>
      <img src={images} alt="" />
    </div>
  );
};

export default selections;
