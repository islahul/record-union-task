export const addNote = (note) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'NOTEBOOK_ADD_NOTE',
        note: Object.assign(note, {page_visible: false})
      });
    }, 1000);
    setTimeout(() => {
      dispatch({
        type: 'NOTEBOOK_SHOW_NOTE_IN_PAGE',
        note
      });
    }, 2000);
  };
}
