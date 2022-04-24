export { default as HomeApplications } from '../../components/home/applications.vue'
export { default as HomeFeatureSection } from '../../components/home/featureSection.vue'
export { default as HomeLandingPart } from '../../components/home/landingPart.vue'
export { default as HomeVideoSection } from '../../components/home/videoSection.vue'
export { default as Index } from '../../components/index/index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
