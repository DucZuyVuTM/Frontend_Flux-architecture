import { AppDispatcher } from '../dispatcher';

export const CounterActions = {
    increment(amount: number = 1) {
        AppDispatcher.dispatch({
            type: 'INCREMENT',
            payload: amount,
        });
    },

    decrement(amount: number = 1) {
        AppDispatcher.dispatch({
            type: 'DECREMENT',
            payload: amount,
        });
    },

    reset(amount: number = 0) {
        AppDispatcher.dispatch({
            type: 'RESET',
            payload: amount,
        });
    },
};
