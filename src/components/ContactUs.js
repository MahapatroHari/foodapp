const ContactUs = () => {
    return <div className="h-screen text-center">
        <div className="mt-5">
            <h1 className="font-extrabold text-3xl">Contact Us</h1>
        </div>
        <div className="mt-5 flex gap-4 justify-center">
            <input className="searchBox border-2 border-black- rounded-lg text-center p-2" placeholder="Name"/>
            <input className="searchBox border-2 border-black- rounded-lg text-center p-2" placeholder="Phone"/>
        </div>
        <div className="mt-5"> 
            <button className="bg-black text-white p-2 rounded-lg">Submit</button>
        </div>
    </div>
}


export default ContactUs;