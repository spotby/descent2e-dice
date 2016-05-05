export const SELECT_DICE = 'SELECT_DICE';
export const REMOVE_DICE = 'REMOVE_DICE';
export const CLEAR_DICE = 'CLEAR_DICE';

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