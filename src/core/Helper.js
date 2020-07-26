/**
 * base64encode
 * base64decode
 * parseURLParams
 * getDomain
 * isNumeric
 * numberFormat
 * message
 */
class Helper {
  /**
   * Encode in base 64 (like PHP function)
   * @param {mix} str value to encode
   */
  static base64encode (str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  /**
   * Decodes the base64 encoded content
   * @param {mix} str Decodes the already coded content
   */
  static base64decode (str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  /**
   * Parses an URL given in the url param, and return all the GET variables inside the URL
   * @param {string} url Url to parse
   */
  static parseURLParams (url) {
    const queryStart = url.indexOf("?") + 1;
    const queryEnd = url.indexOf("#") + 1 || url.length + 1;
    const query = url.slice(queryStart, queryEnd - 1);
    const pairs = query.replace(/\+/g, " ").split("&");
    const parms = {}; let i; let n; let v;
    let nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
      nv = pairs[i].split("=", 2);
      n = decodeURIComponent(nv[0]);
      v = decodeURIComponent(nv[1]);

      if (!Object.prototype.hasOwnProperty.call(parms, n)) {
        parms[n] = [];
      }

      if (nv.length === 2) {
        parms[n].push(v);
      } else {
        parms[n].push(null);
      }
    }

    return parms;
  }

  /**
   * Get current domain
   */
  static getDomain () {
    return `${window.location.protocol}//${window.location.host}/`;
  }

  /**
   * Checks if the given value in the value param it's an number
   * @param {mix} value value to check if it's an number
   */
  static isNumeric (value) {
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
  static numberFormat (number, decimals, decPoint, thousandsSep) {
    number = (`${number}`).replace(/[^0-9+\-Ee.]/g, "");
    const n = !isFinite(+number) ? 0 : +number;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = (typeof thousandsSep === "undefined") ? "," : thousandsSep;
    const dec = (typeof decPoint === "undefined") ? "." : decPoint;
    let s = "";

    const toFixedFix = (n, prec) => {
      const k = Math.pow(10, prec);
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
  static message (message, milliseconds = 0, speed = "normal") {
    let html = "";
    html = `<div class='message'>${message}</div>`;

    const container = d.$("body");
    container.innerHTML = html + container.innerHTML;

    // Show
    const message_div = d.$("div.message");
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
}

export default Helper;
