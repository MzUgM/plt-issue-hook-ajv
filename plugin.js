'use strict'

module.exports = async function (app) {
  app.platformatic.addEntityHooks('demo', {
    save: async (save, opts) => {
      const patched = { ...opts.input, hookOverrides: 'always this string' }
      return save({ ...opts, input: patched })
    }
  })
}
