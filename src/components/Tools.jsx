import { useQuery } from "@tanstack/react-query";
import ToolsCard from "./ToolsCard";
import axios from "axios";
import Loader from "./Loader";

const Tools = () => {

    const { data, isLoading, isFetching } = useQuery({
        queryKey: ['tools'],
        queryFn: async () => {
            try {
                const res = await axios.get("https://raw.githubusercontent.com/Shakil066/Portfolio-data/main/tools.json");
                console.log(res, 'data');
                return res?.data
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error; // You may want to handle or log the error accordingly
            }
        }
    })

    console.log(data, 'data');

    if (isFetching) return <Loader></Loader>
    if (isLoading) return <Loader></Loader>


    return (
        <div className="w-[90%] lg:max-w-[1280px] mx-auto text-center mt-8">
            <h1 className="font-bold text-2xl my-2">All Tools</h1>
            <p className="text-sm mb-4">Expertized Skills Subtitle Asraf Shakil</p>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        data?.map((card, index) => <ToolsCard key={index} card={card}></ToolsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tools;