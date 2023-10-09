
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
import SocialLogin from '../../SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';


const Register = () => {
    const { createUser } = useAuth()

    // get field values
    const handelSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const password = e.target.password.value
        const email = e.target.email.value
        console.log(name, email, password)

        // validation
        if (password.length < 6){
            toast.error('password must be at least 6 character')
            return
        }

        // creating a new user
        createUser(email,password)
        .then(res => console.log(res.user))
        .catch(error => console.log(error))


        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="Your Name" name="name" required className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6 p-0">
                            <button className="btn btn-neutral">Register</button>
                        </div>
                        <h2 className="text-sm">
                            Alredy Have An Account? <Link to="/login" className="label-text-alt link link-hover text-sm">Please Login</Link>
                        </h2>
                        <SocialLogin />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;