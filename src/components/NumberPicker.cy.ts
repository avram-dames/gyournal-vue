import NumberPicker from './NumberPicker.vue'

describe('<NumberPicker />', () => {
  it('renders', () => {
    cy.mount(NumberPicker)
    cy.get('input').should('have.value', '0')
    cy.get('.units').should('have.text', 'Kg')
    cy.get('button.decrement').should('be.visible')
    cy.get('button.increment').should('be.visible')
  })
  it('displays correct value', () => {
    cy.mount(NumberPicker, { props: { defaultValue: 100, units: 'Reps' } })
    cy.get('input').should('have.value', '100')
    cy.get('.units').should('have.text', 'Reps')
  })
  it('handles Body Weight unit', () => {
    cy.mount(NumberPicker, { props: { units: 'Body Weight' } })
  })
  it.only('handles Kg change', () => {
    cy.mount(NumberPicker, { props: { defaultValue: 20, units: 'Kg' } })

    cy.get('button.increment').click()

    cy.get('@vue').should(({ wrapper }) => {
      expect(wrapper.emitted('updateValue')).to.have.length
      expect(wrapper.emitted('change')[0][0]).to.equal('20.5')
    })

    cy.get('input').should('have.value', '20.5')
    cy.get('button.decrement').click()
    cy.get('input').should('have.value', '20')
  })
  it('handles Reps change', () => {
    cy.mount(NumberPicker, { props: { defaultValue: 20, units: 'Reps' } })
    cy.get('button.increment').click()
    cy.get('input').should('have.value', '21')
    cy.get('button.decrement').click()
    cy.get('input').should('have.value', '20')
  })
  it('has handles input', () => {
    cy.mount(NumberPicker, { props: { defaultValue: 20, units: 'Reps' } })
    cy.get('input').clear().type('30')
    cy.get('input').should('have.value', '30')
  })
})
