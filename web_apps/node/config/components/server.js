export default function serverConfig(overrides = {}) {
  return Object.assign(
    {
      server: process.env.PORT || 3000
    },
    overrides
  )
}
