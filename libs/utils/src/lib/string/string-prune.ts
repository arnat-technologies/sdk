/*
  prune('when shall we three meet again', 7); // 'when...'
  prune('when shall we three meet again', 7, ' (more)'; // 'when (more)'
  prune('when shall we', 15,); // 'when shall we'
  prune('when shall we', 15, ' (etc)'); // 'when shall we'
  prune('when shall we', 7, ' (more)'); // ' (more)'
*/

export default function prune(str, length?, end?) {
  if (length == null || length >= str.length) {
    return str;
  }
  if (end == null) {
    end = '...';
  }
  const remnantPlusOne = str.slice(0, Math.max(0, length - end.length) + 1);
  const lastSpace = Math.max(0, remnantPlusOne.lastIndexOf(' '));
  return remnantPlusOne.slice(0, lastSpace) + end;
}
