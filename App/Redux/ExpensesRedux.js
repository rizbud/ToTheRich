import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  storeExpenses: ['data'],
});

export const ExpensesTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  expenses: [],
});

/* ------------- Reducers ------------- */

export const storeExpenses = (state, {data}) =>
  state.merge({
    ...state,
    expenses: [data, ...state.expenses],
  });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STORE_EXPENSES]: storeExpenses,
});
