export class functions{

	//General use
	base64encode(str){
		return window.btoa(unescape(encodeURIComponent(str)));
	}

	base64decode(str){
		return decodeURIComponent(escape(window.atob(str)));
	}

	parseURLParams(url) {
		var queryStart = url.indexOf("?") + 1,
			queryEnd   = url.indexOf("#") + 1 || url.length + 1,
			query = url.slice(queryStart, queryEnd - 1),
			pairs = query.replace(/\+/g, " ").split("&"),
			parms = {}, i, n, v, nv;
	
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

	getDomain(){
		return `${window.location.protocol}//${window.location.host}/`;
	}

	onExitFunction(message = "Are you sure you want to quit?"){
		if(app.config.alert_exit){
			return message;
		}
	}

	confirmMessage(message = "Are you sure you want to quit?"){
		if(app.config.alert_exit){
			return confirm(message);
		}else{
			return true;
		}
	}

	//Numbers
	isNumeric(value){
		return !isNaN(value - parseFloat(value));
	}
	
	number_format(number, decimals, decPoint, thousandsSep) {
	
		number = (number + "").replace(/[^0-9+\-Ee.]/g, "");
		var n = !isFinite(+number) ? 0 : +number;
		var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
		var sep = (typeof thousandsSep === "undefined") ? "," : thousandsSep;
		var dec = (typeof decPoint === "undefined") ? "." : decPoint;
		var s = "";
	
		var toFixedFix = function (n, prec) {
			var k = Math.pow(10, prec);
			return "" + (Math.round(n * k) / k).toFixed(prec);
		};
	
		s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
		if (s[0].length > 3) {
			s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
		}
		if ((s[1] || "").length < prec) {
			s[1] = s[1] || "";
			s[1] += new Array(prec - s[1].length + 1).join("0");
		}
	
		return s.join(dec);
	}

	//UI/effects
	message(message){

		let html = "";
		html = `<div class='message'>${message}</div>`;
		
		let container = d.$("body");
		container.innerHTML = html + container.innerHTML;

		//Show
		let message_div = d.$("div.message");
		this.fadeIn(message_div);

		//Hide + remove
		setTimeout( ()=>{
			this.fadeOut(message_div, true);
		}, 2000);
	}

	fadeIn(el){

		el.style.opacity = 0;

		var tick = function() {

			el.style.opacity = parseFloat(el.style.opacity) + 0.03;

			if (el.style.opacity < 1) {
				(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
			}
			
		};
	  
		tick();
	}

	fadeOut(el, remove = false){

		el.style.opacity = 1;
	  
		var tick = () => {
			el.style.opacity = parseFloat(el.style.opacity) - 0.03;	  
			if (el.style.opacity > 0) {
				(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
			}else{
				if(remove){
					this.removeElement(el);
				}
			}	  
		};
	  
		tick();
	}

	hide(el){
		el.style.display = "none";
	}

	show(el){
		el.style.display = "";
	}

	//HTML
	insertAfter(target, html){
		target.insertAdjacentHTML("afterend", html);
	}

	insertBefore(target, html){
		target.insertAdjacentHTML("beforebegin", html);
	}

	removeElement(el){
		el.parentNode.removeChild(el);
	}

}