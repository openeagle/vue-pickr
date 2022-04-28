import { ref } from 'vue';
import Pickr from '../src/Pickr';

export default {
  title: 'Example/Pickr',
  component: Pickr,
  argTypes: {
    theme: {
      control: { type: 'select', options: ['classic', 'monolith', 'nano'] },
      disabled: { type: 'select', options: [true, false] }
    }
  }
};

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Pickr },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  data() {
    return {
      value: null
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Pickr v-bind="args" v-model:value="value" />'
});

export const Classic = Template.bind({});
Classic.args = {
  theme: 'classic'
};


export const Disabled = Template.bind({});
Classic.args = {
  disabled: true
};
