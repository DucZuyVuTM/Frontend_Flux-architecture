import { AppDispatcher } from '../dispatcher';

class CounterStore {
    private count: number = 0;
    private callbacks: (() => void)[] = [];

    constructor() {
        AppDispatcher.register(this.handleAction.bind(this));
    }

    private handleAction(action: { type: string; payload?: number }) {
        switch (action.type) {
        case 'INCREMENT':
            this.count += action.payload || 1;
            this.notifyChange();
            break;
        case 'DECREMENT':
            this.count -= action.payload || 1;
            this.notifyChange();
            break;
        case 'RESET':
            this.count = 0;
            this.notifyChange();
            break;
        }
    }

    getCount(): number {
        return this.count;
    }

    addChangeListener(callback: () => void) {
        this.callbacks.push(callback);
    }

    removeChangeListener(callback: () => void) {
        this.callbacks = this.callbacks.filter((cb) => cb !== callback);
    }

    private notifyChange() {
        this.callbacks.forEach((callback) => callback());
    }
}

export const counterStore = new CounterStore();
