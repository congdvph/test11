window.addFlightController = function ($scope, $http, $location) {
  $scope.title = "Add Newflight";
  $scope.addFlight = function () {
    // Link API
    const apiFlightHotels = "http://localhost:3000/flightHotel";

    // Tạo 1 biến để kiểm tra
    let flag = true;
    // Kiểm tra từng trường dữ liệu
    $scope.kiemTra = {
      name: false,
      price: false,
      detail: false,
    };
    // Kiểm tra dữ liệu
    if (!$scope.flight || !$scope.flight.name) {
      flag = false;
      $scope.kiemTra.name = true;
    }
    if (!$scope.flight || !$scope.flight.price) {
      flag = false;
      $scope.kiemTra.price = true;
    }
    if (!$scope.flight || !$scope.flight.detail) {
      flag = false;
      $scope.kiemTra.detail = true;
    }
    if (flag) {
      // Dữ liệu nhập từ input
      let newFlight = {
        name: $scope.flight.name,
        price: $scope.flight.price,
        detail: $scope.flight.detail,
        img: "img/flightHotel/04.jpg",
        seat: $scope.flight.seat,
        duration: $scope.flight.duration,
        destination: $scope.flight.destination,
      };
      //console.log(newStudent);
      $http.post(apiFlightHotels, newFlight).then(function (response) {
        if ((response.status = 201)) {
          $location.path("flight-hotel");
        }
      });
    } else {
      alert("Bạn cần nhập đầy đủ thông tin !");
    }
  };
};
