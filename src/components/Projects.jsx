import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const Projects = () => {

    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ['tools'],
        queryFn: async () => {
            try {
                const res = await axios.get("./tools.json");
                console.log(res, 'data');
                return res?.data
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error; // You may want to handle or log the error accordingly
            }
        }
    })

    if (isLoading) return <Loader></Loader>


    return (
        <div>
            All Data ...
        </div>
    );
};

export default Projects;