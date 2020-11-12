describe('ClickCountView 모듈', () => {
  let updateEl, clickCounter, view
  beforeEach(()=> {
    updateEl = $('<span></span>');
    clickCounter = ClickCounter(); 
    view = ClickCountView(clickCounter, updateEl)
  })
  it('ClickCounter를 주입하지 않으면 에러를 던진다', ()=> {
    const clickCounter = null
    const updateEl = $('<span></span>') 
    const actual = () => ClickCountView(clickCounter, updateEl)
    expect(actual).toThrowError(ClickCountView.messages.noClickCounter)
  })

  it('updateEl를 주입하지 않으면 에러를 던진다', ()=> {
    const clickCounter = ClickCounter()
    const updateEl = null 
    const actual = () => ClickCountView(clickCounter, updateEl)
    expect(actual).toThrowError(ClickCountView.messages.noUpdateEl)
  })

  describe('updateView()', () => {
    it('ClickCounter의 getCounter() 실행결과를 출력한다', ()=> {
      const counterValue = clickCounter.getCounter()
      view.updateView()
      expect(updateEl.text()).toBe(counterValue.toString())
    })

    describe('increaseAndUpdateView()는', ()=> {
      it('ClickCounter의 increase 를 실행한다', ()=> {
        // todo
      })
      
      it('updateView를 실행한다', ()=> {
        // todo 
      })
    })
  })

  describe('increaseAndUpdateView()는', ()=>{
    it('ClickCounter의 increase를 실행한다.', ()=>{
      spyOn(clickCounter, 'increase')
      view.increaseAndUpdateView()
      expect(clickCounter.increase).toHaveBeenCalled()
    })

    it('updateView를 실행한다.', ()=>{
      spyOn(view, 'updateView')
      view.increaseAndUpdateView()
      expect(view.updateView).toHaveBeenCalled()
    })
  })
})