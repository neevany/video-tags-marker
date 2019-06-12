import React, { Component } from 'react';
import { Tag } from '@blueprintjs/core';
import palette from 'google-palette';

import styles from './tags-marker.less';

class TagsMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.metaTags,
      colors: palette('tol', this.props.metaTags.length),
    };
  }
  render() {
    return (
      <div className="tags-container">
        <div>
          <span style={{ fontSize: '14px' }}>Detected Tags:&nbsp;</span>
          {this.state.tags.map((tag, tagIndex) => (
            <span key={tagIndex}>
              <Tag
                large
                style={{ background: `#${this.state.colors[tagIndex]}` }}
              >
                {tag.tag}
              </Tag>
              &nbsp;
            </span>
          ))}
        </div>
        <br />
        <div>
          {this.state.tags.map((tag, tagIndex) => (
            <div style={{ marginBottom: '3px' }} key={tagIndex}>
              {tag.time_ranges.map((time, index) => {
                return (
                  <span
                    key={index}
                    className="tag-seek"
                    onClick={() => this.props.seekTo(time.start)}
                    style={{
                      position: 'absolute',
                      width: `${((time.end - time.start) * 100) /
                        this.props.duration}%`,
                      left: `${(time.start * 100) / this.props.duration}%`,
                      background: `#${this.state.colors[tagIndex]}`,
                    }}
                  />
                );
              })}
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TagsMarker;
