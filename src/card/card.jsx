/* eslint-disable react/prop-types */
function Card({text, setText, error, setError, fieldName, required}) {

    const emptyError = "This field cannot be empty";
    const emailError = "Please enter a valid email address";
    const phoneError = "Please enter a valid phone number having 10 digits";

    const handleInputChange = (e) => {
      const value = e.target.value;
      setText(value);

      if(required && !value.trim()){
        setError(emptyError);
        return
      }

      if (fieldName === "Email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setError(emailError);
            return;
        }
      }

      else if (fieldName === "Phone"){
        if (value.length !== 10 || isNaN(value)){
          setError(phoneError);
          return;
        }
      }
      setError("");
    }


    return (
      <>
        <div className="name-container md:w-[636px] max-w-[636px] bg-white rounded-lg p-6 mt-3 mx-auto flex flex-col gap-7 border-solid border">
  
          <p className="">{fieldName}{required&&<span className='text-red-500'> *</span>}</p>
          <input type="text" className="name-input placeholder:text-sm outline-none focus:border-green-600 border-b-2 w-1/2" placeholder='Your Answer'
          value={text} onChange={handleInputChange}/>
          {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
      </>
    );

}
export default Card
  