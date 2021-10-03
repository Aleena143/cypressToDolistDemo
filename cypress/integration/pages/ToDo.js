    import commonFunctionalities from "../pages/commonFunctionalities"
    const commonObj = new commonFunctionalities()
    var pendingtext;
    var completedtext;
    var Alllisttext;
    var completedandpendingarray;
    class ToDo{
        constructor() {
            
            ToDo._instance = this;
        this.header = "//header/h1";
        this.addnewlist = ".form-control";
        this.alllistitems = "div.todolist>ul.list-unstyled>li";
        this.searchinputtext ="//input[@class='form-control search']"
        this.searchitem = "div > .search";
        this.xpatalllistitems = "//div[@class='todolist']/ul[@class='list-unstyled']/li"
        this.completedlist= "//div[@class='todolist']/ul[@class='list-unstyled']/li[@class='todo-item ui-state-default completed']"
        this.pendinglist ="//div[@class='todolist']/ul[@class='list-unstyled']/li[@class='todo-item ui-state-default pending']"
        this.activelist ="//li/a[contains(text(),'Active')]"    
        this.alertxpath ="//p[@class='alert alert-info']"
        this.leftitemtext ="//div[@class='pull-left']"
        this.completelist ="//li/a[contains(text(),'Completed')]"
        this.pendingitemscheckbox ="//div[@class='todolist']/ul[@class='list-unstyled']/li[@class='todo-item ui-state-default pending']/div/label/input"
        this.completedItemscheckbox  ="//div[@class='todolist']/ul[@class='list-unstyled']/li[@class='todo-item ui-state-default completed']/div/label/input"
        this.pressinfooter =  "//p[@class='info']"
    // this.pressslashandN ="//p[contains(text(),'Press `/` to search and `N` to create a new item.')]"
        this.Addnewtext = "//input[@class='form-control add-todo']"
        this.headerinputtext ="//div[@class='todolist']/header/*[self::h1 or self:: input]"
    }



        launchsite()
        {
        cy.visit('https://simplest-react-todo-app.herokuapp.com/')
        
        }

        inputToDoList(rowItems)
        {
            
        cy.get(this.addnewlist).type(rowItems+'{enter}')
        
        }

        validateEscapepress()
    {
    cy.xpath(this.pressinfooter).trigger('keydown', { keyCode: 27, which: 27 })
    cy.xpath(this.headerinputtext).its('length').should('eq',1)
    
        
        
    }

        validateslashpress()
    {
    
        cy.xpath(this.pressinfooter).trigger('keydown', { keyCode: 191, which: 191 })
        cy.xpath(this.searchinputtext).isVisible

        }
        validateNpress()
    {
        cy.xpath(this.pressinfooter).trigger('keydown', { keyCode: 78, which: 78 })

        cy.xpath(this.Addnewtext).isVisible
        }

        findToDo(rowItems)
        {
            cy.get(this.alllistitems).should('contain',rowItems)
        }

        enterSearch(searchvalue)
        {
        commonObj.clickElement(this.searchitem)
        commonObj.getandtypeValue(this.addnewlist,searchvalue)
    
        }
    
        validateSearch(String)
        {
        cy.xpath(this.xpatalllistitems).should('contain',String).and('have.length','2')
        }

        moveToCompleted(courses)
        {
            cy.contains(courses).parent().find('input').check()
        }
        verifyPresentinCompletedList(courses)
        {
            cy.xpath(this.completedlist)
            .should('contain',courses)
        }
        verifyNotPresentinActiveList(courses)
        {
            cy.xpath(this.pendinglist)
            .not('contain',courses) 
        }
        verifyNotPresentinCompletedList(courses)
        {
            cy.xpath(this.completedlist)
            .not('contain',courses)
        }
        verifyAllList()
        {
            cy.xpath(this.completedlist)
            .then($completedtexts =>
                {
                completedtext = $completedtexts.text()
            
            cy.xpath(this.pendinglist)
            .then($pendingtexts =>
                {
                pendingtext = $pendingtexts.text()
                completedandpendingarray = completedtext + pendingtext
            
                
                cy.xpath(this.xpatalllistitems)
                .then($Alltexts =>
                    {
                        Alllisttext = $Alltexts.text()
                        expect(completedandpendingarray).equal(Alllisttext)
                    })
                })
            })    
        }

        verifyNoItemTextPresent(listtype){
        if(listtype == "completed")
        {
            cy.xpath(this.completedlist)
            .should('have.length','0') 
            cy.xpath(this.completelist).click()
        
        cy.xpath(this.alertxpath).should('contain','There are no items.')
    
        
            
        }
        if(listtype == "active")
        {
            cy.xpath(this.pendinglist)
            .should('have.length','0') 
            cy.xpath(this.activelist).click()
            cy.xpath(this.alertxpath).should('contain','There are no items.')
            cy.xpath(this.leftitemtext).should('contain','0 items left')
        }
        }


    MarkAllItemsCompleted()
    {
        cy.xpath
        (this.pendingitemscheckbox)
        .click({ multiple: true ,})
        cy.screenshot()
    }
    markAllItemsActive()
    {
        
        cy.xpath
        (this.completedItemscheckbox)
        .click({ multiple: true ,})
        cy.screenshot
    }

    verifyHeader(headerText)
    {
    cy.xpath(this.header).then($el => {
        expect($el.text()).to.eq(headerText);
    })
    }


    }
    export default ToDo;



