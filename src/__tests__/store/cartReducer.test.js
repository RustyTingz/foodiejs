import cartReducer, { defaultCartState, cartActionFactory } from "../../store/cartReducer";

const initialState = defaultCartState;

describe("Cart Reducer", () => {

  describe("Initial State", () => {
    it("A default state if no action is provided", () => {
      let state = cartReducer();

      expect(Array.isArray(state.items)).toBeTruthy();
      expect(typeof state.amount).toBe("number");
    });
  });

  describe("Invalid cart action", () => {
    it("should not mutate state if an invalid action is provided", () => {
      let startingState = {
        items: [{ sku: 1, name: "Cheese", price: 3.0, quantity: 1 }],
        amount: 3.49,
      };

      let newState = cartReducer(startingState, { type: "INVALID_ACTION" });

      expect(newState).toBe(startingState);
    })
  })
 
  describe("Add Item to Cart", () => {
    let item, startingState, action = undefined;

    beforeEach(() => {
      item = { sku: 123, name: "Cheese", price: 3.00, quantity: 1 }
      action = cartActionFactory.createAddItemAction(item);
      startingState = { ...initialState }
    });
    
    it("A new item can be added to the cart", () => {      
      let state = cartReducer(startingState, action);

      expect(state.items.length).toBe(1)
      expect(state.amount).toBe(3.00)
    });

    it("Should update the quantity if the same item is added again", () => {
      let initialState = {
        items: [
          { sku: 123, name: "Cheese", price: 3.00, quantity: 1 }
        ],
        amount: 3.49
      }
      
      let state = cartReducer(initialState, action)

      expect(state.items.length).toBe(1)
      expect(state.items[0].quantity).toBe(2);
      expect(state.amount).toBe(6.00)
    })
  });

  describe("Change item quantity", () => {
    let sku, startingState;

    beforeEach(() => {
      sku = 123;
      startingState = {
        items: [{ sku: 123, name: "Cheese", price: 3.0, quantity: 1 }],
        amount: 3.0
      };
    });

    it("Increasing an item quantity will add 1 to an existing cart item with the same SKU", () => {
      let action = cartActionFactory.createIncreaseQuantityAction(sku);
      
      const state = cartReducer(startingState, action);

      expect(state.items.length).toBe(1);
      expect(state.items[0].sku).toBe(123);
      expect(state.items[0].quantity).toBe(2);
      expect(state.amount).toBe(6.00);
    })

    it("Decreasing an item quantity will remove 1 from a existing cart item with the same SKU", () => {
      let action = cartActionFactory.createDecreaseQuantityAction(sku);

      startingState.items[0].quantity = 2;

      const state = cartReducer(startingState, action);

      expect(state.items.length).toBe(1);
      expect(state.items[0].sku).toBe(123);
      expect(state.items[0].quantity).toBe(1);
      expect(state.amount).toBe(3.0);
    });

    it("Decreasing an item quantity to 0(zero) will remove the item from the cart", () => {
      let action = cartActionFactory.createDecreaseQuantityAction(sku);

      const state = cartReducer(startingState, action);

      expect(state.items.length).toBe(0);
      expect(state.amount).toBe(0.0);
    });
  })
});