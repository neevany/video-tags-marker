import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import { Icon } from '@blueprintjs/core';
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
        <br />
        <ul>
          <li>
            <h4>
              Click on the &nbsp;
              <Icon icon="list-columns" large />
              &nbsp; Icon to view the video tags marker mode
            </h4>
          </li>
          <li>
            <h4>Click on the tags marker to seek to that time</h4>
          </li>
        </ul>
      </div>
    );
  }
}

export default VideoPlayer;
