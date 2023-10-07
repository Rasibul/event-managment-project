import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ServiceCard = ({service}) => {
    const [servicesCard, setServiceCard] = useState();
    const  id  = useParams();
    console.log(id)
    const cards = useLoaderData();

    useEffect(() => {
        const findSingelCard = cards?.find(servicesCard => servicesCard.id === id)
        setServiceCard(findSingelCard)
    }, [id, cards])

    const {  name, img, price, title } = service || {}
    return (
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                    src={img}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        Event Name : {name}
                    </p>
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                    {title}
                </p>
                <p className="block font-bold text-sm py-2 leading-normal  ">
                    Event Cost:  {price}$
                </p>
            </div>
            <div className="p-6 pt-0">

            </div>
        </div>
    );
};

export default ServiceCard;