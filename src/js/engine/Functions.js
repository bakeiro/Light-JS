/**
 * Static class, it contains general use functions
 * 
 * base64encode
 * base64decode
 * 
 * parseURLParams
 * getDomain
 * 
 * isNumeric
 * numberFormat
 * 
 * message
 * 
 * fadeIn
 * fadeOut
 * hide
 * show
 * 
 * insertAfter
 * insertBefore
 * remove
 */
class Functions {
  /**
   * Encode in base 64 (like PHP function)
   * @param {mix} str value to encode
   */
  static base64encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  /**
   * Decodes the base64 encoded content
   * @param {mix} str Decodes the already coded content
   */
  static base64decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  /**
   * Parses an URL given in the url param, and return all the GET variables inside the URL
   * @param {string} url Url to parse
   */
  static parseURLParams(url) {
    let queryStart = url.indexOf("?") + 1;
    let queryEnd = url.indexOf("#") + 1 || url.length + 1;
    let query = url.slice(queryStart, queryEnd - 1);
    let pairs = query.replace(/\+/g, " ").split("&");
    let parms = {}; let i; let n; let v; let
      nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
      nv = pairs[i].split("=", 2);
      n = decodeURIComponent(nv[0]);
      v = decodeURIComponent(nv[1]);

      if (!parms.hasOwnProperty(n)) parms[n] = [];
      parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
  }

  /**
   * Get current domain
   */
  static getDomain() {
    return `${window.location.protocol}//${window.location.host}/`;
  }

  /**
   * Checks if the given value in the value param it's an number
   * @param {mix} value value to check if it's an number
   */
  static isNumeric(value) {
    return !isNaN(value - parseFloat(value));
  }

  /**
   * Formats the given number to show it properly formatted, depending the used parameters, it's a JS copy
   * of the PHP function `number_format`
   * @param {int|float|string} number number to parse
   * @param {int} decimals decimals to show
   * @param {string} decPoint how to represent a decimal separator
   * @param {string} thousandsSep how to show the thousand separator
   */
  static numberFormat(number, decimals, decPoint, thousandsSep) {
    number = (`${number}`).replace(/[^0-9+\-Ee.]/g, "");
    let n = !isFinite(+number) ? 0 : +number;
    let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    let sep = (typeof thousandsSep === "undefined") ? "," : thousandsSep;
    let dec = (typeof decPoint === "undefined") ? "." : decPoint;
    let s = "";

    let toFixedFix = (n, prec) => {
      let k = Math.pow(10, prec);
      return `${(Math.round(n * k) / k).toFixed(prec)}`;
    };

    s = (prec ? toFixedFix(n, prec) : `${Math.round(n)}`).split(".");
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }

    return s.join(dec);
  }

  /**
   * Shows a message, after the body tag, that disappear after
   * @param {string} message Message to show
   * @param {int} seconds Number of milliseconds that the message is keep
   */
  static message(message, milliseconds = 0, speed = "normal") {
    let html = "";
    html = `<div class='message'>${message}</div>`;

    let container = d.$("body");
    container.innerHTML = html + container.innerHTML;

    // Show
    let message_div = d.$("div.message");
    // message_div.style.border = "11";
    message_div.style.borderRadius = "0.25rem";
    message_div.style.marginBottom = "1rem";
    message_div.style.padding = "0.75rem 1.25rem";
    
    this.fadeIn(message_div, speed);

    // Hide + remove
    if (milliseconds !== 0) {
      setTimeout(() => {
        this.fadeOut(message_div, speed);
      }, milliseconds);
    }
  }

  /**
   * Appear a hidden element doing an animation
   * @param {HTMLElement} el DOM element to restore
   */
  static fadeIn(el, speed = "normal", display = "block") {
    el.style.opacity = 0;
    el.style.display = display;

    let speed_num = 0.05;
    if (speed === "fast") {
      speed_num = 0.1;
    }
    if (speed === "slow") {
      speed_num = 0.025;
    }

    let fade = () => {
      let temp_val = parseFloat(el.style.opacity);
      let comp_val = (temp_val += speed_num);
      if (!(comp_val > 1)) {
        el.style.opacity = temp_val;
        requestAnimationFrame(fade);
      }
    };
    fade();
  }

  /**
   * Hides an HTMLElement doing an animation
   * @param {HTMLElement} el HTMLElement to make it disappear
   */
  static fadeOut(el, speed = "normal") {
    el.style.opacity = 1;

    let speed_num = 0.05;
    if (speed === "fast") {
      speed_num = 0.1;
    }
    if (speed === "slow") {
      speed_num = 0.025;
    }

    let fade = () => {
      let temp_opacity = (el.style.opacity -= speed_num);
      if (temp_opacity < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    };

    fade();
  }

  /**
   * Adds the specified class into the specified HTML element
   * @param {HTMLElement} el Element to add the class
   * @param {string} className class name to add
   */
  static addClass(el, className) {
    el.classList.add(className);
  }

  /**
   * Removes the specified class into the specified HTML element
   * @param {HTMLElement} el Element to remove the class
   * @param {string} className class name to remove
   */
  static removeClass(el, className) {
    el.classList.remove(className);
  }

  /**
   * Toggle the specified class into the specified HTML element
   * @param {HTMLElement} el Element to toggle the class
   * @param {string} className class name to toggle
   */
  static toggleClass(el, className) {
    el.classList.toggle(className);
  }

  /**
   * Hides the given HTMLElement
   * @param {HTMLElement} el HTMLElement to hide
   */
  static hide(el) {
    el.style.display = "none";
  }

  /**
   * @param {HTMLElement} el HTMLElement to shows
   */
  static show(el) {
    el.style.display = "";
  }

  // HTML
  static insertAfter(target, html) {
    target.insertAdjacentHTML("afterend", html);
  }

  static insertBefore(target, html) {
    target.insertAdjacentHTML("beforebegin", html);
  }

  static append(target, element_to_add) {
    target.appendChild(element_to_add);
  }

  static prepend(target, element_to_add) {
    target.insertBefore(element_to_add, target.firstChild);
  }

  static remove(el) {
    el.parentNode.removeChild(el);
  }
}

export { Functions };
