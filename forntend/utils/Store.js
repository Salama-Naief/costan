import { createContext, useReducer } from "react";

const initailState = {
  options: "jim",
  userChat: null,
  user: null,
  createContent: false,
  content: [],
  tasks: [],
  messages: [
    {
      from: {
        name: "",
        id: null,
      },
      message: "",
      to: {
        name: "",
        id: null,
      },
    },
  ],
};
export const Store = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD_OPTIONS": {
      return { ...state, options: action.payload };
    }
    case "ADD_USER": {
      return { ...state, user: action.payload };
    }
    case "REMOVE_USER": {
      return { ...state, user: null };
    }
    case "ADD_MESSAGE": {
      return { ...state, messages: [...state.messages, action.payload] };
    }
    case "ADD_USER_CHAT": {
      return { ...state, userChat: action.payload };
    }
    case "REMOVE_USER_CHAT": {
      return { ...state, userChat: null };
    }

    case "CREATE_CONTENT_OPEN": {
      return { ...state, createContent: true };
    }
    case "CREATE_CONTENT_CLOSE": {
      return { ...state, createContent: false };
    }
    case "CREATE_CONTENT": {
      return { ...state, content: [...state.content, action.payload] };
    }
    case "REMOVE_CONTENT": {
      const items = state.content.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, content: items };
    }

    case "CREATE_TASK": {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case "REMOVE_Task": {
      const items = state.tasks.filter((item) => item.id !== action.payload.id);

      return { ...state, content: items };
    }

    default:
      return state;
  }
}

export default function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initailState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
