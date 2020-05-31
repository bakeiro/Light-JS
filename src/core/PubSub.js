
/**
 * Publish subscribe pattern class, class used for
 * implementing this behaviour pattern
 */
class PubSub {
  constructor () {
    this.subscribers = {};
  }

  sub (name, callback) {
    if (!this.subscribers[name]) {
      this.subscribers[name] = [callback];
    } else {
      this.subscribers[name].push(callback);
    }
  }

  pub (eventName, data) {
    if (this.subscribers[eventName]) {
      this.subscribers[eventName].forEach((eventFunction) => {
        eventFunction(data);
      });
    }
  }
}

export { PubSub };
