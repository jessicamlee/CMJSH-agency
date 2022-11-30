import ProfileCard from "../components/ProfileCard";
import { dataTeamMembers } from "../constants";

export default function ProfileSlider() {

    return (
        <div>
            {dataTeamMembers.map((item) => {
                return ProfileCard(item);
            })}
        </div>
    )
}