import { useEffect, useState } from "react";
import { ComProps } from "../model/comProps";
import Project from "./project"
import { ProjectModel } from "../model/ProjectModel";
import axios from "axios";
import myData from "../data/projects.json"


function Details(props: ComProps<ProjectModel>) {
    useEffect(() => { handleData(); }, [])

    const { classString } = props;
    const [search, setSearch] = useState<string>();
    const [data, setData] = useState<ProjectModel[]>([]);
    function handleInput() {

    }

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
                                    placeholder="search" value={search} onChange={(e) => { console.log(e) }} />
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


                {/*project*/}
                <div className=" bg-slate-100 min-h-screen px-5">
                    <h1 className="px-2 py-3 text-2xl font-bold">Projects</h1>
                    <div className="px-3 pt-3 grid grid-cols-4 gap-4">
                        {myData.map(data => { return <Project classString=" flex flex-col bg-gray-300 border-2" data={data} /> })}
                    </div>

                </div>
            </div >

        </>
    )
}

export default Details;