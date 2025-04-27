const passLowerRegex = /[a-z]/;
const passUpperRegex = /[A-Z]/;
const passNumberRegex = /[0-9]/;
const passSpecialCharRegex = /[!@#$%^&*]/;


const validate = ({email,petName,password,confpassword}) =>{

    console.log(email , petName , password , confpassword)

  if (password.length < 8) return "Password should be at least 8 characters";

  if (!passLowerRegex.test(password)) return "Password must contain a lowercase letter";
  if (!passUpperRegex.test(password)) return "Password must contain an uppercase letter";
  if (!passNumberRegex.test(password)) return "Password must contain a number";
  if (!passSpecialCharRegex.test(password)) return "Password must contain a special character";

  if (password !== confpassword) return "Confirm password doesn't match";

  return "success";


}

export default validate ;
