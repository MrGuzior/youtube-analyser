export const getStatistics = (history, returnLength = 100) => {
    const json = JSON.parse(history)
    const channels = [...json.map(item => item.subtitles && item.subtitles[0].name)]
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

