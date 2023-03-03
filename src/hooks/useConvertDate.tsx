/* Custom hook to format ISO String date */

const useConvertDate = (created_at: string) => {
  // Create array from date object
  const dateArray = String(new Date(created_at)).slice(4, 15).split(" ");

  // Reorder array according to bizz requirments
  [dateArray[0], dateArray[1]] = [dateArray[1], dateArray[0]];

  // Convert array back to string **Example Output --> 23 Jul 2017**
  return dateArray.join(" ");
};

export default useConvertDate;
