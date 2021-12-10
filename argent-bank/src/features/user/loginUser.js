import { connection } from "./userSlice";
export function loginUser(usernameInput, passwordInput) {
  return async (dispatch, getState) => {
    try {
      let response = await fetch("http://localhost:3001/api/v1/user/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: usernameInput,
          password: passwordInput,
        }),
      });
      const formattedResponse = await response.json();
      console.log(formattedResponse);
      if (formattedResponse.status === 200) {
        console.log(formattedResponse.body.token);
        dispatch(connection(formattedResponse.body.token));
        console.log(getState().user.connected);
        localStorage.setItem("token", formattedResponse.body.token);
      } else {
        throw new Error(formattedResponse.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
}
