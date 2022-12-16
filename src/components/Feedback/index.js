// Write your React code here.
import {Component} from 'react'

import './index.css'

const Emoji = props => {
  const {details, changingState} = props
  const {imageUrl, name} = details

  const onClicking = () => {
    changingState()
  }
  return (
    <li className="each-emoji-container">
      <button className="emoji-btn" type="submit" onClick={onClicking}>
        <img src={imageUrl} alt={name} className="emoji-image" />
      </button>
      <p className="emoji-name">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {feedBack: 'notGiven'}

  changeTheState = () => {
    const {feedBack} = this.state
    if (feedBack === 'notGiven') {
      this.setState({feedBack: 'Given'})
    } else {
      this.setState({feedBack: 'notGiven'})
    }
  }

  emojiContainer = () => {
    const {resources} = this.props
    console.log(this.state)
    return (
      <div className="feedback-container">
        <h1 className="heading-style">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {resources.emojis.map(eachItem => (
            <Emoji
              details={eachItem}
              key={eachItem.id}
              changingState={this.changeTheState}
            />
          ))}
        </ul>
      </div>
    )
  }

  thankYou = () => {
    const {resources} = this.props
    return (
      <div className="feedback-container">
        <img
          src={resources.loveEmojiUrl}
          className="thank-you-img-style"
          alt="love emoji"
        />
        <h1 className="heading-style">Thank You</h1>
        <p className="thank-you-para">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  renderEmojiElem = () => {
    const {feedBack} = this.state
    if (feedBack === 'notGiven') {
      return this.emojiContainer()
    }
    return this.thankYou()
  }

  render() {
    return <div className="main-container">{this.renderEmojiElem()}</div>
  }
}

export default Feedback
