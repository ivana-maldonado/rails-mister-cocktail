const { environment } = require('@rails/webpacker')

<<<<<<< HEAD
=======
// Bootstrap 4 has a dependency over jQuery & Popper.js:
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
  })
)

>>>>>>> f9adea3dcc4e1f57483b090766de9e850372e056
module.exports = environment
