import React from 'react'
import { useSelector } from 'react-redux'
import { selectHistory } from '../App/appSlice'
import {
    getStatistics
} from '../../analyser/analyser.js'

interface stat {
    name: string;
    watchedVideos: number;
}

const StatisticsTable = () => {
    const history = useSelector(selectHistory)
    const statistics: stat[] = getStatistics(history, 100)
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
                {statistics.map((item, id) => {
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