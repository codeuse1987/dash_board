import { useEffect, useState } from "react";
import { ComProps } from "../model/comProps";
import Project from "./project"
import { ProjectModel } from "../model/ProjectModel";
import axios from "axios";
import projectData from "../data/projects.json"
import announcementData from "../data/announcement.json";
import trendData from "../data/trend.json";
import Announcement from "./announcement";
import Trend from "./trend";


function Details(props: ComProps<ProjectModel>) {
    useEffect(() => { handleData(); }, [])

    const { classString } = props;
    const [search, setSearch] = useState<string>();
    // const [data, setData] = useState<ProjectModel[]>([]);
    // function handleInput() {

    // }

    function handleData() {
        axios.get('../data/projects.json')
            .then((res) => {
                console.log(res.data);
                // setData(res);
            })
            .catch(function (error) {
                console.log(error.toJSON());
            });
    }



    return (
        <>
            <div className={`min-h-full ${classString}`}>
                <div className="flex flex-col  bg-slate-200">
                    <div className="flex flex-row justify-between">
                        <div className="flex  max-w-sm bg-white rounded-lg border-2 my-2 mx-2">
                            <div className="content-center">
                                <input type="search" className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                                    placeholder="search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                            </div>
                            <div>
                                <button type="submit" className="flex items-center bg-blue-500 justify-center text-white rounded-r-lg"
                                    // class="(search.length > 0) ? 'bg-purple-500' : 'bg-gray-500 cursor-not-allowed'"
                                    disabled={search?.length === 0}>
                                    <svg className="w-5 h-5 m-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <h1 className="text-2xl my-2 mx-2">Happy</h1>
                        </div>
                    </div>
                    <div className="px-3 py-2 flex flex-row justify-between ">
                        <p className="text-md">
                            Hi Happy, Welcome Back!!
                        </p>
                        <div className="flex flex-row justify-evenly gap-2">
                            <button className="rounded-lg bg-green-300 px-3"> New</button>
                            <button className="rounded-lg bg-green-300 px-3"> Uplaod</button>
                            <button className="rounded-lg bg-green-300 px-3"> Share</button>
                        </div>
                    </div>
                </div>


                <div className=" bg-slate-100 flex flex-row">
                    {/*project*/}
                    <div className=" min-h-screen px-2 grow mx-3">
                        <h1 className="px-2 py-3 text-2xl font-bold">Projects</h1>
                        <div className="px-3 pt-3 grid grid-cols-4 gap-4">
                            {projectData.map(data => { return <Project classString=" flex flex-col bg-gray-300 border-2" data={data} /> })}
                        </div>

                    </div>
                    <div className="min-h-screen">
                        <div className="mx-6">
                            <h1 className="px-2 py-3 text-2xl font-bold">Announcement</h1>
                            <div className="px-3 pt-3 pb-2 flex flex-col gap-1 border-2 rounded-lg">
                                {announcementData.map(data => { return <Announcement classString=" flex flex-col bg-gray-300 border-2" data={data} /> })}
                            </div>
                        </div>

                        <div className="mx-6 max-w-sm">
                            <h1 className="px-2 py-3 text-2xl font-bold">Trending</h1>
                            <div className="px-3 pt-3 pb-2 flex flex-col gap-1 border-2 rounded-lg">
                                {trendData.map(data => { return <Trend classString=" flex flex-col bg-gray-300 border-2" data={data}/> })}
                            </div>
                        </div>

                    </div>
                </div>

            </div >

        </>
    )
}

export default Details;