
const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
const passLowerRegex = /[a-z]/;
const passUpperRegex = /[A-Z]/;
const passNumberRegex = /[0-9]/;
const passSpecialCharRegex = /[!@#$%^&*]/;
const phoneRegex = /[6-9]{1}[0-9]{9}/;

const validate = ({firstName,lastName,date,email,password,confirmPass,phone}) => {

    if(phone.length != 10)return "Phone number is not 10 digits";
    if(!phoneRegex.test(phone))return "Not proper Indian mobile number";
  
  if (!mailRegex.test(email)) return "Not a proper email";



  if (password.length < 8) return "Password should be at least 8 characters";

  if (!passLowerRegex.test(password)) return "Password must contain a lowercase letter";
  if (!passUpperRegex.test(password)) return "Password must contain an uppercase letter";
  if (!passNumberRegex.test(password)) return "Password must contain a number";
  if (!passSpecialCharRegex.test(password)) return "Password must contain a special character";

  if (password !== confirmPass) return "Confirm password doesn't match";



  return "success";
};

export default validate;
