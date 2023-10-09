import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)

    const handelSocialLogin = (media) => {
        media()
        .then(res => console.log(res))
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