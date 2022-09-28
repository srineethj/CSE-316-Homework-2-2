import jsTPS_Transaction from '../common/jsTPS.js';
/**
 * EditSong_Transaction
 *
 * We move! 
 *
 * @author Srineeth Jayanthi
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
  constructor(app, songIndex, orginalSong, editedSong) {
    super();
    // inside
    this.app = app;
    this.songIndex = songIndex;
    this.orginalSong = orginalSong;
    this.editedSong = editedSong;
  }

  doTransaction() {
    this.app.editSong(this.songIndex, this.editedSong);
  }

  undoTransaction() {
    this.app.editSong(this.songIndex, this.originalSong);
  }
}
