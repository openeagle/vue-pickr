import { App } from 'vue';
import Pickr from '@simonwep/pickr';
import ColorPickr from './Pickr';

const install = (vue: App, globalOptions: any) => {
  if (globalOptions) {
    ColorPickr.props.globalOptions.default = () => globalOptions;
  }
  vue.component(ColorPickr.name, ColorPickr);
};

const VueColorPickr = { Pickr, ColorPickr, install };

export default VueColorPickr;

export { Pickr, ColorPickr, install };
