var App = App || {}

App.ClickCounter = _data => {
  if(!_data) throw Error('_data')
  let data = _data;
  data.value = data.value || 0;


  return {
    getValue() {
      return data.value
    },
    increase() {
      data.value++
    }
  }
}