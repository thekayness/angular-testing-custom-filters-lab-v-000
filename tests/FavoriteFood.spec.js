describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('filters on food item properly', function() {
		var mockedList = [{
           name: 'Sam',
           favoriteFood: 'pizza' 
       		}, {
           name: 'Richard',
           favoriteFood: 'noodles' 
       		}, {
           name: 'Pam',
           favoriteFood: 'cauliflower' 
       	}];

       	var results = $filter('favoriteFood')(mockedList, 'noodles');
       	expect(results.length).toBe(1);
       	console.log(results);
       	expect(results[0].name).toEqual('Richard');
	});

	
});
