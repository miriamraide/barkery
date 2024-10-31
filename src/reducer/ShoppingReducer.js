
import { TYPES } from '@/actions/actions';

export const shoppingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case TYPES.ADD_TO_CART: {
      const product = state.products.find((p) => p.id === action.payload);
      const itemInCart = state.cart.find((item) => item.id === product.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_ITEM: {
      const itemToRemove = state.cart.find((item) => item.id === action.payload);
      return itemToRemove.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_ITEMS:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case TYPES.CART_CLEAR:
      return { ...state, cart: [] };
    default:
      return state;
  }
};
