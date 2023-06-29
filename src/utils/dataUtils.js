export const GetMonthName = (num) => {
  const date = new Date(1900, num - 1, 1);

  return date.toLocaleString('dafeult', {
    month: 'short',
  });
}