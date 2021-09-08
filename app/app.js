
var mydemo = angular.module('mydemo', []);

mydemo.controller('myController', function($scope, $http) {
    function getData() {
        var url = "http://rudrasagdemo.gateway.webmethodscloud.com/gateway/SupportTypes/1.0";

        $http({
            method: 'GET',              
            url: url, 
            headers: {'x-Gateway-APIKey': 'c0cbe3ea-6ae0-4e5c-99a4-a02175bc1a2a'            
            ,'Origin': 'https://foo.invalid'   
        }}).then(function success(response) {             
                $scope.supportForm.supportTypes = response.data;            
                $scope.supportForm.supportTypes.statusval = response.status;            
                $scope.supportForm.supportTypes.statustext = response.statusText;            
                $scope.headers = response.headers();            
            }, function error(response) {    
                console.log(response)          
            });    
    };    
    getData();  
 
    // if($scope.supportTypes == null){

    // }
    $scope.supportTypes = [{
        id: 1,
        label: 'aLabel'

      }, {
        id: 2,
        label: 'bLabel'
      }];


    //   stypes = $http.get("http://urlforapi.com/get?name=Elliot").then(
    //     function successCallback(response) {
    //       $scope.response = response;
    //     },
    //     function errorCallback(response) {
    //       console.log("Unable to perform get request");
    //     }
    //   );
    console.log(angular.toJson($scope.supportTypes));

    $scope.submitSupportForm = function () {
        idate = $scope.supportForm.iDate.toLocaleDateString("en-US", { day: 'numeric' }) + "-" +
            $scope.supportForm.iDate.toLocaleDateString("en-US", { month: 'numeric' }) + "-" +
            $scope.supportForm.iDate.toLocaleDateString("en-US", { year: 'numeric' })
        in_json = {
            "firstname": $scope.supportForm.firstName,
            "lastname": $scope.supportForm.lastName,
            "supporttype": $scope.supportForm.supportType.id,
            "dateofincident": idate,
            "description": $scope.supportForm.iDescription
        }
        console.log(in_json);
    };


    
    // $http.get('data/lis.json').success(function(data){        
    //     $scope.lis = data;
    // });   

});