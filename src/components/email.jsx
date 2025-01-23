/* eslint-disable react/prop-types */
function Email({text, setText, error, setError}){

  const handleInputChange = (e) => {
    const value = e.target.value;

    setText(value);

    if(!value.trim()){
      setError('This field cannot be empty')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    if (!emailRegex.test(value)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
  }

  return (
      <>
        <div className="name-container w-1/3 bg-white rounded-lg p-6 mt-3 mx-auto flex flex-col gap-7 border-solid border" style={{width: '636px'}}>
  
          <p className="">Email <span className='text-red-500'>*</span></p>
          <input type="text" className="name-input placeholder:text-sm outline-none focus:border-green-600 border-b-2 w-1/2" placeholder='Your Answer'
          onChange={handleInputChange} value={text}
          />
          {error && <span className="text-red-500 text-xs ">{error}</span>}
        </div>
      </>
    )
}

export default Email
