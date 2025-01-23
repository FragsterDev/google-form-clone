// eslint-disable-next-line react/prop-types
function Comments({text, setText}){

  const onInput = (e) => {

    const value = e.target.value

    setText(value);
  }

    return (
        <>
          <div className="name-container w-1/3 bg-white rounded-lg p-6 mt-3 mx-auto flex flex-col gap-7 border-solid border" style={{width: '636px'}}>
    
            <p className="">Comments</p>
            <input value={text} type="text" className="name-input placeholder:text-sm outline-none focus:border-green-600 border-b-2" placeholder='Your Answer' onChange={onInput}/>
          </div>
        </>
      )
}

export default Comments
