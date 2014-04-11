describe('Application home page', function() {
    it('should display the application title', function() {
        browser.get('http://localhost:8080');

        expect(element(by.css('.navbar-brand')).getText()).toEqual('Electronic Shopping List');
    });
});