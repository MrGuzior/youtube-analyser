const subscriptions = require('../Takeout/YouTube and YouTube Music/subscriptions/subscriptions.json')
const history = `<div class="outer-cell mdl-cell mdl-cell--12-col mdl-shadow--2dp">
<div class="mdl-grid">
  <div class="header-cell mdl-cell mdl-cell--12-col">
    <p class="mdl-typography--title">YouTube<br></p>
  </div>
  <div class="content-cell mdl-cell mdl-cell--6-col mdl-typography--body-1">Watched <a
      href="https://www.youtube.com/watch?v=aQOEAVV3Pis">Enter - Pixa (prod. Enter) (2020)</a><br><a
      href="https://www.youtube.com/channel/UC181H5jcFEc1Q9jbfxRRfZQ">Enter</a><br>11 Jan 2021, 12:50:26 CET</div>
  <div class="content-cell mdl-cell mdl-cell--6-col mdl-typography--body-1 mdl-typography--text-right"></div>
  <div class="content-cell mdl-cell mdl-cell--12-col mdl-typography--caption">
    <b>Products:</b><br>&emsp;YouTube<br>
  </div>
</div>
</div>

<div class="outer-cell mdl-cell mdl-cell--12-col mdl-shadow--2dp">
<div class="mdl-grid">
  <div class="header-cell mdl-cell mdl-cell--12-col">
    <p class="mdl-typography--title">YouTube<br></p>
  </div>
  <div class="content-cell mdl-cell mdl-cell--6-col mdl-typography--body-1">Watched <a
      href="https://www.youtube.com/watch?v=jSfd-8ZteHw">MOST AMAZING DANIEL NEGREANU POKER READS EVER!</a><br><a
      href="https://www.youtube.com/channel/UCu3pDheBV5chOddcuOSqTnw">FuryTV</a><br>11 Jan 2021, 12:37:25 CET
  </div>
  <div class="content-cell mdl-cell mdl-cell--6-col mdl-typography--body-1 mdl-typography--text-right"></div>
  <div class="content-cell mdl-cell mdl-cell--12-col mdl-typography--caption">
    <b>Products:</b><br>&emsp;YouTube<br>
  </div>
</div>
</div>`

export const getAllSubscriptionsInfo = () => subscriptions

export const getSubscriptionsNames = () => subscriptions.map(sub => sub.snippet.title)

export const getHistory = () => {
    const videoLinkRgx = /(?<=https:\/\/www\.youtube\.com\/watch\?).+(?=")/g
    const channelRgx = /"https:\/\/www\.youtube\.com\/channel\/.+"/g
    const links = [...history.matchAll(videoLinkRgx)]

    console.log(links)
}
