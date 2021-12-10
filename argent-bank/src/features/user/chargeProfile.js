import { chargeUserInfos } from "./userSlice";
export function chargeProfile(token) {
  return async (dispatch, getState) => {
    try {
      console.log(`Bearer ${token}`);
      let response = await fetch("http://localhost:3001/api/v1/user/profile", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
      });
      console.log(response);
      const formattedResponse = await response.json();
      //   console.log(formattedResponse);
      console.log(formattedResponse.body);
      if (formattedResponse.status === 200) {
        dispatch(chargeUserInfos(formattedResponse.body));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
