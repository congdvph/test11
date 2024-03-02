window.listNhanVien = function ($scope, $http) {
  $scope.title = "Danh sach nhan vien";

  //call API
  const apiNhanVien = "http://localhost:3000/nhanVien";
  function getData() {
    $http.get(apiNhanVien).then(function (response) {
      if (response.status == 200) {
        console.log(response.data);
        $scope.listNhanVien = response.data;
      }
    });
  }
  getData();

  // Delete
  $scope.deleteNhanVien = function (deleteID) {
    if (deleteID) {
      let confirm = window.confirm(
        "Bạn có chắc chắn muốn xóa nhân viên này không? "
      );
      if (confirm) {
        $http.delete(`${apiNhanVien}/${deleteID}`).then(function (response) {
          if (response.status == 200) {
            alert("xóa thành công");
          }
        });
      }
    }
  };
};
