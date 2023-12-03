import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaKaggle } from "react-icons/fa";



const DetailsPage = () => {

    const { id } = useParams();

    const { data, isLoading } = useQuery({
        queryKey: ['tools'],
        queryFn: async () => {
            try {
                const res = await axios.get("https://raw.githubusercontent.com/Shakil066/Portfolio-data/main/projects.json");
                const filterData = res?.data?.filter(card => card?.id == id);
                // console.log(filterData, 'data data.....');
                return filterData || []
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }
        }
    })

    if (isLoading) return "loading...";

    console.log(data[0]?.details, 'details');

    return (

        <div className="w-[90%] mx-auto lg:w-[1280px]">
            <div>
                <div className="h-[500px] relative max-w-[1280px] mx-auto">
                    <img className="w-full h-full object-cover" src={data[0]?.photo} alt="image" />
                    <div className="h-[500px] w-[80%] mx-auto bg-[#00000090] absolute top-0 left-0 flex  flex-col items-center justify-center space-y-5">
                        <h1 className="text-center text-white text-2xl md:text-3xl lg:text-5xl font-bold">{data[0]?.title}</h1>
                        {/* <p className="text-sm md:text-lg lg:text-xl text-center text-white">{"Ali Asraf | Data Analyst"}</p> */}
                        {/* <Link to="/rooms" className="btn btn-secondary text-center" >Book Now</Link> */}
                    </div>
                </div>
            </div>
            <div>
                <div className="flex gap-3">
                    {/* github */}
                    {
                        data[0]?.github_url ?
                            <Link to={data[0]?.github_url} className="flex items-center my-2 font-bold bg-gray-600 w-fit text-white px-3 py-1 rounded-full">
                                <span className="mr-2 text-lg">Github</span>
                                <FaGithub className="text-xl"></FaGithub>
                            </Link>
                            :
                            ""
                    }
                    {
                        data[0]?.kaggle_url ?
                            <Link to={data[0]?.github_url} className="flex items-center my-2 font-bold bg-gray-600 w-fit text-white px-3 py-1 rounded-full">
                                <span className="mr-2 text-lg">Kaggle</span>
                                <FaKaggle className="text-xl"></FaKaggle>
                            </Link>
                            :
                            ""
                    }
                </div>
                <div>
                    <h2 className=" font-bold text-xl">Porject title: {data[0]?.title}</h2>
                </div>


                <div className="my-3">
                    <h2 className="text-xl font-bold">Project Details:</h2>
                    <div>
                        {/* product details */}
                        {
                            data[0]?.details?.map((detail, index) => <div key={index}>

                                <div className="my-1">
                                    <p>{index + 1}: {detail?.heading}</p>
                                    <ul className="list-disc ml-9">
                                        {
                                            detail?.items?.map((item, i) => <li key={i}>{item}</li>)
                                        }
                                    </ul>
                                </div>

                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;