import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const SocialLogin = () => {
    const navigate = useNavigate()
    const { googleLogin } = useContext(AuthContext)

    const handelSocialLogin = (media) => {
        media()
        .then(() => {
            toast.success('User created successfully');
            navigate('/home')
        })
        .catch(error => console.log(error))

    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className=" flex gap-10">
                <button
                onClick={() => handelSocialLogin(googleLogin)}
                    className="btn btn-sm btn-neutral mx-auto">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;