describe('Athlete is able to use the app to track their workouts', () => {
  it('can see all their saved workouts', () => {
    cy.visit('/')
    cy.get('.workout-card').should('have.length', 2)
  })

  it('can see the name of the workouts', () => {
    cy.visit('/')
    cy.get('.workout-card').first().should('contain', 'Full Body 1')
    cy.get('.workout-card').next().should('contain', 'Full Body 2')
  })

  it('can click on a workout to see the details', () => {
    cy.visit('/')
    cy.get('.workout-card').next().click()
    cy.url().should('include', '/workouts/2')
    cy.get('.details').find('h1').should('contain', 'Full Body 2')
  })

  it('can see the exercises in a workout', () => {
    cy.visit('/workouts/1')
    cy.get('.exercise-card').first().find('h2').should('contain', 'Impins cu gantere din inclinat')
    cy.get('.exercise-card')
      .next()
      .find('h2')
      .should('contain', 'Flexia antebratului pe brat cu gantere')
    cy.get('.exercise-card').next().find('h2').should('contain', 'Extensia tricepsului cu funia')
  })

  // can click on an exercise to see the sets
  // can start a workout
  // can update the sets of an exercise
  // can complete a workout and save it
})
