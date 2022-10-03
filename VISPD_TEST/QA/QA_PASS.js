/*Зайти на сайт
найти элемент на странице
взаимодействие с ним
взаимодействие с ним

найти элемент на странице
взаимодействие с ним

найти элемент на странице
взаимодействие с ним

Проверка*/

/*Описание автотеста*/
describe('Проверка логики восстановления пароля', function () {
	/*Название автотеста*/
   it('Проверка, что кнопка "забыли пароль" выполняет свою функцию', function () {
        /*Заходим на сайт*/
        cy.visit('https://login.qa.studio/');
        /*Находим элемент (id/selector) и взаимодействуем с ним*/
        cy.get ("#forgotEmailButton").click();
        cy.get ("#mailForgot").type('vis-denis-pichugin@qa.studio')
        cy.get ("#restoreEmailButton").click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get ('#exitMessageButton'). click();
    })
})
