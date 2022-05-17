import { mockMenu } from "../../../api/__mocks__/menu";
import { filterAndSort, FILTER_PREDICATE } from "../menuFiltering";

describe("CONTEXTS - Filtering", () => {
  describe("menuFiltering", () => {
    it("should filter products by single filter", async () => {
      let filtered = filterAndSort(
        mockMenu,
        [
          {
            key: "category",
            value: "Pizza",
            predicate: FILTER_PREDICATE.equalTo,
          },
        ],
        undefined
      );

      expect(filtered.length).toBe(35);
      // Spot check results
      expect(filtered[0].name).toBe("Grilled Vegi Pesto");
      expect(filtered[10].name).toBe("American Hot");
      expect(filtered[20].name).toBe("Veg-a-Roma");
      expect(filtered[34].name).toBe("Gluten Free New Yorker");
    });
    it("should filter products by multiple filters", async () => {
      let filtered = filterAndSort(
        mockMenu,
        [
          {
            key: "category",
            value: "Desserts",
            predicate: FILTER_PREDICATE.equalTo,
          },
          {
            key: "price",
            value: 5.99,
            predicate: FILTER_PREDICATE.lessThan,
          },
        ],
        undefined
      );

      expect(filtered.length).toBe(7);
      // Spot check results
      expect(filtered[0].name).toBe("Foodies Cookies");
      expect(filtered[3].name).toBe("Chocolate Fudge Brownie");
      expect(filtered[6].name).toBe("Vanilla");
    });
  });
});
