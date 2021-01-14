import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectHistory, setWatchHistory } from '../App/appSlice'
import StatisticsTable from './StatisticsTable'

import {
    getWatchedVideosChannelStatistics
} from '../../analyser/analyser.js'

interface stat {
    name: string;
    watchedVideos: number;
}

const ChannelStatistisc = () => {
    const [stats, setStats] = useState<stat[]>()
    const dispatch = useDispatch()
    const history = useSelector(selectHistory)


    !stats && setStats(getWatchedVideosChannelStatistics(100))

    return (
        <div>
            {stats ? <StatisticsTable stats={stats} /> : <p>loading</p>}
        </div>
    )
}

export default ChannelStatistisc