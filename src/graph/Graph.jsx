import { useRef, useEffect } from "react";

import { GraphCard } from "./GraphCard";
import radishData from "../data/RadishData.js"
import Chart from "./Chart";

export function Graph(props) {

    const scrollerRef = useRef(null);

    useEffect(() => {
        scrollerRef.current.scrollLeft = scrollerRef.current.scrollWidth;
    }, [scrollerRef]);

    return (
        <>
            <div ref={scrollerRef} style={{scrollbarColor: "dark"}} className="h-200 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-950 p-4 overflow-x-auto overflow-y-hidden">

                <div className="flex gap-4 mb-4">
                    {radishData.reverse().map((update, index) => (
                        <GraphCard
                            key={"update_" + index}

                            date={update.date}
                            supermarket={update.supermarket}
                            countryOfOrigin={update.countryOfOrigin}
                            tasteScore={update.tasteScore}
                            previousTasteScore={radishData[index-1] ? radishData[index-1].tasteScore : -1}
                            spiceScore={update.spiceScore}
                            size={update.size}
                            image={update.image}
                            notes={update.notes}
                            order={index}
                        />
                    ))}
                </div>

                <div className={"bg-zinc-800 rounded-lg"} style={{width: radishData.length * 332, height: "200px"}}>
                <Chart
                    radishData={radishData}
                />
                </div>

            </div>
            
        </>
    )
}