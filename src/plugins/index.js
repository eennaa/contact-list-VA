export default {
  install(Vue, options = {}) {
    let pluginOptions = {
      disableMethod: false
    }
    pluginOptions = pluginOptions.assign(disableMethod, options)

    Vue.directive('alert', {
      inserted: function (el, binding) {
        el.style.backgroundColor = binding.value || '#ff4890';
      }
    });
    
    Vue.directive('focus', {
      inserted: function(el, binding, vnode, oldVnode) {
        // console.log(el, binding, vnode, oldVnode);
        console.log('xxx', binding);
        let elementId = el.id;
        let focusAlways = binding.modifiers.always;
        console.log(el.id, binding.value);
        if (focusAlways) {
          return el.focus();
        }
        if (elementId === binding.value) {
          el.focus();
        }
      }
    });

    Vue.prototype.$log = function(message) {
      console.log(message);
    }

    Vue.component('MyButton', {
      props: {
        title: {
          default: 'Default',
          type: String
        }
      },

      // template: `
      //   <a @click="onClick"
      //     v-text="title"
      //   ></a>

      // `,  //zbog ovog mogu da pisem u vise linija  //ne valjda zbog nekog runtime mora render

      render(createElement) {
        return createElement('button', {
          on: {
            click: this.onClick
            }
          }, [this.title])
        
      },

      methods: {
        onClick(event) {
          this.$emit('click', event)
        }
      }

    })
  }
}