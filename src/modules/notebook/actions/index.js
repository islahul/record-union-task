export const deleteNote = (note) => {
  return (dispatch) => {
    dispatch({
      type: 'NOTEBOOK_DELETE_NOTE',
      note
    });
  };
}
