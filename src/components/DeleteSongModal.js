/**
 * @author Srineeth Jayanthi
 */
import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
  render() {  
    const {
      selectedSongTitle,
      deleteSongCallback,
      hideDeleteSongModalCallback
    } = this.props;

    return (
      <div class='modal' id='delete-song-modal' data-animation='slideInOutLeft'>
        <div class='modal-root' id='verify-delete-song-root'>
          <div class='modal-north'>Remove song?</div>
          <div class='modal-center'>
            <div class='modal-center-content'>
              Are you sure you wish to permanently remove the song {selectedSongTitle}?
            </div>
          </div>
          <div class='modal-south'>
          <input
              type='button'
              id='delete-song-confirm-button'
              class='modal-button'
              onClick={() => {
                deleteSongCallback();
                hideDeleteSongModalCallback();
              }}
              value='Confirm'
            />
            <input
              type='button'
              id='delete-song-cancel-button'
              class='modal-button'
              onClick={hideDeleteSongModalCallback}
              value='Cancel'
            />
          </div>
        </div>
      </div>
    );
  }
}