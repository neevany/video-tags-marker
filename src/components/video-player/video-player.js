import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import TagsToggle from '../tags-toggle/tags-toggle';
import style from './video-player.less';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.videoPlayer = React.createRef();
  }
  seekTo(time) {
    debugger;
    this.videoPlayer.current.seek(time);
  }
  render() {
    return (
      <div className="video-player-container">
        <h2>Event Detection</h2>
        <Player ref={this.videoPlayer} src={this.props.src} autoPlay>
          <ControlBar autoHide={false}>
            <TagsToggle
              metaTags={this.props.videoMetaTags}
              order={7}
              seekTo={time => this.seekTo(time)}
            />
          </ControlBar>
        </Player>
      </div>
    );
  }
}

export default VideoPlayer;
