import { useLoaderData } from "react-router-dom";
import Oraganiger from "../../Componenet/Oraganiger/Oraganiger";


const About = () => {
    const oraganigers = useLoaderData()
    console.log(oraganigers)
    return (
        <>
            <h2 className="text-6xl font-bold text-center mt-4 mb-4 text-purple-600">About Us</h2>
            <div className="hero  max-w-[1330px] mx-auto ">
                <div className="hero-content flex-col gap-10 lg:flex-row">
                    <img src="https://i.ibb.co/tJpkj8T/about-us.jpg" className="max-w-md rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">Reasons why choose us</h1>
                        <h1 className="text-4xl font-bold">Best Event manager</h1>
                        <p className="py-6">An event management company is a specialized organization that offers professional services to plan, organize, and execute a wide range of events and gatherings on behalf of clients. These events can vary in scope and nature, including corporate meetings, conferences, weddings, birthday parties, trade shows, product launches, charity fundraisers, and much more. The primary goal of an event management company is to ensure that every aspect of an event is meticulously planned and flawlessly executed to meet the client objectives and create a memorable experience for attendees.</p>

                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-center mt-4 mb-4 text-purple-600">Meet the Organizers</h2>
                <h2 className="text-xl  text-center mb-8">Meet the brains behind all the actions</h2>
                <div className="grid grid-cols-4 gap-5 mb-8">
                    {
                        oraganigers?.map(oraganiger => <Oraganiger key={oraganiger.id} oraganiger={oraganiger}></Oraganiger>)
                    }
                </div>
            </div>
        </>
    );
};

export default About;
