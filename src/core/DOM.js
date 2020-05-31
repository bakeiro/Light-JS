/**
 * Class for manipulating the HTML three
 */
class DOM {
    
  /**
   * Adds the specified class into the specified HTML element
   * @param {HTMLElement} el Element to add the class
   * @param {string} className class name to add
   */
  static addClass (el, className) {
    el.classList.add(className);
  }

  /**
   * Removes the specified class into the specified HTML element
   * @param {HTMLElement} el Element to remove the class
   * @param {string} className class name to remove
   */
  static removeClass (el, className) {
    el.classList.remove(className);
  }

  /**
   * Toggle the specified class into the specified HTML element
   * @param {HTMLElement} el Element to toggle the class
   * @param {string} className class name to toggle
   */
  static toggleClass (el, className) {
    el.classList.toggle(className);
  }

  /**
   * Hides the given HTMLElement
   * @param {HTMLElement} el HTMLElement to hide
   */
  static hide (el) {
    el.style.display = "none";
  }

  /**
   * @param {HTMLElement} el HTMLElement to shows
   */
  static show (el) {
    el.style.display = "";
  }

  /**
   * Inserts HTML after and specified HTMLElement
   * @param {HTMLElement} target Dom element to insert content after
   * @param {string} html String html that contains the content to be inserted
   */
  static insertAfter (target, html) {
    target.insertAdjacentHTML("afterend", html);
  }

  /**
   * Insert HTML content just before the specified HTMLElement in the target parameter
   * @param {HTMLElement} target HTMLElement to insert HTML content just before
   * @param {string} html HTML string that contains the content to be inserted
   */
  static insertBefore (target, html) {
    target.insertAdjacentHTML("beforebegin", html);
  }

  /**
   * Appends and HTMLElement to the end of the target HTMLElement
   * @param {HTMLElement} target HTMLElement to add content at the end
   * @param {HTMLElement} element_to_add HTMLElement content to be inserted at then end of target parameter
   */
  static append (target, element_to_add) {
    target.appendChild(element_to_add);
  }

  /**
   * Prepends an element_to_add param to the beginning of target HTMLElement
   * @param {HTMLElement} target HTMLElement to add something at the beginning
   * @param {HTMLElement} element_to_add HTMLElement to be added
   */
  static prepend (target, element_to_add) {
    target.insertBefore(element_to_add, target.firstChild);
  }

  /**
   * Removes an el param from the DOM
   * @param {HTMLElement} el HTMLElement to be removed
   */
  static remove (el) {
    el.parentNode.removeChild(el);
  }
}

export default DOM;