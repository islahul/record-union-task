export default (initialState = {notes: []}, payload) => {
  let nextState;
  switch (payload.type) {
    case 'NOTEBOOK_DELETE_NOTE':
      nextState = Object.assign({}, initialState);
      const sliceIndex = nextState.notes.findIndex((note) => (
        note.timestamp === payload.note.timestamp
      ));
      nextState.notes = [...nextState.notes];
      nextState.notes.splice(sliceIndex, 1);
      return nextState;

    case 'NOTEBOOK_ADD_NOTE':
      nextState = Object.assign({}, initialState);
      nextState.notes = [...nextState.notes, payload.note];
      return nextState;

    case 'NOTEBOOK_SHOW_NOTE_IN_PAGE':
      nextState = Object.assign({}, initialState);
      nextState.notes.find((note) => (
        note.timestamp === payload.note.timestamp
      )).page_visible = true;
      return nextState;

    default:
      return initialState;
  }
};
