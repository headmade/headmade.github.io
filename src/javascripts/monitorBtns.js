const monitorBtns = (e) => {
  const thisBtn = e.currentTarget
  const monitorType = thisBtn.dataset.monitor
  console.log('---', monitorType)
  const monitorWrapper = document.querySelector('.monitor-wrapper--js')
  const monitor = document.querySelector('.monitor--js')
  const btns = monitorWrapper.querySelectorAll('.btn-list__item--js')
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove('active')
    thisBtn.classList.add('active')
    monitor.classList.remove('desktop', 'tablet', 'phone')
    monitor.classList.add(monitorType)
  }

}
export default monitorBtns