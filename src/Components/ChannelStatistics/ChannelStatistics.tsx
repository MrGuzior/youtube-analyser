import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectHistory } from '../App/appSlice'
import StatisticsTable from './StatisticsTable'

import {
    getStatistics
} from '../../analyser/analyser.js'

interface stat {
    name: string;
    watchedVideos: number;
}

const ChannelStatistisc = () => {
    const [stats, setStats] = useState<stat[]>()
    const history = useSelector(selectHistory)

    !stats && setStats(getStatistics(history, 100))

    return (
        <div>
            {stats ? <StatisticsTable stats={stats} /> : <p>loading</p>}
        </div>
    )
}

export default ChannelStatistisc