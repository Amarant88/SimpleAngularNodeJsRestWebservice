// konsumiert den restful webservice

function Hello($scope, $http) {
    $http.get('http://localhost:8081/myContent').
        success(function(data) {
            $scope.daten = data;
        });
}

