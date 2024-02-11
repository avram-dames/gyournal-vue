/// <reference types="Cypress" />

import ExerciseView from './ExerciseView.vue'
import { createTestingPinia } from '@pinia/testing'
import { useJournalStore } from '@/stores/journal'

describe('<ExerciseView />', () => {
  beforeEach(() => {
    createTestingPinia({
      initialState: {},
      createSpy: cy.spy
    })
    cy.wrap(useJournalStore()).as('store')
  })

  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ExerciseView)
  })
})
