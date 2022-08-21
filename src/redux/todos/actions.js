import { ADDED, TOGGLED, PRIORITY_SELECTED, DELETED, ALL_COMPLETED, CLEAR_COMPLETED } from './actionTypes';

export const added = text => ({ type: ADDED, payload: { text } });
export const toggled = id => ({ type: TOGGLED, payload: { id } });
export const prioritySelected = (id, priorityType) => ({ type: PRIORITY_SELECTED, payload: { id, priorityType } });
export const deleted = id => ({ type: DELETED, payload: { id } });
export const allCompleted = () => ({ type: ALL_COMPLETED });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });