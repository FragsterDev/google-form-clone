import { useState } from "react";
import Name from './components/name.jsx'
import Address from './components/Address.jsx'
import Email from './components/email.jsx'
import Phone from './components/phone.jsx'
import Comments from './components/comments.jsx'
import Footer from './components/footer.jsx'
import Top from './components/top.jsx'

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
        <>
            <Top />
            <Name text={name} setText={setName} error={nameError} setError={setNameError} />
            <Email text={email} setText={setEmail} error={emailError} setError={setEmailError} />
            <Address text={address} setText={setAddress} error={addressError} setError={setAddressError} />
            <Phone text={phone} setText={setPhone} error={phoneError} setError={setPhoneError} />
            <Comments text={comments} setText={setComments}/>
            <Footer clearForm={clearForm}/>
        </>
    );
}

export default Form;