import React, { Component } from 'react';
import style from './app.less';

import Header from './components/header';
import VideoPlayer from './components/video-player/video-player';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoMetaTags: [
        {
          tag: 'Walking',
          time_ranges: [{ start: 13, end: 16 }, { start: 23, end: 31 }],
        },
        {
          tag: 'Running',
          time_ranges: [{ start: 30, end: 34 }, { start: 61, end: 73 }],
        },

        {
          tag: 'Fighiting',
          time_ranges: [
            { start: 17, end: 22 },
            { start: 35, end: 42 },
            { start: 47, end: 52 },
          ],
        },
        {
          tag: 'Chasing',
          time_ranges: [{ start: 55, end: 58 }, { start: 60, end: 64 }],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Header />
        <VideoPlayer
          src="./videos/video1.mp4"
          videoMetaTags={this.state.videoMetaTags}
        />
      </div>
    );
  }
}

export default AppComponent;
