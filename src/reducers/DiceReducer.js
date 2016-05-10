import {
  SELECT_DICE,
  REMOVE_DICE,
  ROLL_DICE,
  RESET_DICE,
  REROLL_DICE,
  CLEAR_ALL_DICE,
  CLEAR_DICE,
  CALC_TOTALS,
  CLEAR_TOTALS
} from '../actions/Dice/DiceActions';


const initialState = {
  totals: null,
  selected: [
    /*{color: 'blue', type: 'offense', face: {hearts: 0, surges: 0, range: 0, shields: 0, miss: true } },
    {color: 'blue', type: 'offense', face: {hearts: 2, surges: 1, range: 2, shields: 0, miss: false } },
    {color: 'blue', type: 'offense', face: {hearts: 2, surges: 0, range: 3, shields: 0, miss: false } },
    {color: 'blue', type: 'offense', face: {hearts: 2, surges: 0, range: 4, shields: 0, miss: false } },
    {color: 'blue', type: 'offense', face: {hearts: 1, surges: 0, range: 5, shields: 0, miss: false } },
    {color: 'blue', type: 'offense', face: {hearts: 1, surges: 1, range: 6, shields: 0, miss: false } },

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

    {color: 'green', type: 'offense', face: {hearts: 1, surges: 0, range: 0, shields: 0, miss: false }},
    {color: 'green', type: 'offense', face: {hearts: 0, surges: 1, range: 0, shields: 0, miss: false }},
    {color: 'green', type: 'offense', face: {hearts: 0, surges: 1, range: 1, shields: 0, miss: false }},
    {color: 'green', type: 'offense', face: {hearts: 1, surges: 0, range: 1, shields: 0, miss: false }},
    {color: 'green', type: 'offense', face: {hearts: 1, surges: 1, range: 0, shields: 0, miss: false }},
    {color: 'green', type: 'offense', face: {hearts: 1, surges: 1, range: 1, shields: 0, miss: false }},

    {color: 'gray', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 0, miss: false } },
    {color: 'gray', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 1, miss: false } },
    {color: 'gray', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 1, miss: false } },
    {color: 'gray', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 1, miss: false } },
    {color: 'gray', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 2, miss: false } },
    {color: 'gray', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 3, miss: false } },

    {color: 'black', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 0, miss: false } },
    {color: 'black', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 2, miss: false } },
    {color: 'black', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 2, miss: false } },
    {color: 'black', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 2, miss: false } },
    {color: 'black', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 3, miss: false } },
    {color: 'black', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 4, miss: false } },

    {color: 'brown', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 0, miss: false } },
    {color: 'brown', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 0, miss: false } },
    {color: 'brown', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 0, miss: false } },
    {color: 'brown', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 1, miss: false } },
    {color: 'brown', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 1, miss: false } },
    {color: 'brown', type: 'defense', face: {hearts: 0, surges: 0, range: 0, shields: 2, miss: false } },
    */
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
    case REROLL_DICE:
      var cloned = _.clone(state.selected);

      cloned[action.value] = roll(cloned[action.value]);

      return _.assign({}, state, {
        selected: cloned
      });
    case CLEAR_ALL_DICE:
      var cloned = _.clone(state.selected);

      $.each(cloned, function(i, item){
        var item = _.clone(cloned[i]);

        cloned[i] = _.assign({}, item, {
          face: null
        });
      });

      return _.assign({}, state, {
        selected: cloned
      });
    case CLEAR_DICE:
      var cloned = _.clone(state.selected);

      var item = _.clone(cloned[action.value]);

      cloned[action.value] = _.assign({}, item, {
        face: null
      });

      return _.assign({}, state, {
        selected: cloned
      });
    case CALC_TOTALS:
      return _.assign({}, state, {
        totals: calc(state.selected)
      });
    case CLEAR_TOTALS:
      return _.assign({}, state, {
        totals: null
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

  return output = _.assign({}, dice, {
    face: face
  });
}

function calc(data){
  let offense = false;
  let defense = false;
  let hearts = 0;
  let surges = 0;
  let range = 0;
  let shields = 0;
  let miss = false;

  $.each(data, function(i, item){
    if(item.face){
      if(item.type == 'offense'){
        offense = true;

        hearts += item.face.hearts;
        surges += item.face.surges;
        range += item.face.range;

        if(item.face.miss){
          miss = true;
        }
      }
      else if(item.type == 'defense'){
        defense = true;

        shields += item.face.shields;
      }
    }
  });

  return {
    offense: offense,
    defense: defense,
    hearts: hearts,
    surges: surges,
    range: range,
    shields: shields,
    miss: miss
  }
}