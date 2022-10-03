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
describe('Проверка работы авторизации', function () {
	/*Название автотеста*/
   it('Staya форма логина и пароля', function () {
        /*Заходим на сайт*/
        cy.visit('https://staya.dog/');
        /*Находим элемент (id/selector) и взаимодействуем с ним*/
        cy.get ("#stickyHeader > section.header-bottom.transition-header > div > div > a").click();
        cy.get ("#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)").type('vis-denis-pichugin@qa.studio');
        cy.get ("#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)").type('TYD-rb7-5vs-6Qu');
        cy.get ('#__layout > div > main > div > div > div > section > div > form > button'). click();
        cy.contains('Мои заказы');
    })
})