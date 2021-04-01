let homePage = require('./homePage');
let linkPage = require('./linkPage');

describe('Yandex', function() {
	it('compare tabs yet', function() {
		
		browser.waitForAngularEnabled(false);
		homePage.get();
		
		homePage.clik();
		linkPage.setCity('Лондон');
		let a = homePage.getYet();
		
		browser.sleep(1000);
		homePage.clik();
		linkPage.setCity('Париж');
		let b = homePage.getYet();
		
		expect(a).toEqual(b);
		
	});
});