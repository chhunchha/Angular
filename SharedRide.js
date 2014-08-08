angular.module('components',[])
    .directive('selectOnClick', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.on('click', function(){
                    this.select();
                });
            }
        };
    });

angular.module('LetsCarPool',['ui.bootstrap', 'components']).
controller('LetsCarPoolController',['$scope', function($scope) {

    $scope.rideListTemplate =  {name: 'rideList.html', url: 'rideList.html'};

    $scope.name = "Name";
    $scope.make = "Make";
    $scope.model = "Model";
    $scope.plate = "Plate Number";
    $scope.from = "From Address";
    $scope.fromcity = "City";
    $scope.fromstate = "State";
    $scope.frompin = "99999"
    $scope.to = "To Address";
    $scope.tocity = "City";
    $scope.tostate = "State";
    $scope.topin = "99999"
    $scope.email = "your@email.com";
    $scope.phone = "9999999999";

    $scope.rides = [
        {
            "id": "1",
            "name": "Sumant Chhunchha",
            "make": "Honda", 
            "model": "Accord",
            "plate": "6ECZ451",
            "from": "1206 Vicente Dr",
            "fromcity": "sunnyvale",
            "fromstate": "CA",
            "frompin": "94086",
            "to": "4300 Bohannon Dr",
            "tocity": "Menlo Park",
            "tostate": "CA",
            "topin": "94025",
            "email": "mr.chhunchha@gmail.com",
            "phone": "4084304655"
        },
         {
            "id": "1",
            "name": "sumant chhunchha",
            "make": "Honda", 
            "model": "Accord",
            "plate": "6ECZ451",
            "from": "1206 Vicente Dr",
            "fromcity": "sunnyvale",
            "fromstate": "CA",
            "frompin": "94086",
            "to": "4300 Bohannon Dr",
            "tocity": "Menlo Park",
            "tostate": "CA",
            "topin": "94025",
            "email": "mr.chhunchha@gmail.com",
            "phone": "4084304655"
        },
         {
            "id": "1",
            "name": "sumant chhunchha",
            "make": "Honda", 
            "model": "Accord",
            "plate": "6ECZ451",
            "from": "1206 Vicente Dr",
            "fromcity": "sunnyvale",
            "fromstate": "CA",
            "frompin": "94086",
            "to": "4300 Bohannon Dr",
            "tocity": "Menlo Park",
            "tostate": "CA",
            "topin": "94025",
            "email": "mr.chhunchha@gmail.com",
            "phone": "4084304655"
        },
         {
            "id": "1",
            "name": "sumant chhunchha",
            "make": "Honda", 
            "model": "Accord",
            "plate": "6ECZ451",
            "from": "1206 Vicente Dr",
            "fromcity": "sunnyvale",
            "fromstate": "CA",
            "frompin": "94086",
            "to": "4300 Bohannon Dr",
            "tocity": "Menlo Park",
            "tostate": "CA",
            "topin": "94025",
            "email": "mr.chhunchha@gmail.com",
            "phone": "4084304655"
        },
         {
            "id": "1",
            "name": "sumant chhunchha",
            "make": "Honda", 
            "model": "Accord",
            "plate": "6ECZ451",
            "from": "1206 Vicente Dr",
            "fromcity": "sunnyvale",
            "fromstate": "CA",
            "frompin": "94086",
            "to": "4300 Bohannon Dr",
            "tocity": "Menlo Park",
            "tostate": "CA",
            "topin": "94025",
            "email": "mr.chhunchha@gmail.com",
            "phone": "4084304655"
        },
         {
            "id": "1",
            "name": "sumant chhunchha",
            "make": "Honda", 
            "model": "Accord",
            "plate": "6ECZ451",
            "from": "1206 Vicente Dr",
            "fromcity": "sunnyvale",
            "fromstate": "CA",
            "frompin": "94086",
            "to": "4300 Bohannon Dr",
            "tocity": "Menlo Park",
            "tostate": "CA",
            "topin": "94025",
            "email": "mr.chhunchha@gmail.com",
            "phone": "4084304655"
        },
        {
            "id": "1",
            "name": "sumant chhunchha",
            "make": "Honda", 
            "model": "Accord",
            "plate": "6ECZ451",
            "from": "1206 Vicente Dr",
            "fromcity": "sunnyvale",
            "fromstate": "CA",
            "frompin": "94086",
            "to": "4300 Bohannon Dr",
            "tocity": "Menlo Park",
            "tostate": "CA",
            "topin": "94025",
            "email": "mr.chhunchha@gmail.com",
            "phone": "4084304655"
        },
        {
            "id": "1",
            "name": "sumant chhunchha",
            "make": "Honda", 
            "model": "Accord",
            "plate": "6ECZ451",
            "from": "1206 Vicente Dr",
            "fromcity": "sunnyvale",
            "fromstate": "CA",
            "frompin": "94086",
            "to": "4300 Bohannon Dr",
            "tocity": "Menlo Park",
            "tostate": "CA",
            "topin": "94025",
            "email": "mr.chhunchha@gmail.com",
            "phone": "4084304655"
        },
        {
            "id": "1",
            "name": "sumant chhunchha",
            "make": "Honda", 
            "model": "Accord",
            "plate": "6ECZ451",
            "from": "1206 Vicente Dr",
            "fromcity": "sunnyvale",
            "fromstate": "CA",
            "frompin": "94086",
            "to": "4300 Bohannon Dr",
            "tocity": "Menlo Park",
            "tostate": "CA",
            "topin": "94025",
            "email": "mr.chhunchha@gmail.com",
            "phone": "4084304655"
        }

    ];

    $scope.addRide = function () {

	ride = { 
		"id": $scope.rides.size + 1,
		"name": $scope.name,
		"make": $scope.make,
		"model": $scope.model,
		"plate": $scope.plate,
		"from": $scope.from ,
        "fromcity": $scope.fromcity,
        "fromstate": $scope.fromstate,
        "frompin": $scope.frompin,
		"to": $scope.to,        
        "tocity": $scope.fromcity,
        "tostate": $scope.fromstate,
        "topin": $scope.frompin,
		"email": $scope.email,
		"phone": $scope.phone
	};
	    
	$scope.rides.push(ride); 
    };

}])