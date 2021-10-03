    Feature: ToDolist Feature
    
    As a user
    I want to verify todolist functionalities
    
    Background: Navigate to ToDo Page
            Given I am in the todolist site
            Then header h1 must contain "Things To Do"



    Scenario: Add to Todolist 
    When User enters following Items
                | Items             |
                | Learn cypress     |
                | Learn selenium    |
                | Learn Kotlin      |
                | Learn robotics    |
                | Learn C++         |

    Then Following New todos should present
                | Items             |
                | Learn cypress     |
                | Learn selenium    |
                | Learn Kotlin      |
                | Learn robotics    |
                | Learn C++         |
        

    Scenario: Verify Search functionality
    When I search for "Learn"
    Then I should see "Learn" in searchlist

    Scenario: verify completed Todolist functionality
    When User Marks follwing course as completed
                | courses          |
                | Learn Javascript |
                | Learn React      |

    Then Following courses should present in completed list
                | courses          |
                | Learn Javascript |
                | Learn React      |

    Then Following Completed courses should not present in Active list 
                | courses          |
                | Learn Javascript |
                | Learn React      |
    And verify  All lists contain both completed and Active list

    Scenario: verify There are no items  in active list once user completed all items

    When User Marks all course as "completed"
    Then verify no items present in "active" list

    Scenario: verify There are no items  in completed list once user didnt complete any items

    When User Marks all course as "active"
    Then verify no items present in "completed" list


    Scenario: validate Escape  press in footer


    Then validate "Escape" press


    Scenario: validate slash  press in footer


    Then validate "/" press


    Scenario: validate N  press in footer


    Then validate "N" press
