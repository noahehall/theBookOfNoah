// merge and export so your app can use it
export default function mainConfig(overrides = {}) {
  return Object.assign(
    {},
    require('./components/logger')(),
    overrides
  )
}
