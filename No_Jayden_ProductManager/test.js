function getPartURL(url) {
    let part = url.slice(32,43)
    return "https://www.youtube.com/embed/" + part
}
    
// getPartURL("https://www.youtube.com/watch?v=tgbNymZ7vqY&ab_channel=TheMuppets")
// const url = "https://www.youtube.com/watch?v=tgbNymZ7vqY&ab_channel=TheMuppets"
// const getPartURL = () => {
//     let part = url.slice(32,43)
//     return "https://www.youtube.com/embed/" + part
// }

console.log(getPartURL("https://www.youtube.com/watch?v=tgbNymZ7vqY&ab_channel=TheMuppets"))