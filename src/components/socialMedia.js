import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';


class MediaInfo extends Component {
  render() {
    return (
      <div>
        <h3>Contact Information</h3>
        <SocialIcon url="https://www.instagram.com/missolssonsfoto/" />
        <SocialIcon url="https://www.facebook.com/sara.olsson.7796" />
      </div>
    )
  }
}

export default MediaInfo;
