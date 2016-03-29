import {
  TESTER
} from '../actions/App/AppActions';


const initialState = {
  selected: []
};

export function App(state = initialState, action = null) {
  switch (action.type) {
    case TESTER:
      return _.assign({}, state, {
        title: action.value
      });
    default:
      return state;
  }
}
