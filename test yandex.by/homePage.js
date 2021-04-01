let wait = require('./wait');

let homePage = function() {
let geoLink = element(by.css('.geolink__reg'));

this.get = function() {
	browser.get('http://www.yandex.by');
};

this.clik = function() {
	wait.waitForElementPresent(200, 30000, geoLink);
	geoLink.click(); 
};

this.getYet = async function () {
	let a = element.all(await by.css('.services-new__more-icons')).last().getText();
	return a;
};

};

module.exports = new homePage ();



