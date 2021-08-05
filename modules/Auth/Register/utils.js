import { Auth } from "aws-amplify";

export async function signUp(username, password, email) {
  //const { username, password, email } = values;
  try {
    const response = await Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        //     phone_number, // optional - E.164 number convention
        //     // other custom attributes
      },
    });
    console.log(response);
  } catch (error) {
    console.log("error signing up:", error);
  }
}
