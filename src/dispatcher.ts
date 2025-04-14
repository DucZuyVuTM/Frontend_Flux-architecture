interface Action {
    type: string;
    payload?: any;
}
  
class Dispatcher {
    private callbacks: ((action: Action) => void)[] = [];
  
    register(callback: (action: Action) => void) {
        this.callbacks.push(callback);
    }
  
    dispatch(action: Action) {
        this.callbacks.forEach((callback) => callback(action));
    }
}
  
export const AppDispatcher = new Dispatcher();
