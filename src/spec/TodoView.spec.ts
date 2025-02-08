import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'

import TodoView from '@/views/TodoView.vue';


describe('Todoのデータが表示されること', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(TodoView,{
      global: {
        plugins: []
      }
    });
    expect(wrapper.exists()).toBe(true);



  });
});
  

