const subscriptions = require('../Takeout/YouTube and YouTube Music/subscriptions/subscriptions.json')


export const getAllSubscriptionsInfo = () => subscriptions

export const getSubscriptionsNames = () => subscriptions.map(sub => sub.snippet.title)
