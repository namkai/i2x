export default function ({ recording }) {
  return {
    list: recording.list,
    pending: recording.pending,
    error: recording.error,
  };
}
