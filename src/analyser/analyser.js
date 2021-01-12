const subscriptions = require('../Takeout/YouTube and YouTube Music/subscriptions/subscriptions.json')
const watchHistory = require('../Takeout/YouTube and YouTube Music/history/watch-history.json')


export const getAllSubscriptionsInfo = () => subscriptions

export const getSubscriptionsNames = () => subscriptions.map(sub => sub.snippet.title)

//export const getWatchHistory = () => watchHistory

export const getWatchHistory = {
    fullHistory: watchHistory,
    videoTitles: () => watchHistory.map(item => item.title.slice(8)),
    videoUrls: () => watchHistory.map(item => item.titleUrl),
    channels: () => {
        return [
            ...watchHistory.map(item => {
                if (item.subtitles) {
                    return item.subtitles[0].name
                }
            })
        ]
    }
}

export const videosWatchedChannel = (channelId = '') => {
    const channelNames = getWatchHistory.channels()
    console.log(channelNames)
}

export const getAllWatchedChannels = () => {
    let channels = []
    getWatchHistory.channels().map(name => {
        if (name && !channels.includes(name)) {
            channels = [...channels, name]
        }
    })
    return channels
}
