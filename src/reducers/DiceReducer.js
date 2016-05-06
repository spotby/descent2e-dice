import {
  SELECT_DICE,
  REMOVE_DICE,
  ROLL_DICE,
  RESET_DICE,
} from '../actions/Dice/DiceActions';


const initialState = {
  selected: [],
  dice: [
    {color: 'blue', faces: [
      {hearts: 0, surge: 0, range: 0, shields: 0, miss: true },
      {hearts: 2, surge: 1, range: 2, shields: 0, miss: false },
      {hearts: 2, surge: 0, range: 3, shields: 0, miss: false },
      {hearts: 2, surge: 0, range: 4, shields: 0, miss: false },
      {hearts: 1, surge: 0, range: 5, shields: 0, miss: false },
      {hearts: 1, surge: 1, range: 6, shields: 0, miss: false }
    ]},
    {color: 'red', faces: [
      {hearts: 1, surge: 0, range: 0, shields: 0, miss: false },
      {hearts: 2, surge: 0, range: 0, shields: 0, miss: false },
      {hearts: 2, surge: 0, range: 0, shields: 0, miss: false },
      {hearts: 2, surge: 0, range: 0, shields: 0, miss: false },
      {hearts: 3, surge: 0, range: 0, shields: 0, miss: false },
      {hearts: 3, surge: 1, range: 0, shields: 0, miss: false },
    ]},
    {color: 'yellow', faces: [
      {hearts: 0, surge: 1, range: 1, shields: 0, miss: false },
      {hearts: 1, surge: 0, range: 1, shields: 0, miss: false },
      {hearts: 1, surge: 0, range: 2, shields: 0, miss: false },
      {hearts: 1, surge: 1, range: 0, shields: 0, miss: false },
      {hearts: 2, surge: 0, range: 0, shields: 0, miss: false },
      {hearts: 2, surge: 1, range: 0, shields: 0, miss: false },
    ]},
    {color: 'green', faces: [
      {hearts: 1, surge: 0, range: 0, shields: 0, miss: false },
      {hearts: 0, surge: 1, range: 0, shields: 0, miss: false },
      {hearts: 0, surge: 1, range: 1, shields: 0, miss: false },
      {hearts: 1, surge: 0, range: 1, shields: 0, miss: false },
      {hearts: 1, surge: 1, range: 0, shields: 0, miss: false },
      {hearts: 1, surge: 1, range: 1, shields: 0, miss: false },
    ]},
    {color: 'gray', faces: [
      {hearts: 0, surge: 0, range: 0, shields: 0, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 1, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 1, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 1, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 2, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 3, miss: false },
    ]},
    {color: 'black', faces: [
      {hearts: 0, surge: 0, range: 0, shields: 0, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 2, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 2, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 2, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 3, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 4, miss: false },
    ]},
    {color: 'brown', faces: [
      {hearts: 0, surge: 0, range: 0, shields: 0, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 0, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 0, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 1, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 1, miss: false },
      {hearts: 0, surge: 0, range: 0, shields: 2, miss: false },
    ]},
  ]
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
    case ROLL_DICE:
      var cloned = _.clone(state.selected);

      $.each(cloned, function(i, item){
        cloned[i] = roll(item);
      });

      return _.assign({}, state, {
        selected: cloned
      });
    case RESET_DICE:
      return _.assign({}, state, {
        selected: initialState.selected
      });
    default:
      return state;
  }
}

function roll(data){
  const rand = _.random(0, 5);

  let output;

  var dice = _.find(initialState.dice, {color: data.color});
  output = {color: data.color, face: dice.faces[rand]};

  return output;
}