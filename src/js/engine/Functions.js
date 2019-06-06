class Functions {
  // General use
  static base64encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  static base64decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  static parseURLParams(url) {
    const queryStart = url.indexOf('?') + 1;
    let queryEnd = url.indexOf('#') + 1 || url.length + 1;
    let query = url.slice(queryStart, queryEnd - 1);
    let pairs = query.replace(/\+/g, ' ').split('&');
    let parms = {}; let i; let n; let v; let
      nv;

    if (query === url || query === '') return;

    for (i = 0; i < pairs.length; i++) {
      nv = pairs[i].split('=', 2);
      n = decodeURIComponent(nv[0]);
      v = decodeURIComponent(nv[1]);

      if (!parms.hasOwnProperty(n)) parms[n] = [];
      parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
  }

  static getDomain() {
    return `${window.location.protocol}//${window.location.host}/`;
  }

  static onExitFunction(message = 'Are you sure you want to quit?') {
    if (app.config.alert_exit) {
      return message;
    }
  }

  static confirmMessage(message = 'Are you sure you want to quit?') {
    if (app.config.alert_exit) {
      return confirm(message);
    }
    return true;
  }

  // Numbers
  static isNumeric(value) {
    return !isNaN(value - parseFloat(value));
  }

  static number_format(number, decimals, decPoint, thousandsSep) {
    number = (`${number }`).replace(/[^0-9+\-Ee.]/g, '');
    const n = !isFinite(+number) ? 0 : +number;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
    const dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
    let s = '';

    const toFixedFix = function (n, prec) {
      const k = Math.pow(10, prec);
      return `${  (Math.round(n * k) / k).toFixed(prec)}`;
    };

    s = (prec ? toFixedFix(n, prec) : `${  Math.round(n)}`).split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }

    return s.join(dec);
  }

  // UI/effects
  static message(message) {
    let html = '';
    html = `<div class='message'>${message}</div>`;

    const container = d.$('body');
    container.innerHTML = html + container.innerHTML;

    // Show
    const message_div = d.$('div.message');
    this.fadeIn(message_div);

    // Hide + remove
    setTimeout(() => {
      this.fadeOut(message_div, true);
    }, 2000);
  }

  static fadeIn(el) {
    el.style.opacity = 0;

    let tick = () => {
      el.style.opacity = parseFloat(el.style.opacity) + 0.03;

      if (el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };

    tick();
  }

  static fadeOut(el, remove = false) {
    el.style.opacity = 1;

    let tick = () => {
      el.style.opacity = parseFloat(el.style.opacity) - 0.03;
      if (el.style.opacity > 0) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      } else { 
        if (remove) {
          this.removeElement(el);
        }
      }
    };

    tick();
  }

  static hide(el) {
    el.style.display = 'none';
  }

  static show(el) {
    el.style.display = '';
  }

  // HTML
  static insertAfter(target, html) {
    target.insertAdjacentHTML('afterend', html);
  }

  static insertBefore(target, html) {
    target.insertAdjacentHTML('beforebegin', html);
  }

  static removeElement(el) {
    el.parentNode.removeChild(el);
  }
}

export { Functions };
