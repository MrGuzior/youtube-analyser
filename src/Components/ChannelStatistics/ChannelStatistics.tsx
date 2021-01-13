import React, { useState } from 'react'
import StatisticsTable from './StatisticsTable'

import {
    videosWatchedChannel
} from '../../analyser/analyser.js'

interface stat {
    name: string;
    watchedVideos: number;
}

const ChannelStatistisc = () => {
    const [stats, setStats] = useState<stat[]>()

    !stats && setStats(videosWatchedChannel(200))

    return (
        <div>
            {stats ? <StatisticsTable stats={stats} /> : <p>loading</p>}
        </div>
    )
}

export default ChannelStatistisc