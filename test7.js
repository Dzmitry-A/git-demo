let geoLink = element(by.css('.geolink__reg'));
let city = element (by.id('city__front-input'));

function Error(message) {
			this.message = message;
			this.name = "Исключение, определенное пользователем";
} 

async function waitForElementPresent(intervalRequest, timeOut, elementObject) {
			
			let result = false;
			let step = timeOut / intervalRequest;	
			
			for (let i = 0; i < step; i++) {
				
			if (await elementObject.isPresent()) {
				result = true;
				break;
			}
			browser.sleep(intervalRequest);
			}
			console.log(result);	
			try {
			if (!result)  {
			throw new Error ('Ошибка: Элемент не найден');
			}				
			}
			catch {
				console.log('ERROR');
			}
		
		}

describe('Protractor Test', function() {
	it('search for news about Belarus', function() {
		
		browser.waitForAngularEnabled(false);
		browser.get('http://www.yandex.by');
				
		waitForElementPresent(200, 30000, geoLink);
		geoLink.click();
		
		waitForElementPresent(200, 30000, city);
		city.clear().sendKeys('Лондон');
		browser.sleep(1000);
		city.sendKeys(protractor.Key.ENTER);
		
		browser.sleep(1000);
		let a = element.all(by.css('.services-new__more-icons')).last().getText();
		
		waitForElementPresent(200, 30000, geoLink);
		geoLink.click();
		
		waitForElementPresent(200, 30000, city);
		city.clear().sendKeys('Париж');
		browser.sleep(1000);
		city.sendKeys(protractor.Key.ENTER);

		browser.sleep(1000);
		let b = element.all(by.css('.services-new__more-icons')).last().getText();
		
		expect(a).toEqual(b);
		
	});
});