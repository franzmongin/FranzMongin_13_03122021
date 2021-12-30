import {
  changeRequestStatus,
  chargeUserInfos,
  disconnection,
} from "./userSlice";

/**
 * Thunk to make user profile GET request and store the result in redux store
 * @param {*} token
 * @returns
 */
export function editName(token, firstNameInput, lastNameInput) {
  return async (dispatch) => {
    try {
      console.log(firstNameInput, lastNameInput);
      let response = await fetch("http://localhost:3001/api/v1/user/profile", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: JSON.stringify({
          firstName: firstNameInput,
          lastName: lastNameInput,
        }),
      });
      if (!response.ok) {
        console.log(response);
        throw new Error(response.statusText);
      }
      const formattedResponse = await response.json();
      if (formattedResponse.status === 200) {
        dispatch(chargeUserInfos(formattedResponse.body));
        console.log(formattedResponse);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
}
