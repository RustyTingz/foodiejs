const itemSortBy = (itemA, itemB) => {
  if (itemA > itemB) {
    return 1;
  }
  if (itemA < itemB) {
    return -1;
  }

  return 0;
};


const filterItem = (item, filters) => {
  let filtered = filters.every((filter) => {
    return filter.predicate(item, filter.key, filter.value);
  });
  return filtered;
};

export const FILTER_PREDICATE = {
  equalTo: (item, filterKey, filterValue) => item[filterKey] === filterValue,
  lessThan: (item, filterKey, filterValue) => item[filterKey] < filterValue,
  greaterThan: (item, filterKey, filterValue) => item[filterKey] > filterValue,
};

export const filterAndSort = (list, filters, sortBy) => {
  let filtered = list
    .filter((item) => filterItem(item, filters))
    .sort((itemA, itemB) => itemSortBy(itemA[sortBy], itemB[sortBy]));
  
  return filtered;
};