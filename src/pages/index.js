import React from 'react'
import AirHead from '../components/AirHead'
import Expertise from '../components/Expertise'
import ContactUs from '../components/ContactUs'

class IndexPage extends React.Component {
  componentDidMount() {
    const header = document.querySelector(".header")
    header.style.top = "-100px";
    window.addEventListener('scroll', this.scrollHidden)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollHidden)
  }

  scrollHidden = () => {
    const header = document.querySelector(".header")
    if(window.pageYOffset > 100){
      header.style.top = "0";
    }else{
      header.style.top = "-100px";
    }
  }

  render() {
    return (
      <main className="myMain">
        <AirHead />
        <Expertise />
        <ContactUs />
      </main>
    )
  }
}

export default IndexPage
