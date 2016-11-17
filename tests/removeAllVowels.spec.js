describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all the vowels', function() {
		var results = $filter('removeAllVowels')('caterpillar');
		expect(results).toEqual('ctrpllr');
	});

});
