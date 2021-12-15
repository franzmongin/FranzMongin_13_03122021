import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { chargeProfile } from "../../features/user/chargeProfile";
import { editName } from "../../features/user/editName";

function UserPage() {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  let isConnected = useSelector((state) => state.user.connected);
  let requestStatus = useSelector((state) => state.user.requestStatus);
  const { firstName, lastName } = useSelector((state) => state.user.userInfos);
  const [firstNameInput, setfirstNameInput] = useState(firstName);
  const [lastNameInput, setlastNameInput] = useState(lastName);
  const [editNameStatus, seteditNameStatus] = useState(false);
  const handleOpenEdit = () => {
    seteditNameStatus(!editNameStatus);
  };

  const handleSubmitEditName = () => {
    dispatch(editName(token, firstNameInput, lastNameInput));
    seteditNameStatus(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null || !isConnected) {
      navigate("/signin");
    }
    dispatch(chargeProfile(token));
  }, [dispatch, isConnected, navigate, token]);
  return (
    <div
      className={
        editNameStatus ? `user-page page editing-name` : `user-page page`
      }
    >
      <NavBar isConnected={isConnected} />
      {requestStatus === "end" && (
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {!editNameStatus ? (
                <>
                  <span className="name">{`${firstName} ${lastName}`}</span>
                  <br />
                  <button
                    className="edit-button"
                    onClick={() => handleOpenEdit()}
                  >
                    Edit Name
                  </button>
                </>
              ) : (
                <div className="edit-name-form">
                  <div className="edit-name-form-inputs">
                    <input
                      type="text"
                      name="first-name-input"
                      placeholder={firstName}
                      onChange={(e) => setfirstNameInput(e.target.value)}
                    />
                    <input
                      type="text"
                      name="last-name-input"
                      placeholder={lastName}
                      onChange={(e) => setlastNameInput(e.target.value)}
                    />
                  </div>
                  <div className="edit-name-form-buttons">
                    <button
                      className="save-name-button"
                      onClick={() => handleSubmitEditName()}
                    >
                      Save
                    </button>
                    <button
                      className="cancel-edit-button"
                      onClick={() => seteditNameStatus(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </h1>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
      )}
      <Footer />
    </div>
  );
}

export default UserPage;
