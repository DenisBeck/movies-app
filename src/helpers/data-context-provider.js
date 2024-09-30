import { createContext, useContext, useReducer } from 'react';

const DataContext = createContext(null);
const DataDispatchContext = createContext(null);

const initialData = {
  fetch: {
    loading: false,
    error: null,
    data: {},
  },
  genres: [],
  ratings: {},
  query: '',
  page: {
    search: 1,
    rated: 1,
  },
  sessionId: localStorage.getItem('sessionId') || null,
  movieApiMethod: null,
};

function dataReducer(data, action) {
  switch (action.type) {
    case 'setRating': {
      return {
        ...data,
        ratings: action.ratings,
      };
    }
    case 'setGenres': {
      return {
        ...data,
        genres: action.genres,
      };
    }
    case 'setSearchQuery': {
      return {
        ...data,
        query: action.query,
        movieApiMethod: action.movieApiMethod,
      };
    }
    case 'setPageNumber': {
      const newPage = { ...data.page, ...action.page };
      return {
        ...data,
        page: newPage,
        movieApiMethod: action.movieApiMethod,
      };
    }
    case 'setSessionId': {
      return {
        ...data,
        sessionId: action.sessionId,
      };
    }
    case 'callMovieApiMethod': {
      return {
        ...data,
        movieApiMethod: action.movieApiMethod,
      };
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

function DataContextProvider({ children }) {
  const [data, dispatch] = useReducer(dataReducer, initialData);

  return (
    <DataContext.Provider value={data}>
      <DataDispatchContext.Provider value={dispatch}>{children}</DataDispatchContext.Provider>
    </DataContext.Provider>
  );
}
export function useData() {
  return useContext(DataContext);
}

export function useDataDispatch() {
  return useContext(DataDispatchContext);
}

export default DataContextProvider;
