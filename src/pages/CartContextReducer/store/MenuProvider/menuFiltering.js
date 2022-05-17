import { FILTER_PREDICATE } from "../../../../utils/listFiltering";

export const MENU_FILTER = {
  CATEGORY: "category",
};

export const menuFilterFactory = (key, value) => {
  switch (key) {
    case MENU_FILTER.CATEGORY:
      return {
        key,
        value,
        predicate: FILTER_PREDICATE.equalTo,
      };
  }
};
