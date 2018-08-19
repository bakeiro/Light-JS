export class pubsub{

	constructor(){
		let subscribers = {};
	}
	
	sub(name, callback){
		if(! this.subscribers[name]){
			this.subscribers[name] = [callback];
		}else{
			this.subscribers[name].push(callback);
		}
	}

	pub(eventName, data){

		if(this.subscribers.eventName){
			this.subscribers.eventName.foreach(function (eventFunction){
				eventFunction(data);
			});
		}

	}

}