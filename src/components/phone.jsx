/* eslint-disable react/prop-types */
function Phone({text, setText, error, setError}){



    const onInput = (e) => {
      const value = e.target.value;

      setText(value);

      if(!value){
        setError("This field cannot be empty.");
        return
      }
      else if(value.length !== 10){
        setError("Please enter a valid phone number having 10 digits");
        return
      }
      
      setError("");
    }

    return (
        <>
          <div className="name-container w-full md:w-[636px] max-w-[636px] bg-white rounded-lg p-6 mt-3 mx-auto flex flex-col gap-7 border-solid border">
    
            <p className="">Phone Number <span className='text-red-500'>*</span></p>
            <input type="number" className="name-input required placeholder:text-sm outline-none border-b-2 focus:border-green-600 w-1/2" placeholder='Your Answer'
            onChange={onInput} value={text}/>
            {error && <span className="text-xs text-red-500">{error}</span>}
          </div>
        </>
      )
}

export default Phone
