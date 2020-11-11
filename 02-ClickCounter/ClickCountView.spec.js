describe('ClickCountView 모듈', () => {
  // it('ClickCounter를 주입하지 않으면 에러를 던진다', ()=> {
  //   const clickCounter = null
  //   const updateEl = $('<span></span>') 
  //   const actual = () => ClickCountView(clickCounter, updateEl)
  //   expect(actual).toThrowError(ClickCountView.messages.noClickCounter)
  // })

  let updateEl, clickCounter, view
  beforeEach(()=> {
    clickCounter = App.ClickCounter();
    updateEl = document.createElement('span');
    view = App.ClickCountView(clickCounter, updateEl)
  })

  it('ClickCounter를 주입하지 않으면 에러를 던진다', ()=> {
    const clickCounter = null
    const updateEl = document.createElement('span');
    const actual = () => App.ClickCountView(clickCounter, updateEl)
    expect(actual).toThrowError()

  })

  // it('updateEl를 주입하지 않으면 에러를 던진다.', () => {

  // })

  describe('updateView()', () => {
    it('ClickCounter의 getCounter() 실행결과를 출력한다', ()=> {
      const counterValue = clickCounter.getValue()
      view.updateView();
      expect(updateEl.innerHTML).toBe(counterValue.toString())
    })
  })
})