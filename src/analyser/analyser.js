export const getStatistics = (history, returnLength = 100) => {
    const json = JSON.parse(history)
    const allChannelInstances = [...json.map(item => item.subtitles && item.subtitles[0].name)]

    const watchedChannels = allChannelInstances.reduce((arr, name) => {
        if (name && !arr.includes(name)) {
            arr.push(name)
        }
        return arr
    }, [])

    const statistics = watchedChannels.map(channel => (
        {
            name: channel,
            watchedVideos: allChannelInstances.filter(name => name === channel).length
        }
    )).sort((a, b) => b.watchedVideos - a.watchedVideos)
    statistics.length = returnLength

    return statistics
}
