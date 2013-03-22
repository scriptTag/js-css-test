var Closure = {

	nameMaker: function() {
		var val = undefined; 
		return {
			set: function(newVal) { val = newVal; }, 
			get: function() { return val; }
		}
	}


}