import axios from 'axios';


export default function McMaster (partNumber, amount) {

var collectedData = {
  packagePrice: null,

}
console.log("McMaster")

axios.get('https://www.mcmaster.com')
  .then(function (response) {
    var mvRegex = /\/mv\d{10}\//g
    var mvMatches = mvRegex.exec(response.data)
    var mv = mvMatches[0]
    console.log(mv);
    let url = `http://www.mcmaster.com${mv}WebParts/Content/ItmPrsnttnWebPart.aspx?partnbrtxt=${partNumber}`;
    console.log(url);
    axios.get(url)
      .then(function (htmlResponse) {

          var titleRegex = /"TitleTxt":"(.*)","PinnedContentColl"/g;
          var titleText = titleRegex.exec(htmlResponse.data);
          console.log(decodeURI(titleText[1]))
      })
      .catch(function (error) {
        console.log(error);
      })
  })
  .catch(function (error) {
    console.log(error);
  })


}
