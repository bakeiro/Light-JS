export class functions{

	base64encode(str){
		return window.btoa(unescape(encodeURIComponent(str)));
	}

	base64decode(str){
		return decodeURIComponent(escape(window.atob(str)));
	}

	message(message, type = "normal"){

		let html = "";
		html = `<div class='message'>${message}</div>`;
		
		let container = d.$("body");
		container.innerHTML = html + container.innerHTML;

		//Show
		let message_div = d.$("div.message");
		this.fadeIn(message_div);
	}

	fadeIn(el) {

		el.style.opacity = 0;
	  
		var last = +new Date();
		var tick = function() {

			el.style.opacity = +el.style.opacity + (new Date() - last) / 600;
			last = +new Date();
	  
			if (+el.style.opacity < 1) {
				(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
		  	}
		};
	  
		tick();
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

	deleteSpacesAtEndAndBeginning(value){

		if(value !== "" && value !== " " && typeof value === "string"){
			
			var i = 0;
			var len = value.length;

			//Spaces at the begining
			for(i; i < len; i++){
				if(value[i] === " "){
					if(i === 0){
						value = value.substr(1);
						len = value.length;
						i = -1;
					}
				}
			}

			//Spaces at the end
			i = value.length;

			for(i; i >= 0; i--){
				if(value[i-1] === " "){
					if(i === value.length){
						value = value.substr(0, (i - 1));
						i = value.length + 1;
					}else{
						break;
					}
				}
			}
		}       

		return value;
	}

	getDomain(){
		return `${window.location.protocol}//${window.location.host}/`;
	}

}