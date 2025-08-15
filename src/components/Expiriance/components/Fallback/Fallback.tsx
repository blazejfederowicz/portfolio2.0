import { RegularBox } from "../../layout/ExperianceBox";

export default function Fallback(){
    return (
        <div className="animate-pulse">
            <RegularBox>
                Loading...
            </RegularBox>
        </div>
    );
}