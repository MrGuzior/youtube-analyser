export const getStatistics = (history, returnLength = 100) => {
    const json = JSON.parse(history)
    const channels = [...json.map(item => item.subtitles && item.subtitles[0].name)]

    const channelNames = channels.reduce((arr, name) => {
        if (name && !arr.includes(name)) {
            arr.push(name)
        }
        return arr
    }, [])



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
