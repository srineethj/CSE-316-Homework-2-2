import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        const { canAddSong, addSongCallback, canUndo, canRedo, canClose, 
                undoCallback, redoCallback, closeCallback} = this.props;
        let addSongClass = "toolbar-button";
        let undoClass = "toolbar-button";
        let redoClass = "toolbar-button";
        let closeClass = "toolbar-button";
        if (canAddSong === false) addSongClass += " disabled";
        if (canUndo === false) undoClass += " disabled";
        if (canRedo === false) redoClass += " disabled";
        if (canClose === false) closeClass += " disabled";
        return (
            <div id="edit-toolbar">
            <input 
                type="button" 
                id='add-song-button' 
                value="+" 
                className={addSongClass}
                onClick={() => {
                    if (canAddSong){
                        addSongCallback();
                    }
                }}
                //onClick={addSongCallback}
            />
            <input 
                type="button" 
                id='undo-button' 
                value="⟲" 
                className={undoClass}
                onClick={() => {
                    if (canUndo){
                        undoCallback();
                    }
                }}
                //onClick={undoCallback}
            />
            <input 
                type="button" 
                id='redo-button' 
                value="⟳" 
                className={redoClass} 
                onClick={() => {
                    if (canRedo){
                        redoCallback();
                    }
                }}
                //onClick={redoCallback}
            />
            <input 
                type="button" 
                id='close-button' 
                value="&#x2715;" 
                className={closeClass} 
                onClick={() => {
                    if (canClose){
                        closeCallback();
                    } 
                  }}
                //onClick={closeCallback}
            />
        </div>
        )
    }
}