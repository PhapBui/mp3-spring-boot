export const CreeateScrollProperties = (e: React.UIEvent<HTMLElement>): number[] => {
  const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
  const height = clientHeight / 5;
  const percent = scrollTop / (scrollHeight - clientHeight);

  let newTop = (clientHeight - height) * percent;
  newTop = Math.min(newTop, clientHeight - height);
  return [height, newTop];
};
/**
 * newtop:397
 * clientHeight:999
 * scrollTop:657
 * scrollHeight:1656
 *
 */
