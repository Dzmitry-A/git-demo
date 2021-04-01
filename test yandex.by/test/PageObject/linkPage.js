let wait = require('./wait');

let linkPage = function() {
let city = element (by.id('city__front-input'));


this.setCity = function(name) {
	wait.waitForElementPresent(200, 30000, city);
	city.clear().sendKeys(name);
	browser.sleep(1000);
	city.sendKeys(protractor.Key.ENTER); 
};


};

module.exports = new linkPage ();



