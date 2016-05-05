import {
  SELECT_DICE,
  REMOVE_DICE,
  CLEAR_DICE,
} from '../actions/Dice/DiceActions';


const initialState = {
  selected: []
};

export function Dice(state = initialState, action = null) {
  switch (action.type) {
    case SELECT_DICE:
      var cloned = _.clone(state.selected);
      cloned.push(action.value);

      return _.assign({}, state, {
        selected: cloned
      });
    case REMOVE_DICE:
      var cloned = _.clone(state.selected);
      cloned.splice(action.value, 1);

      return _.assign({}, state, {
        selected: cloned
      });
    case CLEAR_DICE:
      return _.assign({}, state, {
        selected: initialState.selected
      });
    default:
      return state;
  }
}
