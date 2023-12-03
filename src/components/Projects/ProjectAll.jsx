import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../Loader';

const ProjectAll = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['projectall'],
        queryFn: async () => {
            try {
                const res = await axios.get("https://raw.githubusercontent.com/Shakil066/Portfolio-data/main/projects.json");
                // if (id != 0) {
                //     const filterData = res?.data?.filter(card => card?.project_id == id);
                //     return filterData || [];
                // }
                return res?.data;
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }
        }
    })

    if (isLoading) return <Loader></Loader>

    return (
        <div className='w-[90%] max-auto lg:w-[1280px] mx-auto my-8'>
            <div>
                <h2 className='font-bold text-2xl my-2'><span className='mr-2'>All Projects</span>
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    data?.map((card, index) => <ProjectCard key={index} card={card}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default ProjectAll;