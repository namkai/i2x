export default function (state) {
  console.log(`i' the state!`, state)
  return {
    list: state.recording.list,
    pending: state.recording.pending,
    error: state.recording.error,
  };
}
