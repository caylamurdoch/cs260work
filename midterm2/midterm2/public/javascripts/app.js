angular.module('shopping', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.products = [];
            $scope.cart = [];

            $scope.getAll = function() {
                return $http.get('/shopping').success(function(data) {
                    angular.copy(data, $scope.products);
                });
            };

            $scope.getAll();

            $scope.create = function(product) {
                return $http.post('/shopping', product).success(function(data) {
                    $scope.products.push(data);
                });
            };

            $scope.buy = function() {
                console.log("In buy");
                angular.forEach($scope.products, function(value, key) {
                    if (value.selected) {
                        $scope.order(value);
                        $scope.cart.push(value);
                    }
                });
            }

            $scope.order = function(product) {
                return $http.put('/shopping/' + product._id + '/order')
                    .success(function(data) {
                        console.log("order worked");
                        product.ordered += 1;
                    });
            };

            $scope.addProduct = function() {
                var newObj = { Name: $scope.formContentName, price: $scope.formContentPrice, ordered: 0, url: $scope.formContentURL };
                $scope.create(newObj);
                $scope.formContent = '';
            }

            $scope.delete = function(product) {
                console.log("Deleting Name " + product.Name + " ID " + product._id);
                $http.delete('/shopping/' + product._id)
                    .success(function(data) {
                        console.log("delete worked");
                    });
                $scope.getAll();
            };
        }
    ]);
