import { ComProps } from "../model/comProps";

function SideBar(props: ComProps<any>) {

    const { classString } = props;

    return (

        <>
            <div className={classString}>
                <h1 className="text-2xl mx-2 my-4">
                    Dashboard
                </h1>
                <div className="grid grid-col-1 gap-2 mx-4">
                    <a href="">Home</a>
                    <a href="">Profile</a>
                    <a href="">Message</a>
                    <a href="">History</a>
                    <a href="">Tasks</a>
                    <a href="">Communities</a>
                    <a href="">Setting</a>
                    <a href="">Support</a>
                </div>

            </div>

        </>
    )
}

export default SideBar;