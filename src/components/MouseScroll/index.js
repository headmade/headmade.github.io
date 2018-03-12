import React from 'react'

import './MouseScroll.sass'

const MouseScroll = () => (
  <div className="mouse">
    <svg xmlns="http://www.w3.org/2000/svg" width="28.375" height="70.375" viewBox="0 0 34.375 80.375" id="mouse">
      <path id="mouse-scroll" d="M32.927,37.933c0,6.972-5.652,12.625-12.625,12.625h-6.333C6.997,50.558,1.344,44.905,1.344,37.933V13.917  c0-6.972,5.652-12.625,12.625-12.625l6.333,0c6.973,0,12.625,5.653,12.625,12.625V37.933zM19.198,15.125c0,1.104-0.895,2-2,2h-0.125c-1.104,0-2-0.896-2-2V9.166c0-1.104,0.896-2,2-2h0.125c1.105,0,2,0.896,2,2V15.125zM17.136 7.166 L17.166 1.437zM17.136 17.125 L17.136 23.208z" />
      <polyline id="arrow1" points="26.948,58.5 17.136,68.313 7.323,58.5" />
      <polyline id="arrow2" points="26.948,65.25 17.136,75.063 7.323,65.25" />
    </svg>
  </div>
)

export default MouseScroll