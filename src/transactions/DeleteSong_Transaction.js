import jsTPS_Transaction from '../common/jsTPS.js';
/**
 * RemoveSong_Transaction
 *
 *
 *
 * @author Srineeth Jayanthi
 */
export default class DeleteSong_Transaction extends jsTPS_Transaction {
  constructor(initApp, initSongIndex) {
    super();
    this.app = initApp;
    this.songIndex = initSongIndex;
  }

  doTransaction() {
    this.removedSong = this.app.deleteSong(this.songIndex);
  }

  undoTransaction() {
    this.app.undoDeletedSong(this.songIndex, this.removedSong);
  }
}