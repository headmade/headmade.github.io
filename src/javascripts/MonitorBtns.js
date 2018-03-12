const MonitorBtns = () => {
  const btns = document.querySelectorAll('.btn-list__item')
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active')
      }

      const monitorType = btns[i].dataset.monitor
      const monitorId = document.querySelector('.monitor')

      btns[i].classList.add('active')
      monitorId.classList.remove('desktop', 'tablet', 'phone')
      monitorId.classList.add(monitorType)
    })
  }
}
export default MonitorBtns