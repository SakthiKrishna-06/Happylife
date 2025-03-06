describe('Health Insurance Application', function() {
  

  it('should successfully fill and submit the form (positive test case)', function() {

    // Login
    cy.LoginEmployee();


    // Fill quote page
    cy.fillQuotePage();
    
    // Fill personal details
    cy.fillProposerDetails();
    
    // // Select destination and purpose
    // cy.selectDestinationAndPurpose();
    
    // // Fill proposer details
    // cy.fillProposerDetails();
    
    // // Fill nominee details
    // cy.fillNomineeDetails();
  });
});