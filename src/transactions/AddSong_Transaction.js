import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * 
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Srineeth Jayanthi
 */
 export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp) {
      super();
      this.app = initApp;
    }
  
    doTransaction() {
      this.app.addSong("Untitled", "Unknown", "dQw4w9WgXcQ");
    }
  
    undoTransaction() {
      this.app.deleteSong(this.app.getPlaylistSize() - 1);
    }
}