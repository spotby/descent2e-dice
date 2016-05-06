import {
  SELECT_DICE,
  REMOVE_DICE,
  ROLL_DICE,
  RESET_DICE,
} from '../actions/Dice/DiceActions';


const initialState = {
  selected: [
    /*{color: 'blue', type: 'offense', face: {hearts: 0, surges: 0, range: 0, shields: 0, miss: true } },
    {color: 'blue', type: 'offense', face: {hearts: 2, surges: 1, range: 2, shields: 0, miss: false } },
    {color: 'blue', type: 'offense', face: {hearts: 2, surges: 0, range: 3, shields: 0, miss: false } },
    {color: 'blue', type: 'offense', face: {hearts: 2, surges: 0, range: 4, shields: 0, miss: false } },
    {color: 'blue', type: 'offense', face: {hearts: 1, surges: 0, range: 5, shields: 0, miss: false } },
    {color: 'blue', type: 'offense', face: {hearts: 1, surges: 1, range: 6, shields: 0, miss: false } },
*/
    {color: 'red', type: 'offense', face: {hearts: 1, surges: 0, range: 0, shields: 0, miss: false } },
    {color: 'red', type: 'offense', face: {hearts: 2, surges: 0, range: 0, shields: 0, miss: false } },
    {color: 'red', type: 'offense', face: {hearts: 2, surges: 0, range: 0, shields: 0, miss: false } },
    {color: 'red', type: 'offense', face: {hearts: 2, surges: 0, range: 0, shields: 0, miss: false }},
    {color: 'red', type: 'offense', face: {hearts: 3, surges: 0, range: 0, shields: 0, miss: false }},
    {color: 'red', type: 'offense', face: {hearts: 3, surges: 1, range: 0, shields: 0, miss: false }},

    {color: 'yellow', type: 'offense', face: {hearts: 0, surges: 1, range: 1, shields: 0, miss: false }},
    {color: 'yellow', type: 'offense', face: {hearts: 1, surges: 0, range: 1, shields: 0, miss: false }},
    {color: 'yellow', type: 'offense', face: {hearts: 1, surges: 0, range: 2, shields: 0, miss: false }},
    {color: 'yellow', type: 'offense', face: {hearts: 1, surges: 1, range: 0, shields: 0, miss: false }},
    {color: 'yellow', type: 'offense', face: {hearts: 2, surges: 0, range: 0, shields: 0, miss: false }},
    {color: 'yellow', type: 'offense', face: {hearts: 2, surges: 1, range: 0, shields: 0, miss: false }},
  ],
  dice: [
    {color: 'blue', type: 'offense', faces: [
      {hearts: 0, surges: 0, range: 0, shields: 0, miss: true },
      {hearts: 2, surges: 1, range: 2, shields: 0, miss: false },
      {hearts: 2, surges: 0, range: 3, shields: 0, miss: false },
      {hearts: 2, surges: 0, range: 4, shields: 0, miss: false },
      {hearts: 1, surges: 0, range: 5, shields: 0, miss: false },
      {hearts: 1, surges: 1, range: 6, shields: 0, miss: false }
    ]},
    {color: 'red', type: 'offense', faces: [
      {hearts: 1, surges: 0, range: 0, shields: 0, miss: false },
      {hearts: 2, surges: 0, range: 0, shields: 0, miss: false },
      {hearts: 2, surges: 0, range: 0, shields: 0, miss: false },
      {hearts: 2, surges: 0, range: 0, shields: 0, miss: false },
      {hearts: 3, surges: 0, range: 0, shields: 0, miss: false },
      {hearts: 3, surges: 1, range: 0, shields: 0, miss: false },
    ]},
    {color: 'yellow', type: 'offense', faces: [
      {hearts: 0, surges: 1, range: 1, shields: 0, miss: false },
      {hearts: 1, surges: 0, range: 1, shields: 0, miss: false },
      {hearts: 1, surges: 0, range: 2, shields: 0, miss: false },
      {hearts: 1, surges: 1, range: 0, shields: 0, miss: false },
      {hearts: 2, surges: 0, range: 0, shields: 0, miss: false },
      {hearts: 2, surges: 1, range: 0, shields: 0, miss: false },
    ]},
    {color: 'green', type: 'offense', faces: [
      {hearts: 1, surges: 0, range: 0, shields: 0, miss: false },
      {hearts: 0, surges: 1, range: 0, shields: 0, miss: false },
      {hearts: 0, surges: 1, range: 1, shields: 0, miss: false },
      {hearts: 1, surges: 0, range: 1, shields: 0, miss: false },
      {hearts: 1, surges: 1, range: 0, shields: 0, miss: false },
      {hearts: 1, surges: 1, range: 1, shields: 0, miss: false },
    ]},
    {color: 'gray', type: 'defense', faces: [
      {hearts: 0, surges: 0, range: 0, shields: 0, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 1, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 1, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 1, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 2, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 3, miss: false },
    ]},
    {color: 'black', type: 'defense', faces: [
      {hearts: 0, surges: 0, range: 0, shields: 0, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 2, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 2, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 2, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 3, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 4, miss: false },
    ]},
    {color: 'brown', type: 'defense', faces: [
      {hearts: 0, surges: 0, range: 0, shields: 0, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 0, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 0, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 1, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 1, miss: false },
      {hearts: 0, surges: 0, range: 0, shields: 2, miss: false },
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
  var face = dice.faces[rand];
  output = _.assign({}, dice, {
    face: face
  });

  return output;
}