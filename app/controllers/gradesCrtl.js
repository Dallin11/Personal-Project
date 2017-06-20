angular.module("app").controller("gradesCtrl", function($scope, mainSvc){
    
var students = [
    { "FirstName": "Dallin", "LastName": "Anderson", "Grade": 2 }
];

var grade = [
  { Name: "", id: 0 },
  { Name: 1, id: 1},
  { Name: 2, id: 2},
  { Name: 3, id: 3},
  { Name: 4, id: 4}
]
console.log($("#jsGrid"));
_$("#jsGrid").jsGrid({
      width: "100%",
        height: "400px",
 
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
 
        data: students,

     fields:[
         {name: "FirstName", type: "text", width: 150, validate: "required" },
         {name: "LastName", type: "text", width: 150 },
         {name: "Grade", type: "select", items: grade, valueField: "Id", textField: "Name"},
         {type: "control"}
     ]

})
});







// var myData = [
//         {
//             "firstName": "Brian", 
//             "lastName": "Carney",
//             "grade": 1

//         },
//         {"firstName": "Dallin",
//             "lastName": "Anderson",
//             "grade": "4"

//         },
//         {
//             "firstName": "John",
//             "lastName": "doe",
//             "grade": "3"
//         }
//     ];

//     const columnDefs1 = [
//         {name: 'firstName'},
//         {name: 'lastName'},
//         {name: 'grade'}
//     ]

//     $scope.gridOpts = {
//         columnDefs: columnDefs1,
//         data: myData
//     }

//     $scope.addData = function() {
//     var n = $scope.gridOpts.data.length + 1;
//     $scope.gridOpts.data.push({
//                 "firstName": "New " + n,
//                 "lastName": "Person " + n,
//                 "grade": 1-4
//               })
//     };

