window.updateNhanVien = function ($scope, $routeParams, $http) {
  $scope.title = "Chỉnh sửa thông tin";
  let nhanVienId = $routeParams.id;

  //link API
  const apiNhanVien = "http://localhost:3000/nhanVien";
  // let student;
  $http.get(`${apiNhanVien}/${nhanVienId}`).then(function (response) {
    $scope.nhanVien = {
      id: response.data.id,
      hoTen: response.data.hoTen,
      sdt: response.data.sdt,
      email: response.data.email,
      chucVu: response.data.chucVu,
      ngaySinh: response.data.ngaySinh,
    };
  });

  $scope.updateNhanVien = function () {
    const apiNhanVien = "http://localhost:3000/nhanVien";
    let newNhanVien = {
      hoTen: $scope.nhanVien.hoTen,
      sdt: $scope.nhanVien.sdt,
      email: $scope.nhanVien.email,
      chucVu: $scope.nhanVien.chucVu,
      ngaySinh: $scope.nhanVien.date,
    };
    $http.put(apiNhanVien, newNhanVien).then(function (response) {
      if ((response.status = 201)) {
        $location.path("/");
      }
    });
  };
  // $scope.student.name = student.name;
  // $scope.student.year = student.year;
  // $scope.student.course = student.course;
};
