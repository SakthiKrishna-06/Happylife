Cypress.Commands.add('LoginEmployee', () => {
    cy.visit('https://vizzainsurance.com/policy-login');
    cy.fillInput("#mat-input-0", "6382228561")
    cy.fillInput("#mat-input-1","Sakthi@1602")
    cy.get('[fxlayoutalign="center center"] > .col-md-6 > .mat-focus-indicator').click();
    cy.wait(3000);
    cy.get('#horizontal-menu-item-2 > .mat-button-wrapper').click();
    

})




Cypress.Commands.add('fillQuotePage', () => {
    
    cy.get(':nth-child(2) > .container > .row > :nth-child(1) > .tile').click();
    cy.fillInput("#mat-input-4", "Sakthi Test");
    cy.fillInput("#mat-input-5", "sakthi@test.com");
    cy.fillInput("#mat-input-6", "6382228561");
    cy.contains("Next").click();
    cy.fillInput("#mat-input-16", "16022002");
    cy.fillInput("#mat-input-7", "609404");
    cy.get('#mat-tab-content-0-1 > .mat-tab-body-content > .mt-1 > .mat-accent').click();
    
  
    
  });
  
  Cypress.Commands.add('fillProposerDetails', () => {
    cy.wait(15000);
    
    cy.contains(" Star Comprehensive Individual ").scrollIntoView();
   
      
    cy.get(':nth-child(11) > .pcc-main > .pcc-details > .pcc-actions > .pcc-action-buy > .buy-btn').click();
    cy.get('.mat-dialog-actions > .mat-raised-button').click();
    cy.url().should('contain','star')
    cy.get('#mat-select-value-23').click();
    cy.get('#mat-option-125').click();
    cy.fillInput("#mat-input-21", "SK");
    cy.fillInput("#mat-input-23", "Test");
    cy.fillInput("#mat-input-25", "sakthi@test.com");
   
    cy.fillInput("#mat-input-29", "8967345422");
    cy.fillInput("#mat-input-30", "165");
    cy.fillInput("#mat-input-31", "61");
  });
  
  Cypress.Commands.add('fillNomineeDetails', () => {
    cy.fillInput("#mat-input-62", "Siraj");
    cy.fillInput("#mat-input-63", "09122002");
  });
  
  Cypress.Commands.add('fillInput', (selector, value) => {
    cy.get(selector).type(value);
  });