import React, { Component } from 'react';
import classNames from 'classnames';
import { Button, Icon } from '@blueprintjs/core';
import styles from './tags-toggle.less';
import TagsMarker from '../tags-marker/tags-marker';

export default class TagsToggle extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showTagsMarker: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showTagsMarker: !this.state.showTagsMarker });
  }

  render() {
    const { player, className } = this.props;
    const { currentSrc } = player;

    return (
      <div>
        <Button
          minimal
          icon
          onClick={this.handleClick}
          style={{ textAlign: 'center' }}
        >
          <Icon icon="list-columns" style={{ color: 'white' }} />
        </Button>
        <div
          className={classNames({
            'tags-marker-container': true,
            'show-tags-marker': this.state.showTagsMarker,
          })}
        >
          <TagsMarker
            duration={
              this.props.videoPlayer.current &&
              this.props.videoPlayer.current.getState().player.duration
            }
            seekTo={time => this.props.seekTo(time)}
            metaTags={this.props.metaTags}
          />
        </div>
      </div>
    );
  }
}
