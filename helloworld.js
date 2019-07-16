<!DOCTYPE html>
<html lang="en">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
</head>
<body>

</body>
</html>


var app = angular.module("app", []);
app.controller("HelloController", function($scope) {
  $scope.message = "Hello, AngularJS";	
});


<!DOCTYPE html>
<html lang="en">
<head>
<title>AngularJS</title>
<script type="text/javascript" src="resources/js/angular.js"></script>
<script type="text/javascript" src="resources/js/script.js"></script>
</head>
<body ng-app="app">
	<div ng-controller="HelloController">
		<h2>{{message}}</h2>
	</div>
</body>
</html>
