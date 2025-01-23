/* eslint-disable react/prop-types */
function Address({text, setText, error, setError}){

  // const [text, setText] = useState("");
  // const [error, setError] = useState("");

  const onInputChange = (e) => {
    const value = e.target.value;
    setText(value);
    if(!value.trim()){
      setError("This field cannot be empty")
    }
    else {
      setError("");
    }
  }

    return (
        <>
          <div className="name-container w-1/3 bg-white rounded-lg p-6 mt-3 mx-auto flex flex-col gap-7 border-solid border" style={{width: '636px'}}>
    
            <p className="">Address <span className='text-red-500'>*</span></p>
            <input type="text" className="name-input placeholder:text-sm outline-none focus:border-green-600 border-b-2 " placeholder='Your Answer'
            onChange={onInputChange} value={text}/>
            {error && <span className = "text-xs text-red-500">{error}</span>}
          </div>
        </>
      )
}

export default Address