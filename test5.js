let search = element(by.id('orb-search-q'));
let err = element (by.id('orb-search-p'));
let button = element(by.id('orb-search-button'));

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
		browser.get('http://www.bbc.com');
				
		waitForElementPresent(200, 30000, search);
		search.sendKeys('Belarus');
		
		waitForElementPresent(200, 30000, button);
		button.click();
		
		waitForElementPresent(200, 30000, err);
	
		
	});
});