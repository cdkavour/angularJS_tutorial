//	first module

var angular = require('angular');

var app = angular.module('store', []);

app.controller('StoreController', function(){
	this.product = gem;
});

var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: '12 sides',
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: '5 sides',
		canPurchase: true,
		soldOut: false
	}
];
