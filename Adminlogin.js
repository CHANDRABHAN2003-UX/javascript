import { useState } from "react";
import { app } from "../../Firebase";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export default function Adminlogin(){
    const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const handleForm=(e)=>{
  e.preventDefault()
  const auth=getAuth(app)
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredentails)=>{
    console.log(userCredentails);
    
    toast.success("User register successfully")
  })
  .catch((err)=>{
    
    toast.error(err.message)
  })
}
const signUpgoogle=()=>{
  const provider=new GoogleAuthProvider()
  const auth=getAuth(app)
  signInWithPopup(auth,provider)
  .then((userCredentails)=>{
    console.log(userCredentails);
  }).catch((err)=>{
    toast.error(err.message)
  })

}
    return(
        <>
         <div className="container-fluid page-header py-5 mb-5">
          <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Login Here!!!</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Service</li>
              </ol>
            </nav>
          </div>
        </div>
       
       
        
         <div className="container bg-light overflow-hidden px-lg-0 mx-auto" style={{margin: '6rem 0'}}>
          <div className="container contact px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div className="col-lg-12 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
                <div className="p-lg-5 ps-lg-0">
                  <div className="section-title text-start">
                 
                  </div>
                
                  <form  onSubmit={handleForm}>
                  <h1 className="display-5 mb-4 text-center">Login</h1>
                    <div className="row g-3 mt-2 ">
                      <div className="col-md-6 mx-auto">
                        <div className="form-floating">
                          <input type="email" className="form-control" id="email" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)
                           
                          }}

                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                     
                      
                     
                    </div>
                    <div className="row g-3 mt-2 ">
                      <div className="col-md-6 mx-auto">
                        <div className="form-floating">
                          <input type="password" className="form-control" id="password" placeholder="Your Password" value={password} onChange={(e)=>{setPassword(e.target.value)
                            console.log(password)
                          }} />
                          <label htmlFor="password">Your Password</label>
                        </div>
                        </div>
                      </div>
                      <div className="row g-3 mt-1">
                      <div className="col-2 mx-auto">
                        <button className="btn btn-primary w-100 py-3 " type="submit">Login</button>
                        </div>
                      </div>
                      <div className="row g-3 mt-1">
                      <div className="col-2 mx-auto">
                        OR
                      </div>
                      </div>
                      <button className="btn btn-primary" onClick={signUpgoogle}>Sign up with Google</button>

                  </form>
                </div>
              </div>
              
            </div>
          </div>
        </div>
       
       
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>
    
  
        </>
    )
}