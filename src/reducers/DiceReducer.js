import {
  SELECT_DICE,
  REMOVE_DICE,
  ROLL_DICE,
  RESET_DICE,
  REROLL_DICE,
  CLEAR_ALL_DICE,
  CLEAR_DICE,
  CALC_TOTALS,
  CLEAR_TOTALS,
  SHOW_STATS_MOBILE,
  HIDE_STATS_MOBILE
} from '../actions/Dice/DiceActions';

import diceData from '../data/dice.json';

const initialState = {
  totals: null,
  showStatsMobile: false,
  stats: {
    offense: false,
    defense: false,
    hearts: {
      min: 0,
      max: 0,
      avg: 0
    },
    surges: {
      min: 0,
      max: 0,
      avg: 0
    },
    range: {
      min: 0,
      max: 0,
      avg: 0
    },
    shields: {
      min: 0,
      max: 0,
      avg: 0
    }
  },
  dice: diceData,
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
  ]
};

export function Dice(state = initialState, action = null) {
  switch (action.type) {
    case SELECT_DICE:
      var cloned = _.clone(state.selected);
      var dice = _.clone(state.dice[action.value]);

      cloned.push(dice);

      var stats = calcStats(cloned);

      return _.assign({}, state, {
        selected: cloned,
        stats: stats
      });
    case REMOVE_DICE:
      var cloned = _.clone(state.selected);
      cloned.splice(action.value, 1);

      var stats = calcStats(cloned);

      return _.assign({}, state, {
        selected: cloned,
        stats: stats
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
        totals: calcTotals(state.selected)
      });
    case CLEAR_TOTALS:
      return _.assign({}, state, {
        totals: null
      });
    case SHOW_STATS_MOBILE:
      return _.assign({}, state, {
        showStatsMobile: true
      });
    case HIDE_STATS_MOBILE:
      return _.assign({}, state, {
        showStatsMobile: false
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

function calcTotals(data){
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

function calcStats(data){
  const output = _.cloneDeep(initialState.stats);

  $.each(data, function(i, item){
    if(item.stats.hearts){
      output.hearts.min += item.stats.hearts.min;
      output.hearts.max += item.stats.hearts.max;
      output.hearts.avg += item.stats.hearts.avg;
    }

    if(item.stats.surges){
      output.surges.min += item.stats.surges.min;
      output.surges.max += item.stats.surges.max;
      output.surges.avg += item.stats.surges.avg;
    }

    if(item.stats.range){
      output.range.min += item.stats.range.min;
      output.range.max += item.stats.range.max;
      output.range.avg += item.stats.range.avg;
    }

    if(item.stats.shields){
      output.shields.min += item.stats.shields.min;
      output.shields.max += item.stats.shields.max;
      output.shields.avg += item.stats.shields.avg;
    }
  });

  return output;
}