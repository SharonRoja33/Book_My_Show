import React from 'react'

//component
import Poster from '../components/Poster/poster.component';
import PlaysFilters from '../components/PlaysFilters/PlaysFilters.component';


export const Plays = () => {
    return (
        <>
           <div className="container mx-auto px-4">
               <div className="w-full flex lg:flex-row-reverse">
                   <div className="lg:w-3/4">
                    <h2 className="text-2xl font-bold">Plays in Bengaluru</h2>
                    <div className="flex flex-wrap ">
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster 
                                src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-digital-theatre-fest-by-enacte-rage-bookmyshow-0-2021-8-3-t-1-40-11.jpg"
                                title="Framroze Mansion (14th - 16th Aug)"
                                subtitle="Hindi -> ₹199"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster 
                                src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-digital-theatre-fest-by-enacte-rage-bookmyshow-0-2021-8-3-t-1-40-11.jpg"
                                title="Framroze Mansion (14th - 16th Aug)"
                                subtitle="Hindi -> ₹199"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster 
                                src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-digital-theatre-fest-by-enacte-rage-bookmyshow-0-2021-8-3-t-1-40-11.jpg"
                                title="Framroze Mansion (14th - 16th Aug)"
                                subtitle="Hindi -> ₹199"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster 
                                src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-digital-theatre-fest-by-enacte-rage-bookmyshow-0-2021-8-3-t-1-40-11.jpg"
                                title="Framroze Mansion (14th - 16th Aug)"
                                subtitle="Hindi -> ₹199"
                            />
                        </div>
                    </div>
                   </div>
               
                   <div className="lg:w-3/12 ">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlaysFilters 
                                title="Date"
                                tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                            <PlaysFilters 
                                title="Language"
                                tags={["Tamil", "Telugu", "Hindi"]}
                            />
                        </div>
                   </div>
               </div>
           </div>
        </>
    );
};

export default Plays;