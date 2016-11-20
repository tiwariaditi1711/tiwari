module.exports = function($scope, $http){
  var init = function(){
    $http.get('api/GetMovie').success(function(response){
      $scope.movieData=response;
    });
  };
  init();

  $scope.SaveMovie = function(){
    $http.post('api/AddMovie', $scope.Movie).success(function(response){
    });
    console.log('Movie addedd successfully');
  };

  $scope.DeleteMovie = function(Movie){
    $http.delete('api/DeleteMovie/'+Movie._id).success(function(response){
    });
    console.log('Movie Deleted Successfully');
  init();
  };

  $scope.EditMovie = function(){
    $http.put('api/EditMovie/'+$scope.Movie.MovieName, $scope.Movie).success(function(response){
    });
    console.log('Movie Updated Successfully');
  };

};
