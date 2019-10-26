import React from 'react'
import Chart from './Chart'

const Graphs = ({}) => {
    

    return (
        <div>
            <div>
                <Chart
                    input={"chart 1"}
                />
                <Chart
                    input={"chart 2"}
                />
                    </div>
            <div>
                <Chart
                    input={"chart 3"}
                />
                <Chart
                    input={"chart 4"}
                />
            </div>
            <div>
                <Chart
                    input={"chart 5"}
                />
                <Chart
                    input={"chart 6"}
                />
            </div>
        </div>
    )
}

export default Graphs;