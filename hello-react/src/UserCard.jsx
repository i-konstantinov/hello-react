
import { UserInfo } from "./UserInfo"
export const UserCard = ({id, ...props}) => {
    return (
        <div className="card">
            <h2>User #{id} Details</h2>
            <img src="src/assets/react.svg" className="user-icon" alt="User Image" />
            <UserInfo {...props} />
        </div>
    )
}