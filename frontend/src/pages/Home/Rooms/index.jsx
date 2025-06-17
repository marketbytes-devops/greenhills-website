import { useState, useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StripHtml from "../../../components/stripHTML";
import { fetchRooms, fetchRoomsTitle } from "../../../helpers/apiService";

const Rooms = () => {
    const [roomCards, setRoomCards] = useState([]);
    const [titleData, setTitleData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        Promise.all([fetchRooms(), fetchRoomsTitle()])
            .then(([roomsResponse, titleResponse]) => {
                const sortedRoomCards = (roomsResponse.data || []).sort((a, b) => 
                    (a.order || 0) - (b.order || 0)
                );
                setRoomCards(sortedRoomCards);
                setTitleData(titleResponse.data && titleResponse.data.length > 0 ? titleResponse.data[0] : null);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!roomCards || roomCards.length === 0) return <div></div>;

    return (
        <>
            <div className="flex items-center justify-between">
                {titleData && (
                    <div className="space-y-6">
                        {titleData.title && (
                            <div dangerouslySetInnerHTML={{ __html: titleData.title }} />
                        )}
                        {titleData.description && (
                            <div dangerouslySetInnerHTML={{ __html: titleData.description }} />
                        )}
                    </div>
                )}
                <button
                    className="flex group items-center justify-center space-x-2 bg-black text-md text-white font-medium w-32 xl:w-36 h-10 xl:h-12 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                >
                    See More
                </button>
            </div>

            <div className="space-y-8 md:space-y-16 mt-8 lg:mt-10">
                {roomCards.map((card) => (
                    <div
                        className="w-full flex flex-col md:flex-row card gap-4 md:gap-6 h-auto md:h-[300px]"
                        key={card.id}
                    >
                        <div className="w-full md:w-1/2">
                            <div className="flex items-start gap-4">
                                <div className="w-[93%]">
                                    <img
                                        src={card.image || '/placeholder-image.jpg'}
                                        alt={<StripHtml html={card.title || 'No Title'} />}
                                        className="w-full bg-cover h-[200px] md:h-[300px] rounded-lg"
                                        onError={(e) => { e.target.src = '/placeholder-image.jpg'; }}
                                    />
                                </div>
                                <div
                                    className="w-[7%] text-center"
                                    dangerouslySetInnerHTML={{ __html: card.index || 'N/A' }}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <div
                                dangerouslySetInnerHTML={{ __html: card.title || 'No Title' }}
                            />
                            <div
                                dangerouslySetInnerHTML={{ __html: card.description || 'No Description' }}
                            />
                            <button className="group">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="-rotate-45 group-hover:rotate-0 transition-all duration-300 text-gray-500 text-xl md:text-2xl"
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Rooms;