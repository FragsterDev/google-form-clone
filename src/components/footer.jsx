
function FooterText(){
    return (

        <>
            <div className="flex gap-4 flex-col footerText w-full md:w-[636px] max-w-[636px] p-1 mx-auto text-xs mt-2" style={{color: "rgb(128,135,126)"}}>
                <p>Never submit passwords through Google Forms</p>
                <p className="mx-auto">This content is neither created nor endorsed by Google. - <a href="#terms of service" className="underline">Terms of Service</a> - 
                <a href="" className="underline"> Privacy Policy </a></p>
                <p className="mx-auto">Does this form look suspicious? Report</p>
                <button className="mx-auto w-48 h-6 text-2xl mt-2 mb-7">Google Forms</button>
            </div>
        </>

    );
}


// eslint-disable-next-line react/prop-types
function Footer({clearForm}){

    return(
    <>
        <div className="footer flex justify-between w-full md:w-[636px] max-w-[636px] p-1 mx-auto mt-2 border-solid border">
            <div className="submit">
                <button className=" text-white p-1 w-24 rounded-md" style={{backgroundColor: 'rgb(42,137,12)'}}>Submit</button>
            </div>
            <div className="clear" style={{color: 'rgb(86,157,51)'}}>
                <button onClick={clearForm}>Clear form</button>
            </div>
        </div>
        <FooterText />
    </>
    );


}

export default Footer