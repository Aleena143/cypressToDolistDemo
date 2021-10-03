    class commonFunctionalities
    {
        clickElement(locator)
        {
            cy.get(locator).click()

        }
        getandtypeValue(locator,value)
        {
            cy.get(locator).type(value)
        }

        

    }
    export default commonFunctionalities;