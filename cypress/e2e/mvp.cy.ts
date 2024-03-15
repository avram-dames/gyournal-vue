describe('Athlete is able to use the app to track their workouts', () => {
  it('can see all their saved workouts', () => {
    cy.visit('/')
    cy.get('.workout-card').first().should('contain', 'Full Body 1')
  })

  // can click on a workout to see the details

  // can start a workout

  // can click on an exercise to see the sets

  // can update the sets of an exercise

  // can complete a workout and save it
})
