import React from 'react';


export default({ results }) => (
    <div>
        { results.map(({ geometry: { coordinates }, properties: { title } }, i) => {
            return <div key={i}>
                <h2>Earthquake Number {i}</h2>
                <div>
                    <h5>Coordinates</h5>
                    <div>{coordinates[0]}</div>
                    <div>{coordinates[1]}</div>
                </div>
                <div>
                    <h5>Properties</h5>
                    <div>{title}</div>
                </div>
                {/* <div>
                    <h5>Date</h5>
                    <div>{ new Date(time) }</div>
                </div> */}
            </div>
        }) }
    </div>
)