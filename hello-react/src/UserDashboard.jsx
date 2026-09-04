import { useState } from "react";
const initialCredits = 100;

export const UserDashboard = ({ isPremium=false }) => {
    const [credits, setCredits] = useState(initialCredits);
    const [prem, setPremium] = useState(isPremium);


    const buyCredits = () => {
        setCredits(credits + initialCredits);
    }

    const spendCreditsBtn = credits ? (<button onClick={() => setCredits(0)}>Spend all credits</button>) : null;


    const premiumContent = (
        <>
            <p>You have {credits} credits</p>
            {spendCreditsBtn}
            <button onClick={buyCredits}>Buy credits</button>
        </>
    );
    const upgradeContent = (
        <>
            <p>Upgrade to premium to see credits</p>
            <button onClick={() => setPremium(true)}>Upgrade</button>
        </>
    )
    // if (!isPremium) {
    //     return <div className="card">Upgrade to premium to see credits</div>;
    // }
    // return <div className="card">
    //     <p>You have {credits} credits</p>
    //     <button onClick={() => setCredits(0)}>spend all credits</button>
    // </div>;
    return(
        <div className="card">
            {prem ? premiumContent : upgradeContent}
        </div>
    );
}