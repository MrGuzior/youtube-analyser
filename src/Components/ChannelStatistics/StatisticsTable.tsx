import React from 'react'

interface stat {
    name: string;
    watchedVideos: number;
}

const StatisticsTable = (props: { stats: stat[] }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <p>#</p>
                    </th>
                    <th>
                        <p>Name</p>
                    </th>
                    <th>
                        <p>Count</p>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.stats.map((item, id) => {
                    return (
                        <tr key={id}>
                            <th>{id + 1}</th>
                            <th>{item.name}</th>
                            <th>{item.watchedVideos}</th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default StatisticsTable