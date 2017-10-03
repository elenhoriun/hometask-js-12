;(function($){
	
		function ajax_json() {
		
			var xhr_request = new XMLHttpRequest();
			
			xhr_request.onreadystatechange = function () {
			console.log(xhr_request.readyState);
			if (xhr_request.readyState === 4 && xhr_request.status == 200) {
				var data = JSON.parse(xhr_request.responseText);
				var employeesList = '<ul class="bulleted">'
				

				for (var i = 0; i < data.length; i++) {
					var status = data[i]['inoffice'];
					var liClass = status ? 'in':'out';
				
				employeesList += '<li class="' + liClass + '">' + (data[i]['name']) + '<li>';	
			}
				employeesList += '</ul>';
									
			}

			document.getElementById("employeeList").innerHTML = employeesList;
		}

		xhr_request.open('GET', 'employees.json');
		xhr_request.send();
		};

	$(document).ready(function(){	
		
		ajax_json();

	});

})(jQuery);