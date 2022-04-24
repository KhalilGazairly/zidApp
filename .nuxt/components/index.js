export const HomeApplications = () => import('../../components/home/applications.vue' /* webpackChunkName: "components/home-applications" */).then(c => wrapFunctional(c.default || c))
export const HomeFeatureSection = () => import('../../components/home/featureSection.vue' /* webpackChunkName: "components/home-feature-section" */).then(c => wrapFunctional(c.default || c))
export const HomeLandingPart = () => import('../../components/home/landingPart.vue' /* webpackChunkName: "components/home-landing-part" */).then(c => wrapFunctional(c.default || c))
export const HomeVideoSection = () => import('../../components/home/videoSection.vue' /* webpackChunkName: "components/home-video-section" */).then(c => wrapFunctional(c.default || c))
export const Index = () => import('../../components/index/index.vue' /* webpackChunkName: "components/index" */).then(c => wrapFunctional(c.default || c))

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
