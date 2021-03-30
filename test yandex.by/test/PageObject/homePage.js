let wait = require('./wait');

let homePage = function() {
let geoLink = element(by.css('.geolink__reg'));
let yet = element.all(by.css('.services-new__more-icons'));


this.openSite = function() {
	browser.waitForAngularEnabled(false);
	browser.get('http://www.yandex.by');
};

this.clickGeoLink = function() {
	wait.waitForElementPresent(200, 30000, geoLink);
	geoLink.click(); 
};

this.rememberContentsYet =  function () {
	return  yet.getText();
};

};

module.exports = new homePage ();



