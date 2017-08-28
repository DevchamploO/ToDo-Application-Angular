angular.module('main',[])
	.controller('appCtrl', ['$scope', function($scope) {
		
		$scope.tasks = [];
		$scope.done_tasks = [];
		var taskData = localStorage['tasksList'];
		var doneData = localStorage['doneList'];

		if(taskData !== undefined) {
			$scope.tasks = JSON.parse(taskData);
			$scope.done_tasks = JSON.parse(doneData);
		}
		
		$scope.submit = function() {
			if($scope.textbox) {
				$scope.addTask();
			}
		}

		$scope.addTask = function(){
			$scope.tasks.unshift({'task_item':$scope.textbox, 'complete':false});
			$scope.textbox = '';
			localStorage['tasksList'] = JSON.stringify($scope.tasks);
			console.log(localStorage);
		};

		$scope.markAsDone = function(item) {
			if(!item.complete) {
				item.complete = true;
				var index = $scope.tasks.indexOf(item);
				$scope.done_tasks.unshift(item);
				$scope.tasks.splice(index, 1);
				localStorage['tasksList'] = JSON.stringify($scope.tasks);
				localStorage['doneList'] = JSON.stringify($scope.done_tasks);
				console.log(localStorage);
			}
		};

		$scope.deleteTask = function(val) {
			var index = $scope.tasks.indexOf(val);
			$scope.tasks.splice(index, 1);
			localStorage['tasksList'] = JSON.stringify($scope.tasks);
		};
	}]);
	