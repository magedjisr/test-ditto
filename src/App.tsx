import dittoPay from "./assets/DittoPay.png";
import "./App.css";
import TellUsAboutYou from "./components/TellUsAboutYou";
import { Route, useLocation } from "wouter";
import AFewMoreQuestions from "./components/AFewMoreQuestions";
import PhoneNumber from "./components/PhoneNumber";
import VerificationCode from "./components/VerificationCode";
import BankLinking from "./components/BankLinking";
import AccountDetails from "./components/AccountDetails";
import Login from "./components/Login";
import "./i18n";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface AppContextProps {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

function App() {
  const [location] = useLocation();
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [variant, setVariant] = useState("base");

  const onLoginPage = location.includes("login");

  return (
    <>
      <select
        className="toggle-variant"
        onChange={() => {
          setVariant(variant === "base" ? "portuguese---br-sample" : "base");
        }}
      >
        Switch to {variant === "base" ? "Portuguese" : "English"}
        <option value="base">English</option>
        <option value="portuguese---br-sample">Portuguese</option>
      </select>
      <AppContext.Provider
        value={{ firstName, setFirstName, phoneNumber, setPhoneNumber }}
      >
        <img
          className={onLoginPage ? "ditto-login-logo" : "ditto-logo"}
          src={dittoPay}
        />
        <Route path="/" component={TellUsAboutYou} />
        <Route path="/a-few-more-questions" component={AFewMoreQuestions} />
        <Route path="/phone-number" component={PhoneNumber} />
        <Route path="/verification-code" component={VerificationCode} />
        <Route path="/bank-linking" component={BankLinking} />
        <Route path="/account-details" component={AccountDetails} />
        <Route path="/login" component={Login} />
      </AppContext.Provider>
    </>
  );
}

export default App;
