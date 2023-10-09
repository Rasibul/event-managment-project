import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner/Banner";
import Service from "../../Componenet/Service/Service";
import LikeUs from "../../Componenet/LikeUs/LikeUs";
import EventPlanning from "../../Componenet/EvemntPlanning/EventPlanning";






const Home = () => {
    const services = useLoaderData()
    // console.log(services)
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-6xl font-bold text-center text-purple-600  mt-4 ">Our Services</h2>
            <div className="grid sm:grid-cols-1 p-5 md:grid-cols-3 gap-10">
                {
                    services?.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <LikeUs></LikeUs>
            <EventPlanning></EventPlanning>
           
        </div>
    );
};

export default Home;