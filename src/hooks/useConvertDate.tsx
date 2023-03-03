const date = new Date("2018-08-27T23:11:47Z");
// Example Output
// 25 Jan 2011

const useConvertDate = () => {
  console.log(date.toString().slice(3, 15));

  const stringDate = date.toString().slice(3, 15);

  for (let i = 0; i < stringDate.length - 5; i++) {}

  return date.toString().slice(3, 15);
};

export default useConvertDate;
