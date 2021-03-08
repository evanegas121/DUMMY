import React from 'react';

const ResultCard = (props) => {
    let election = props.item;
    return (
        <div>
            {election.electionDay} {election.name}
        </div>
    );
};

export default ResultCard;