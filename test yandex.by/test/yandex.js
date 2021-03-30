let homePage = require('./PageObject/homePage');
let linkPage = require('./PageObject/linkPage');

describe('Yandex', function() {
	it('compare tabs yet', function() {
		
		homePage.openSite();
		
		homePage.clickGeoLink();
		linkPage.setCity('Лондон');
		let a = homePage.rememberContentsYet();
		
		browser.sleep(1000);
		homePage.clickGeoLink();
		linkPage.setCity('Париж');
		let b = homePage.rememberContentsYet();
		
		expect(a).toEqual(b);
		
	});
});