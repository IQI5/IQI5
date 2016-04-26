var eventUtil = {
	delegate: function(ele, trgClass, eventType, listener) {
		ele.addEventListener(eventType, function(evt){
			evt.preventDefault();	
			var e = evt || window.event;
			var trg = e.target || e.srcElement;
			if(trg.className === trgClass) {
				listener(e);
			}
		});
	},

}