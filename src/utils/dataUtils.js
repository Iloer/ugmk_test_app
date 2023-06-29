export const GetMonthName = (num) => {
  const date = new Date();
  date.setMonth(num - 1);

  return date.toLocaleString('dafeult', {
    month: 'short',
  });
}