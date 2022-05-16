


const MenuSort = () => {

  const onSortMenu = (sortBy) => {
    console.log(sortBy);
  };

  return (
    <>
      <button onClick={() => onSortMenu("name")}>Name</button>
      <button onClick={() => onSortMenu("category")}>Category</button>
      <button onClick={() => onSortMenu(undefined)}>RESET</button>
    </>
  );
};
 
export default MenuSort;