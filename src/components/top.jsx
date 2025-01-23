import '../index.css'

function TopImage(){
  return (
    <>
    <div className="top-image w-1/3 rounded-3xl mt-3 mx-auto" style={{width: '636px'}}>
      <img src="\header image.png" alt="Header Image" className="rounded-lg"/>
    </div>
    </>
  );
}

function Top() {

  return (
    <>
      <TopImage />
      <div className="title-container w-1/3 rounded-lg mt-3 bg-white mx-auto border-solid border" style={{width: '636px'}}>
      <div className='h-2 bg-green-700 rounded-t-lg'></div>
        <p className="text-3xl px-5 pt-5">Contact information</p>
        <hr className="my-4 border-gray-300 mx-0 w-full p-0 m-0"/>
        <p className='text-red-500 text-xs px-5 pb-5'>* indicates required question</p>
      </div>
    </>
  )
}

export default Top