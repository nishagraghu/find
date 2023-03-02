 const phonNumberFormat = (phoneNumber : string) =>{
    const formattedNumber =  phoneNumber.substring(0, phoneNumber.length-10)+ " " + phoneNumber.substring(phoneNumber.length-10,phoneNumber.length) 
  return formattedNumber;
}
export default phonNumberFormat;