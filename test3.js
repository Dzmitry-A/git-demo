let search = element(by.id('orb-search-q'));
let button = element(by.id('orb-search-button'));


describe('Protractor Test', function() {
	it('search for news about Belarus', function() {
		
		browser.waitForAngularEnabled(false);
		browser.get('http://www.bbc.com');
		
		for (let i = 0; i < 500; i++) {
			browser.sleep(200);
			if (search.isPresent()) {
			break;
			}
		}
		
		search.sendKeys('Belarus');
		
		for (let j = 0; j < 500; j++) {
			browser.sleep(200);
			if (button.isDisplayed()) {
			break;
			}
		}
		
		button.click();
		
	});
});