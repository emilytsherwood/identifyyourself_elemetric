var React        = require('react')
var Main = require('./components/Main')

window.onload = function() {
  React.render(
    <Main />,
    document.getElementById('app')
  )
}