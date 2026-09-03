
export const UserDetails = ({name, isOnline, hideOffline=false}) => {
    
    if (hideOffline && !isOnline) {
        return null;
    }

    // let statusColorClass = "red-dot";
    // let statusMsg = "Not available right now.";
    // let chatBtn = (<small>Check back later...</small>);
    // if (isOnline) {
    //     statusColorClass = "green-dot";
    //     statusMsg = "Available for chat";
    //     chatBtn = (<button>Open chat</button>);
    // }
    const statusColorClass = isOnline ? "green-dot" : "red-dot";
    const statusIconLabel = isOnline ? "Online" : "Offline";
    const statusMsg = isOnline ? "Available for chat" : "Not available right now.";
    const chatBtn = isOnline ? (<button>Open chat</button>) : (<small>Check back later...</small>);

    return (
        <div className="user-card">
            <h3>{name}</h3>
            <div className="user-status">
                Status: <div className={statusColorClass}></div>
                <span>{statusIconLabel}</span>
            </div>
            <p>{statusMsg}</p>
            {chatBtn}
        </div>
    );
};