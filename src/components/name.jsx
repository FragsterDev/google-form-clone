/* eslint-disable react/prop-types */
function Name({text, setText, error, setError}) {

  const handleInputChange = (e) => {
    const value = e.target.value;
    setText(value);

    // Validation logic: check if the input is empty
    if (!value.trim()) {
      setError("This field cannot be empty");
    } else {
      setError(""); // Clear error if input is valid
    }
  };

  return (
    <>

      <div className="name-container w-full md:w-[636px] max-w-[636px] bg-white rounded-lg p-6 mt-3 mx-auto flex flex-col gap-7 border-solid border">

        <p className="">Name <span className='text-red-500'>*</span></p>
        <input type="text" className="name-input placeholder:text-sm outline-none focus:border-green-600 border-b-2 w-1/2" placeholder='Your Answer'
        value={text} onChange={handleInputChange}/>
        {error && <span className="text-red-500 text-xs">{error}</span>}
      </div>
    </>
  )
}

export default Name
