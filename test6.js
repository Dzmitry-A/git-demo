let search = element(by.id('orb-search-q'));
let err = element (by.id('orb-search-p'));
let button = element(by.id('orb-search-button'));

function Error(message) {
			this.message = message;
			this.name = "Исключение, определенное пользователем";
} 

async function waitForElementDisplayed(intervalRequest, timeOut, elementObject) {
			
			let result;
			let step = timeOut / intervalRequest;	
			try {
			for (let i = 0; i < step; i++) {
				
			if (await elementObject.isDisplayed()) {
				result = true;
				break;
			} else {
				result = false;
			}
			browser.sleep(intervalRequest);
			}
			}
			catch (NoSuchElementException)  {
				console.log (`Element ${elementObject} not found the DOM`);
			}
			console.log(result);	
		try {
			if (result = false)  {
			throw new Error ('Ошибка: Элемент есть в DOMe но не отобразился');
					
			}
		}
		catch {
			console.log('Ошибка: Элемент есть в DOMe но не отобразился');
		}
		}

describe('Protractor Test', function() {
	it('search for news about Belarus', function() {
		
		browser.waitForAngularEnabled(false);
		browser.get('http://www.bbc.com');
				
		waitForElementDisplayed(200, 30000, search);
		search.sendKeys('Belarus');
		
		waitForElementDisplayed(200, 30000, button);
		button.click();
		
		waitForElementDisplayed(200, 30000, err);
	
		
	});
});