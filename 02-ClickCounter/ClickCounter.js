var App = App || {}

App.ClickCounter = function() {
  var value = 0

  return {
    getValue() {
      return value
    },

    increase() {
      value++
    }
  }
}