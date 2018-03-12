import React, {Component} from 'react'

export default (OriginalComponent) => class Wrapper extends Component {
  state = {
    isOpen: false
  }

  toggleOpen = (ev) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    ev && ev.preventDefault && ev.preventDefault()
  }

  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
  }
}