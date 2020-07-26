/**
 * Publish subscribe pattern class, class used for
 * implementing this behaviour pattern
 */
static class PubSub {
  constructor () {
    this.subscribers = {};
  }

  static sub (name, callback) {
    if (!this.subscribers[name]) {
      this.subscribers[name] = [callback];
    } else {
      this.subscribers[name].push(callback);
    }
  }

  static pub (eventName, data) {
    if (this.subscribers[eventName]) {
      this.subscribers[eventName].forEach((eventFunction) => {
        eventFunction(data);
      });
    }
  }
}

export { PubSub };
