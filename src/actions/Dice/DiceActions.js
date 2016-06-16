export const SELECT_DICE = 'SELECT_DICE';
export const REMOVE_DICE = 'REMOVE_DICE';
export const ROLL_DICE = 'ROLL_DICE';
export const RESET_DICE = 'RESET_DICE';
export const REROLL_DICE = 'REROLL_DICE';
export const CLEAR_ALL_DICE = 'CLEAR_ALL_DICE';
export const CLEAR_DICE = 'CLEAR_DICE';
export const CALC_TOTALS = 'CALC_TOTALS';
export const CLEAR_TOTALS = 'CLEAR_TOTALS';

export function selectDice(color){
  return {
    type: SELECT_DICE,
    value: {color: color}
  };
}

export function removeDice(index){
  return {
    type: REMOVE_DICE,
    value: index
  };
}

export function rollDice(){
  playDiceRollSound();
  return {
    type: ROLL_DICE
  }
}

export function resetDice(){
  return{
    type: RESET_DICE
  }
}

export function rerollDice(index){
  playDiceRollSound();
  return{
    type: REROLL_DICE,
    value: index
  }
}

export function clearAllDice(){
  return {
    type: CLEAR_ALL_DICE
  }
}

export function clearDice(index){
  return {
    type: CLEAR_DICE,
    value: index
  }
}

export function calcTotals(){
  return {
    type: CALC_TOTALS
  }
}

export function clearTotals(){
  return {
    type: CLEAR_TOTALS
  }
}

function playDiceRollSound(){
  const audio = $('#audioDiceRoll')[0];
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}