

const watchHistory = require('../Takeout/YouTube and YouTube Music/history/watch-history.json')

const getWatchHistory = {
    videoTitles: () => watchHistory.map(item => item.title.slice(8)),
    videoUrls: () => watchHistory.map(item => item.titleUrl),
    channels: () => [...watchHistory.map(item => item.subtitles && item.subtitles[0].name)]
}

export const getAllWatchedChannels = () => {
    let channelNames = []
    getWatchHistory.channels().forEach(name => {
        channelNames = [...channelNames, (name && !channelNames.includes(name)) ? name : '']
    })
    return channelNames
}

export const getWatchedVideosChannelStatistics = (returnLength = 100) => {
    let channels = []
    getAllWatchedChannels().forEach(channel => {
        channels = [
            ...channels,
            {
                name: channel,
                watchedVideos: getWatchHistory.channels().filter(name => name === channel).length
            }
        ]
    })
    channels = channels.sort((a, b) => b.watchedVideos - a.watchedVideos)
    channels.length = returnLength
    return channels
}

export const getStatistics = (history, returnLength = 100) => {
    const channels = [...history.map(item => item.subtitles && item.subtitles[0].name)]
    let channelNames = []
    channels.forEach(name => {
        channelNames = [...channelNames, (name && !channelNames.includes(name)) ? name : '']
    })
    let statistics = []
    channelNames.forEach(channel => {
        statistics = [
            ...statistics,
            {
                name: channel,
                watchedVideos: channels.filter(name => name === channel).length
            }
        ]
    })
    statistics = statistics.sort((a, b) => b.watchedVideos - a.watchedVideos)
    statistics.length = returnLength
    return statistics
}

