export const SELECT_DICE = 'SELECT_DICE';
export const REMOVE_DICE = 'REMOVE_DICE';
export const ROLL_DICE = 'ROLL_DICE';
export const RESET_DICE = 'RESET_DICE';

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
  return {
    type: ROLL_DICE
  }
}

export function resetDice(){
  return{
    type: RESET_DICE
  }
}