  //import Gherkin keywords from cucumber feature file
  import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
  //implementing page object model by importing pages class
  import ToDo from "../pages/ToDo"
  //create page class object
  const toDoObj = new ToDo()

  // Given Step definitions for scenarios

  Given('I am in the todolist site',()=>{
  toDoObj.launchsite()
  })
    
  When('User enters following Items',(datatable) =>{
    datatable.hashes().forEach(row => {
      toDoObj.inputToDoList(row.Items)
    })
    cy.screenshot()
  })

  Then("Following New todos should present", (datatable) => {
    datatable.hashes().forEach(row => {
        toDoObj.findToDo(row.Items)
    })
  })

  When('I search for {string}' ,(searchvalue) => {
    toDoObj.enterSearch(searchvalue)
    cy.screenshot()

  })

  Then('I should see {string} in searchlist' ,(searchvalue) => {

    toDoObj.validateSearch(searchvalue)
    cy.screenshot()
  })

  When('User Marks follwing course as completed',(datatable) => {
  datatable.hashes().forEach(row => {
    toDoObj.moveToCompleted(row.courses)
  })
  cy.screenshot()
  })

  Then('Following courses should present in completed list',(datatable) => {
    datatable.hashes().forEach(row => {
      toDoObj.verifyPresentinCompletedList(row.courses)
    })
  cy.screenshot()
  })

  Then('Following Completed courses should not present in Active list' ,(datatable) => {
    datatable.hashes().forEach(row => {
      toDoObj.verifyNotPresentinActiveList(row.courses)
    })
  cy.screenshot() 
  })

  And('verify  All lists contain both completed and Active list',() =>
  {
    toDoObj.verifyAllList()
    cy.screenshot()

  })
  When('User Marks all course as {string}' , (string) =>{
    if(string == "completed")
    {
      toDoObj.MarkAllItemsCompleted()
      
    }
    else{
      toDoObj.MarkAllItemsCompleted()
      toDoObj.markAllItemsActive()
      
    }
    cy.screenshot()
  })

  Then('verify no items present in {string} list' ,(string) =>{
    if(string =="completed")
    {
      toDoObj.verifyNoItemTextPresent("completed")
      cy.screenshot()
    }
    else
    {
      
      toDoObj.verifyNoItemTextPresent("active")
      cy.screenshot()
    }
  })

  Then('validate {string} press',(string) =>
  {
    if(string == "/")
    {
    toDoObj.validateEscapepress()
    toDoObj.validateslashpress()
    }
    if(string == "N")
    {
    toDoObj.validateEscapepress()
    toDoObj.validateNpress()
    }
    if(string == "Escape")
    {
    toDoObj.validateEscapepress()
    }
    cy.screenshot()
  })

  Then("header h1 must contain {string}", (headerText) => {
    toDoObj.verifyHeader(headerText)
    cy.screenshot()
    
  })


