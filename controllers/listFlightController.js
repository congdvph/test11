window.listFlightController = function ($scope, $http) {
  $scope.title = "ListFlight";

  //call API
  const apiFlightHotels = "http://localhost:3000/flightHotel";
  function getData() {
    $http.get(apiFlightHotels).then(function (response) {
      if (response.status == 200) {
        console.log(response.data);
        $scope.listFlightHotel = response.data;
      }
    });
  }
  getData();

  // Delete
  $scope.deleteFlightHotel = function (deleteID) {
    if (deleteID) {
      let confirm = window.confirm("Bạn có chắc chắn muốn xóa không? ");
      if (confirm) {
        $http
          .delete(`${apiFlightHotels}/${deleteID}`)
          .then(function (response) {
            if (response.status == 200) {
              alert("xóa thành công");
            }
          });
      }
    }
  };
};
