import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceCard = () => {
    const [card, setCard] = useState()
    const { id } = useParams()
    console.log(id)
    const cards = useLoaderData()
    console.log(cards)
    useEffect(() => {
        const findCard = cards?.find(card => card.id === id)
        setCard(findCard)
    }, [id, cards])
    const { name, img,  short_description } = card || {}
    return (
        <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-w-[1330px] mx-auto ">
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
                <p className="block font-sans text-sm font-normal py-2 leading-normal text-gray-700 antialiased opacity-75">
                    {short_description}
                </p>
                <button className="bg-purple-600 px-4 py-4 rounded hover:bg-fuchsia-600 text-white">
                    Booking Now--
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;