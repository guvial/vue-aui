export default {

  render(createComponent) {
    const attrs = {
      disabled: this.disabled,
      href: this.href,
      target: this.target
    };
    const elementType = this.href ? 'a' : 'button';
    const eventsDelegators = {
      click: () => this.$emit('click'),
      dbclick: () => this.$emit('dbclick'),
      mousedown: () => this.$emit('mousedown'),
      mouseup: () => this.$emit('mouseup'),
    };

    return createComponent(elementType, {
      class: this.classObject,
      on: eventsDelegators,
      attrs
    }, this.$slots.default)
  },

  props: {
    compact: Boolean,
    disabled: Boolean,
    href: String,
    light: Boolean,
    subtle: Boolean,
    target: String,
    type: {
      type: String,
      validator(value) {
        return 'primary' === value
          || 'link' === value
      }
    },
  },

  computed: {
    classObject() {
      return {
        'aui-button': true,
        'aui-button-primary': this.type === 'primary',
        'aui-button-link': this.type === 'link',
        'aui-button-light': this.light,
        'aui-button-subtle': this.subtle,
        'aui-button-compact': this.compact,
      }
    }
  },
}
