describe('Проверка, что сайт содержит слово "интеграция"', function () {
   it('Автотест Cypress', function () {
        cy.visit('https://itimus.ru/');
        cy.contains('интеграция');
    })
})