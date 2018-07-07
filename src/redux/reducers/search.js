import * as Actions from '../actions/search';

const initalState = {
  searchResults: [],
  query: ''
}

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case Actions.UPDATE_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.results
      };
    case Actions.UPDATE_SEARCH_RESULTS:
      return {
        ...state,
        query: action.query
      }
  }
}