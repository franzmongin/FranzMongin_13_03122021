import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { chargeProfile } from "../../features/user/chargeProfile";

function UserPage() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  let navigate = useNavigate();
  let isConnected = useSelector((state) => state.user.connected);
  let requestStatus = useSelector((state) => state.user.requestStatus);
  const { firstName, lastName } = useSelector((state) => state.user.userInfos);
  const [firstNameInput, setfirstNameInput] = useState(firstName);
  const [lastNameInput, setlastNameInput] = useState(lastName);
  const [editName, seteditName] = useState(false);
  const handleOpenEdit = () => {
    seteditName(!editName);
  };

  const handleSubmitEditName = (token) => {
      
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null || !isConnected) {
      navigate("/signin");
    }
    dispatch(chargeProfile(token));
  }, [dispatch, isConnected, navigate, token]);
  return (
    <div className="user-page page">
      <NavBar />
      {requestStatus === "end" && (
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {!editName ? (
                <span className="name">{`${firstName} ${lastName}`}</span>
              ) : (
                <>
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
                </>
              )}
            </h1>
            {!editName ? (
              <button className="edit-button" onClick={() => handleOpenEdit()}>
                Edit Name
              </button>
            ) : (
              <>
                <button
                  className="save-name-button"
                  onClick={() => handleSubmitEditName()}
                >
                  Save
                </button>
                <button
                  className="cancel-edit-button"
                  onClick={() => seteditName(false)}
                >
                  Cancel
                </button>
              </>
            )}
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
