

const Contact = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">subject</span>
                            </label>
                            <input type="text" placeholder="subject" name="subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea type="message" placeholder="message" name="mesage" className="input input-bordered"></textarea>
                        </div>
                        <div className="form-control mt-6 p-0">
                            <button className="btn btn-neutral">Submit</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
};

export default Contact;