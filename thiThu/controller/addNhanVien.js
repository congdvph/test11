window.addNhanVien = function ($scope, $http, $location) {
  $scope.title = "Thêm nhân viên";
  const apiNhanVien = "http://localhost:3000/nhanVien";

  $scope.addNhanVien = function () {
    let newNhanVien = {
      hoTen: $scope.nhanVien.hoTen,
      sdt: $scope.nhanVien.sdt,
      email: $scope.nhanVien.email,
      chucVu: $scope.nhanVien.chucVu,
      ngaySinh: $scope.nhanVien.date,
    };
    $http.post(apiNhanVien, newNhanVien).then(function (response) {
      if ((response.status = 201)) {
        $location.path("/");
      }
    });
  };
};
