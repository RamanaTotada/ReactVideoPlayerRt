import {Component} from 'react'
import ReactPlayer from 'react-player'
import './index.css'

class VideoPlayer extends Component {
  state = {isPlaying: false}

  onclickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying} = this.state

    const btnText = isPlaying ? 'pause' : 'play'
    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            playing={isPlaying}
          />
        </div>

        <button type="button" className="button" onClick={this.onclickPlay}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default VideoPlayer
