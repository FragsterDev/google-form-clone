import { useState } from "react";
import Footer from './components/footer.jsx'
import Top from './components/top.jsx'
import Card from "./card/card.jsx";

function Form(){

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const [comments, setComments] = useState("");

    const clearForm = () => {
        setName("");
        setNameError("")
        setEmail("");
        setEmailError("")
        setAddress("");
        setAddressError("")
        setPhone("");
        setPhoneError("")
        setComments("")
    }

    return(
            <div className="pb-5 pl-5 pr-5">
                <Top />
                <Card text={name} setText={setName} error={nameError} setError={setNameError} fieldName={'Name'} required={true}/>
                <Card text={email} setText={setEmail} error={emailError} setError={setEmailError} fieldName={'Email'} required={true}/>
                <Card text={address} setText={setAddress} error={addressError} setError={setAddressError} fieldName={'Address'} required={true}/>
                <Card text={phone} setText={setPhone} error={phoneError} setError={setPhoneError} fieldName={'Phone'} required={true}/>
                <Card text={comments} setText={setComments} error={""} setError={setNameError} fieldName={'Comments'} required={false}/>
                <Footer clearForm={clearForm}/>
            </div>
    );
}

export default Form;
