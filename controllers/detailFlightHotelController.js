window.detailFlightHotelController = function ($scope, $routeParams, $http) {
  $scope.title = "Detail Flight";

  // Lấy thông tin chi tiết
  let flightID = $routeParams.id;

  //Link API
  const apiFlights = "http://localhost:3000/flightHotel";
  $http.get(`${apiFlights}/${flightID}`).then(function (response) {
    console.log(response.data);
    $scope.flight = {
      id: response.data.id,
      name: response.data.name,
      price: response.data.price,
      detail: response.data.detail,
      seat: response.data.seat,
      destination: response.data.destination,
      duration: response.data.duration,
    };
  });
};
