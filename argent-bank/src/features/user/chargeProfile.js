import {
  changeRequestStatus,
  chargeUserInfos,
  connection,
  disconnection,
} from "./userSlice";

/**
 * Thunk to make user profile GET request and store the result in redux store
 * @param {*} token
 * @returns
 */
export function chargeProfile(token) {
  return async (dispatch) => {
    try {
      dispatch(changeRequestStatus("begin"));
      let response = await fetch("http://localhost:3001/api/v1/user/profile", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const formattedResponse = await response.json();
      if (formattedResponse.status === 200) {
        dispatch(chargeUserInfos(formattedResponse.body));
        dispatch(changeRequestStatus("end"));
        dispatch(connection());
      } else {
        dispatch(disconnection());
      }
    } catch (error) {
      console.log(error);
    }
  };
}
