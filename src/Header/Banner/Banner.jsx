

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/k4JnR7F/slide-img-04.jpg')] bg-cover bg-center">
            <section className="py-28 sm:py-40  flex flex-col justify-center items-center gap-4 ">
                <h1 className="font-bold text-2xl md:text-5xl text-center text-purple-800">Let us plan your <br /> unforgettable event</h1>
                <p className="text-sm  text-center font-bold text-[#000]">Relax and watch how memorable your next event will be.</p>
                        <button type="submit" className="px-3 py-2 text-white bg-purple-600 rounded font-semibold block mx-auto ">Get Started</button>
            </section>
        </div>
    );
};

export default Banner;