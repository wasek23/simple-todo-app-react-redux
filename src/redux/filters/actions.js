import { STATUS_CHANGED, PRIORITY_CHANGED } from './actionTypes';

export const statusChanged = status => ({ type: STATUS_CHANGED, payload: { status } });
export const priorityChanged = (priority, changeType) => ({ type: PRIORITY_CHANGED, payload: { priority, changeType } });