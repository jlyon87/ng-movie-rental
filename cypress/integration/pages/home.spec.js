context('the home page', () => {
  const { login } = cy;
  before(() => {
    cy.intercept('**/movies', { fixture: 'movies-popular.json' });
    login();
    cy.visit('/home');
  });

  it('should display', () => {
    cy.get('h1').contains('Popular');
    cy.get('small').contains('Recently trending movies');
  });

  it('should have a sidebar and toolbar', () => {
    cy.get('mat-sidenav').should('not.be.visible');
    cy.get('mat-toolbar').contains('Movie Rental');
    cy.get('mat-icon').contains('menu').click();
    cy.get('mat-sidenav').should('be.visible');
    cy.get('mat-sidenav').contains('Menu');
    cy.get('mat-sidenav').contains('Home');
    cy.get('mat-sidenav').contains('My Account');
    cy.get('mat-sidenav').contains('Settings');
  });
});
