import jsTPS_Transaction from '../common/jsTPS.js';
/**
 * EditSong_Transaction
 *
 * We move! 
 *
 * @author Srineeth Jayanthi
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
  constructor(app, songIndex, originalSong, editedSong) {
    super();
    // inside
    this.app = app;
    this.songIndex = songIndex;
    this.original = originalSong;
    this.editedSong = editedSong;
  }

  doTransaction() {
    this.app.editSong(this.songIndex, this.editedSong);
  }

  undoTransaction() {
    this.app.editSong(this.songIndex, this.original);
  }
}
