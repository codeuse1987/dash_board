import { ComProps } from "../model/comProps";
import { TrendModel } from "../model/TrendModel";

export default function Trend(props: ComProps<TrendModel>, ...arg: string[]) {

    const { data } = props
    console.log(arg);
    return (
        <>
            <div className="flex flex-row">
                <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt="Girl in a jacket" className="rounded-full h-10"/>
                <div>
                    <p>@{data?.username}</p>
                    <p className="px-2">{data?.bio}</p>
                </div>
            </div>
        </>
    )
}