const wait = require('../wait/wait');

let linkPage = function() {
let cityInput = element (by.id('city__front-input'));


this.setCity = function(name) {
	wait.waitForElementPresent(200, 30000, cityInput);
	cityInput.clear().sendKeys(name);
	browser.sleep(1000);
	cityInput.sendKeys(protractor.Key.ENTER); 
};


};

module.exports = new linkPage ();



