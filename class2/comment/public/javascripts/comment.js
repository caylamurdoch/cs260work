angular.module('comment', [])
    .controller('MainCtrl', [
        '$scope',
        function($scope) {
            $scope.comments = [];
            $scope.addComment = function() {
                var newcomment = { title: $scope.formContent, upvotes: 0 };
                $scope.formContent = '';
                $scope.comments.push(newcomment);
            };
            $scope.incrementUpvotes = function(comment) {
                comment.upvotes += 1;
            };
        }
    ]);
