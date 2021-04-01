const wait = require('../wait/wait');

let homePage = function() {
let geoLink = element(by.css('.geolink__reg'));
let more = element.all(by.css('.services-new__more-icons'));


this.openSite = function() {
	browser.waitForAngularEnabled(false);
	browser.get('http://www.yandex.by');
};

this.clickGeoLink = function() {
	wait.waitForElementPresent(200, 30000, geoLink);
	geoLink.click(); 
};

this.rememberContentsMore =  function () {
	return  more.getText();
};

};

module.exports = new homePage ();



