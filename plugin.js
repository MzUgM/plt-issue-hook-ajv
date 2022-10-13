'use strict'

module.exports = async function (app) {
  app.platformatic.addEntityHooks('demo', {
    // application owns input to the database
    save: async (save, opts) => {
      const patched = { ...opts.input, hookOverrides: 'always this string' }
      return save({ ...opts, input: patched })
    },

    // add additional field to output
    find: async (find, opts) => {
      const res = await find(opts)
      return res.map((row) => {
        row.foo = 'bar'
        return row
      }) 
    }
  })
}
