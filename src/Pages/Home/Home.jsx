import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner/Banner";
import Service from "../../Componenet/Service/Service";


const Home = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-6xl font-bold text-center mt-4 ">Our Services</h2>
            <div className="grid sm:grid-cols-1 p-5 md:grid-cols-3 gap-4">
                {
                    services?.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Home;