import { useContext, useState } from "react"
import "./authStyle.css"
import { AuthContext } from "../../auth provider/AuthProvider"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

function Authentication() {

    const { handleRegistrationAuth,
        handleLoginAuth,
        loginWithGoogle
    } = useContext(AuthContext)
    const [status, setStatus] = useState(true)
    const navigate = useNavigate()

    const handleRegistration = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const confirmPassword = form.get('confirm-password')
        console.log(email, password, confirmPassword)

        if (password !== confirmPassword) {
            toast.error("incorrect password")
            console.log("incorrect password")
            return
        }


        handleRegistrationAuth(email, password)
        .then(() => {
                toast("account created successfully")
                setTimeout(() => {
                    setStatus(!status)
                }, 2200)
            })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')


        handleLoginAuth(email, password)
            .then(() => {
                toast.success("Successfully logged in")
                setTimeout(function () {
                    navigate("/")
                }, 2200);
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
    }

    return (
        <div>
            <section>
                {Array.from({ length: 212 }, (_, index) => (
                    <span key={index}></span>
                ))}

                <div className="signin">
                    {status ? <div className="content">
                        <h2>Sign Up</h2>
                        <form className="form" onSubmit={handleRegistration}>

                            <div className="inputBox">
                                <input type="emailz" required name="email" />
                                <i>Email</i>
                            </div>
                            <div className="inputBox">
                                <input type="password" required name="password" />
                                <i>Password</i>
                            </div>
                            <div className="inputBox">
                                <input type="password" required name="confirm-password" />
                                <i>Confirm Password</i>
                            </div>
                            <div className="links">
                                <a href="#" onClick={handleGoogleLogin}>Google</a>
                                <a href="#" onClick={() => setStatus(!status)} >Signin</a>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Sign up" />
                            </div>
                        </form>

                    </div>
                        :
                        <div className="content">
                            <h2>Sign In</h2>
                            <form className="form" onSubmit={handleLogin}>

                                <div className="inputBox">
                                    <input type="emailz" required name="email" />
                                    <i>Email</i>
                                </div>
                                <div className="inputBox">
                                    <input type="password" required name="password" />
                                    <i>Password</i>
                                </div>
                                <div className="links">
                                    <a href="#" onClick={handleGoogleLogin}>Google</a>
                                    <a href="#" onClick={() => setStatus(!status)}>Signup</a>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="Sign in" />
                                    <Toaster />
                                </div>
                            </form>

                        </div>}
                </div>
            </section>
        </div>
    )
}

export default Authentication