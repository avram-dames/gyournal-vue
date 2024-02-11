import SetForm from './SetForm.vue'

describe('<SetForm />', () => {
  it('renders', () => {
    cy.mount(SetForm, { props: { set: 1, lastWeight: 100, lastReps: 10 } })
  })
})
