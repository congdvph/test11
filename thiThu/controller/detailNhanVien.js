window.detailNhanVien = function ($scope, $http, $routeParams) {
  $scope.title = "Thông tin chi tiết nhân viên";
  const apiNhanVien = "http://localhost:3000/nhanVien";
  let nhanVienId = $routeParams.id;

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
};
