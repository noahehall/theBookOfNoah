export default function blah (state = {}, action) {
  switch (action.type) {
    case 'BLAH':
      return Object.assign({}, state, {
        blah: action.data
      });

    default:
      return state
  }
}
