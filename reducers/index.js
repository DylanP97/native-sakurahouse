import { combineReducers } from "redux";

const initialState = {
  order: {
    location: "Eat In",
    itemsSelected: [],
    totalAmount: 0,
    orderNumber: "",
  },
};

const UPDATE_LOCATION = "UPDATE_LOCATION";
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

export const updateLocation = (location) => ({
  type: UPDATE_LOCATION,
  payload: location,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        order: { ...state.order, location: action.payload },
      };

    case ADD_ITEM:
      const newItem = { ...action.payload, totalItemAmount: action.payload.price };
      const addedItems = [...state.order.itemsSelected, newItem];
      const addedTotalAmount = state.order.totalAmount + newItem.price;

      return {
        ...state,
        order: {
          ...state.order,
          itemsSelected: addedItems,
          totalAmount: addedTotalAmount,
        },
      };

      case REMOVE_ITEM:
        const removedItem = action.payload;      
        const indexToRemove = state.order.itemsSelected.findIndex(item => item.id === removedItem.id);
        const updatedItems = [...state.order.itemsSelected];
        updatedItems.splice(indexToRemove, 1);
        const removedTotalAmount = state.order.totalAmount - removedItem.price;
      
        return {
          ...state,
          order: {
            ...state.order,
            itemsSelected: updatedItems,
            totalAmount: removedTotalAmount
          }
        };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  myReducer,
});

export default rootReducer;
