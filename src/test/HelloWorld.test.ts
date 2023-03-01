import HelloWorldVue from '../components/HelloWorld.vue'
import { mount } from '@vue/test-utils'

describe('counter', () => {
  test('mount counter', async () => {
    expect(HelloWorldVue).toBeTruthy()

    const wrapper = mount(HelloWorldVue)
    //with props :
    // const wrapper = mount(HelloWorldVue, {
    //   props: {
    //     msg: 'LonesomeT0wn start',
    //   },
    // })

    expect(wrapper.text()).toContain('0')
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('increases counter by one', async () => {
    expect(HelloWorldVue).toBeTruthy()

    const wrapper = mount(HelloWorldVue)

    expect(wrapper.html()).toMatchSnapshot()
    await wrapper.find('#plus').trigger('click')

    expect(wrapper.find('.count').text()).toBe('1')
  })
  test('decreases counter by one', async () => {
    expect(HelloWorldVue).toBeTruthy()

    const wrapper = mount(HelloWorldVue)
    expect(wrapper.html()).toMatchSnapshot()
    await wrapper.find('#minus').trigger('click')

    expect(wrapper.find('.count').text()).toBe('-1')
  })
})
