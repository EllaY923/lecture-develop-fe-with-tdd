var ClickCountView = function(clickCounter, options) {
  if (!clickCounter) throw new Error(ClickCountView.messages.noClickCounter)
  if (!options.updateEl) throw new Error(ClickCountView.messages.noUpdateEl)
  
  const view = {
    updateView() {
        options.updateEl.text(clickCounter.getCounter())
      },
      increaseAndUpdateView() {
        clickCounter.increase()
        this.updateView()
      }
  }

  options.triggerEl.addEventListener('click', ()=>{
    view.increaseAndUpdateView()
  })

  return view
}

ClickCountView.messages = {
  noClickCounter: 'clickCount를 주입해야 합니다',
  noUpdateEl: 'updateEl를 주입해야 합니다'
}