
/**
 * Class containing the animation methods
 */
class Animations {

    /**
     * Makes the element appear doing an animation in a certain given time
     * @param {*} element 
     * @param {*} time 
     * @param {*} callback 
     */
    static fadeIn(element, time = 500, callback = () => { }) {

        element.style.opacity = 0;
        element.style.display = "inherit";
        element.style["transition"] = "opacity " + time + "ms linear";

        setInterval( () => {
            element.style.opacity = 1;
            element.addEventListener("transitionend", callback, false);
        }, 10);
    }

    /**
     * Make the @param element, disappear doing an animation
     * @param {*} element 
     * @param {*} time 
     * @param {*} hide 
     * @param {*} callback 
     */
    static fadeOut(element, time = 500, hide = false, callback = () => {}) {

        element.style.opacity = 1;
        element.style["transition"] = "opacity " + time + "ms linear";
        element.style.opacity = 0;
        let displayValue = (hide === true) ? "none" : "inherit";

        element.addEventListener("transitionend", callback, false);
        
    }

   /**
     * toggleFade, toggle fade an passed element
     * @param {*} elem 
     * @param {*} time 
     * @param {*} hide 
     * @param {*} callback 
     */
    static toggleFade(elem, time, hide, callback) {
        debugger;
        if (window.getComputedStyle(elem).opacity === "0") {
            return this.fadeIn(elem, time, callback);
        } else {
            return this.fadeOut(elem, time, hide, callback);
        }
    }

   /**
    * SlideUp
    *
    * @param {HTMLElement} element
    * @param {Number} duration
    * @returns {Promise<boolean>}
    */
    static slideUp(element, duration = 500) {

        return new Promise(function (resolve, reject) {

            element.style.height = element.offsetHeight + 'px';
            element.style.transitionProperty = `height, margin, padding`;
            element.style.transitionDuration = duration + 'ms';
            element.offsetHeight;
            element.style.overflow = 'hidden';
            element.style.height = 0;
            element.style.paddingTop = 0;
            element.style.paddingBottom = 0;
            element.style.marginTop = 0;
            element.style.marginBottom = 0;
            window.setTimeout(function () {
                element.style.display = 'none';
                element.style.removeProperty('height');
                element.style.removeProperty('padding-top');
                element.style.removeProperty('padding-bottom');
                element.style.removeProperty('margin-top');
                element.style.removeProperty('margin-bottom');
                element.style.removeProperty('overflow');
                element.style.removeProperty('transition-duration');
                element.style.removeProperty('transition-property');
                resolve(false);
            }, duration)
        });
    }

   /**
    * SlideDown
    *
    * @param {HTMLElement} element
    * @param {Number} duration
    * @returns {Promise<boolean>}
    */
    static slideDown(element, duration = 500) {

        return new Promise(function (resolve, reject) {

            element.style.removeProperty('display');
            let display = window.getComputedStyle(element).display;

            if (display === 'none')
                display = 'block';

            element.style.display = display;
            let height = element.offsetHeight;
            element.style.overflow = 'hidden';
            element.style.height = 0;
            element.style.paddingTop = 0;
            element.style.paddingBottom = 0;
            element.style.marginTop = 0;
            element.style.marginBottom = 0;
            element.offsetHeight;
            element.style.transitionProperty = `height, margin, padding`;
            element.style.transitionDuration = duration + 'ms';
            element.style.height = height + 'px';
            element.style.removeProperty('padding-top');
            element.style.removeProperty('padding-bottom');
            element.style.removeProperty('margin-top');
            element.style.removeProperty('margin-bottom');
            window.setTimeout(function () {
                element.style.removeProperty('height');
                element.style.removeProperty('overflow');
                element.style.removeProperty('transition-duration');
                element.style.removeProperty('transition-property');
            }, duration)
        });
    }

   /**
    * SlideToggle
    *
    * @param {HTMLElement} element
    * @param {Number} duration
    * @returns {Promise<boolean>}
    */
    static slideToggle(element, duration = 500) {
        if (window.getComputedStyle(element).display === 'none') {
            return this.slideDown(element, duration);
        } else {
            return this.slideUp(element, duration);
        }
    }
}

export default Animations;
