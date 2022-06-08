import Stepper from './Stepper.vue'

const textSelector = '[data-testid=counter]'
const incrementSelector = '[data-testid=increment]'
const decrementSelector = '[data-testid=decrement]'

describe('<Stepper />', () => {
  it('renders', () => {
    cy.mount(Stepper)
    cy.get(textSelector).should('contain.text', '0')
    cy.get(incrementSelector).click()
    cy.get(textSelector).should('contain.text', '1')
    cy.get(decrementSelector).click().click()
    cy.get(textSelector).should('not.contain.text', '-1')
  })

  // it.only()
  it('has min prop that defaults to 0', () => {
    cy.mount(Stepper)
      .get(decrementSelector)
      .click()
      .get(textSelector)
      .should('contain.text', '0')
  })

  // it.only('has min prop and starts there as initial value', () => {
  //   cy.mount(Stepper, {
  //     min: 3
  //   })
      
  // })

  it('has val that is 0 by default', () => {
    cy.mount(Stepper)
    .get(textSelector)
    .should('contain.text', '0')
  })
  it('has max property', () => {
    cy.mount(Stepper, {
      props: {
        max: 3
      }
    })
      .get(incrementSelector)
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .get(textSelector)
      .should('contain.text', '3')
  })
  it.only('emits change', () => {
    const onChangeSpy = cy.spy().as('onChange')
    cy.mount(Stepper, {
      props: {
        onChange: onChangeSpy
      }
    })
    .get(incrementSelector)
    .click()
    .click()
    .click()
    // cy.pause() // breakpoint
    .pause()
    .click()
    .get('@onChange')
    .should('have.been.called')
  })
})
