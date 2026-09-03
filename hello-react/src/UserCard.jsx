
import { UserInfo } from "./UserInfo"
export const UserCard = ({id, ...props}) => {
    return (
        <div className="card">
            <h2>User #{id} Details</h2>
            <UserInfo {...props} />
        </div>
    )
}