import React from 'react'

import {
    videosWatchedChannel
} from '../../analyser/analyser.js'

const ChannelStatistisc = () => {
    return (
        <div>
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
                    {videosWatchedChannel().map((item, id) => {
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
        </div>
    )
}

export default ChannelStatistisc