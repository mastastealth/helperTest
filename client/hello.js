// This doesn't work
Template.hello.helpers = ({
	helloWorld: function() {
		return "HELLO WORLD";
	}
});

// This does
// Template.hello.helloWorld = function () {
	// return "HELLO WORLD";
// };