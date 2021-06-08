
function StockTable() {



  var unirest = require("unirest");

  var req = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/referral/v1.0/%7Bcountry%7D/%7Bcurrency%7D/%7Blocale%7D/%7Boriginplace%7D/%7Bdestinationplace%7D/%7Boutboundpartialdate%7D/%7Binboundpartialdate%7D");
  
  req.query({
    "shortapikey": "ra66933236979928",
    "apiKey": "{shortapikey}"
  });
  
  req.headers({
    "x-rapidapi-key": "ae5d8eda53msh3217e1a1b1da46dp15e16cjsn2272c4eac86e",
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "useQueryString": true
  });
  
  
  req.end(function (res) {
    if (res.error) throw new Error(res.error);
  
    console.log(res.body);
  });
  




  return (
    <div className="StockTable">
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default StockTable;
