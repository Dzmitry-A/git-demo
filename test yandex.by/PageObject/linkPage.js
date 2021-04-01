const wait = require('../wait/wait');

let linkPage = function() {
let cityInput = element (by.id('city__front-input'));


this.setCity = function (name) {
	
	
	wait.waitForElementPresent(200, 30000, cityInput);
	cityInput.clear().sendKeys(name);
	let pop_upList = element(by.cssContainingText('.b-autocomplete-item__reg', name));
	browser.wait(protractor.ExpectedConditions.presenceOf(pop_upList), 1000);
	pop_upList.click();

	
	};


};

module.exports = new linkPage ();



