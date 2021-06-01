import React, { useEffect } from "react";
import Bounty from "./Bounty";


export default function Bounties(props) {
    const { bounties, getBounties, delBounty, editBounty, searchKeyword } = props;
    useEffect(() => {
        getBounties();
    }, );
    const bountyList = bounties
        .filter((x) => {
            if (searchKeyword === "") {
                return x;
            } else if (x.type.toLowerCase() === searchKeyword.toLowerCase()) {
                return x;
            }
        })
        .map((x) => {
            return (
                <div key={x._id}>
                    <Bounty
                        id={x._id}
                        firstName={x.firstName}
                        lastName={x.lastName}
                        type={x.type}
                        bountyAmt={x.bountyAmt}   
                        living={x.living}    
                        delBounty={delBounty}
                        editBounty={editBounty}  
                    />
                </div>
            );
        });

        return <div>{bountyList}</div>;
}