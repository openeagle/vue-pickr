import {
  defineComponent,
  onMounted,
  PropType,
  ref,
  watch,
  watchEffect
} from 'vue';
import Pickr from '@simonwep/pickr';

export default defineComponent({
  name: 'ColorPickr',
  props: {
    value: String,
    theme: {
      type: String as PropType<'classic' | 'monolith' | 'nano'>,
      default: 'classic'
    },
    disabled: Boolean,
    opacity: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:value'],
  setup(props, { attrs, emit, slots }) {
    let pickr: Pickr;
    const container = ref<HTMLElement | null>(null);
    onMounted(() => {
      if (container.value) {
        pickr = Pickr.create({
          el: container.value,
          appClass: `${attrs.class}`,
          theme: props.theme, // or 'monolith', or 'nano'
          disabled: props.disabled,
          swatches: [
            '#D0021B',
            '#F5A623',
            '#F8E71C',
            '#8B572A',
            '#7ED321',
            '#417505',
            '#BD10E0',
            '#9013FE',
            '#4A90E2',
            '#50E3C2',
            '#B8E986',
            '#000000',
            '#4A4A4A',
            '#9B9B9B',
            '#FFFFFF'
          ],
          components: {
            // Main components
            preview: true,
            opacity: props.opacity,
            hue: true,

            // Input / output Options
            interaction: {
              hex: true,
              rgba: true,
              hsla: true,
              hsva: true,
              cmyk: true,
              input: true
            }
          },
          showAlways: false,
          ...attrs,
          default: props.value,
          useAsButton: true
        } as any);
        pickr.on('change', (color: Pickr.HSVaColor, event: any) => {
          pickr.applyColor(true);
          emit('update:value', color.toHEXA().toString());
        });
      }
    });
    watch(
      () => props.value,
      () => {
        if (
          pickr &&
          props.value !==
            pickr
              .getColor()
              .toHEXA()
              .toString()
        ) {
          pickr.setColor(props.value || null);
        }
      }
    );
    watch(
      () => props.disabled,
      () => {
        if (pickr) {
          if (props.disabled) {
            pickr.disable();
          } else {
            pickr.enable();
          }
        }
      }
    );
    return () => {
      return (
        <div ref={container} class={['pickr', attrs.class]}>
          {slots.default?.(props.value) || (
            <button
              type="button"
              class="pcr-button"
              role="button"
              aria-label="toggle color picker dialog"
              style={props.value ? { '--pcr-color': props.value } as any : undefined}
            />
          )}
        </div>
      );
    };
  }
});
