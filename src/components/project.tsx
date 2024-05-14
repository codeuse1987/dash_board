
import React, { useState } from "react";
import { ComProps } from "../model/comProps";
import { ProjectModel } from "../model/ProjectModel";
function Project(props: ComProps<ProjectModel>) {
    const { classString, data } = props
    // const [clicked, setClicked] = useState(true);
    const [shared, setShared] = useState(true);
    const [saved, setSaved] = useState(true);
    return <>
        <div className={`p-4 rounded-md ${classString} `}>
            <h1 className=" py-2 text-xl font-semibold">
                {data?.title}
            </h1>
            <p className="py-1 ml-2">{data?.detail}</p>
            <div className=" flex flex-row justify-end">
                <button className="bg-transparent hover:bg-gray-400 rounded mx-1 " onClick={() => setSaved(!saved)}>
                    {/* <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg> */}
                    <svg className={`w-4 h-4 ${saved ? "fill-current" : null}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </button>
                <button className="bg-transparent hover:bg-gray-400 rounded mx-1" onClick={() => setShared(!shared)}>
                    <svg className={`w-4 h-4 ${shared? "fill-current" : null}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                </button>
            </div>
        </div>

    </>
}

export default Project;