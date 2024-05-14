import { AnnouncementModel } from "../model/AnnouncementModel";
import { ComProps } from "../model/comProps";


function Announcement(props: ComProps<AnnouncementModel>) {
    const { data } = props;
    return (
        <>
            <div className="border-b-4 border-slate-300 ">
                <h1>{data?.title}</h1>
                <p className="pl-1">{data?.detail}</p>
            </div>

        </>
    )
}

export default Announcement;