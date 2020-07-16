function get() {
    var xhr = new XMLHttpRequest()
    console.log(xhr)
    var name = document.getElementById("coinName").value

    var url = "https://api.coingecko.com/api/v3/coins/"
    xhr.open("Get", url + name + "?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true")
    xhr.send()
    xhr.onload = function() {

            // console.log(this.response)
            var response = JSON.parse(this.response)
            console.log(response)
            handleRespone(response)
            console.log(response.object.block_time_in_minutes)
                // handle(response)
        }
        // renderDom(arr)
}





function handleRespone(response) {
    renderDom(response.tickers)
        // renderDom(response.localization)
    console.log(response.tickers)
    console.log(response.tickers[2].base)
    console.log(response.tickers[2].coin_id)
    console.log(response.tickers[2].converted_last.usd)

    var show = document.getElementById('coin-show')
    show.innerHTML = response.tickers[2].coin_id + "<br/>"

    // var result = document.getElementById('result')
    // result.innerHTML = "Coin Name:" + " " + coin_id + "<br/>" + "Coin Symbol:" + " " + arr[i].base + "<br/> " + " Coin Name:" + " " + arr[i].bid_ask_spread_percentage
}

function renderDom(arr) {
    var result = document.getElementById('result')
    var inr = arr[2].converted_last.usd
    var inr1 = (75.19 * inr).toFixed(2)
    console.log(inr1)

    // var div = document.createElement('div')
    for (var i = 2; i < arr.length; i++) {
        result.innerHTML = "Coin Name:" + " " + arr[2].coin_id + "<br/>" +
            "Coin Symbol:" + " " + arr[i].base + "<br/> " + "Current Price(USD):" + " " + " $" + " " +
            arr[i].converted_last.usd + "<br/> " +
            "Current Price(INR):" + " " + "&#x20B9;" + " " +
            inr1

        result.setAttribute = 'class', 'card shadow'
    }



}



// function handle(response) {
//     renderDom(response.localization)
//     console.log(response.localization.market_cap_rank)
//     show.innerHTML = response.tickers[2].coin_id + "<br/>"
// }