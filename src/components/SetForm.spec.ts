import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SetForm from './SetForm.vue'

describe('Header', () => {
  it('renders properly', () => {
    const wrapper = mount(SetForm, { props: { msg: 'Hello Vitest' } })
    const divWithClass = wrapper.find('.set-form')
    expect(divWithClass.exists()).toBe(true)
  })
})
