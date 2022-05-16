const MenuFilters = () => {
  const onFilterMenu = (filter) => {
    console.log(filter);
  };

  return (
    <>
      <button onClick={() => onFilterMenu("Pizza")}>Pizza</button>
      <button onClick={() => onFilterMenu("Sides")}>Side</button>
      <button onClick={() => onFilterMenu("Desserts")}>Desert</button>
      <button onClick={() => onFilterMenu("Drinks")}>Drinks</button>
      <button onClick={() => onFilterMenu(undefined)}>CLEAR</button>
    </>
  );
};

export default MenuFilters;
