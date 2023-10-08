

const Oraganiger = ({oraganiger}) => {
    const {name,img,title} = oraganiger || {}
    return (
        <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4   overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 ">
          <img src={img} alt="profile-picture" />
        </div>
        <div className=" text-center py-4">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {name}
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            {title}
          </p>
        </div>
      </div>
    );
};

export default Oraganiger;