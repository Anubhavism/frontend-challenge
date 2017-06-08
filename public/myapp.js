var myApp=angular.module('myApp',[]);

myApp.controller('mainCtrl',function($scope){
	$scope.json={
		India:{
			name:['#thecrosspolo',
					'Bollywood',
					'#KeepOffTemples',
					'#MyPhoneTaughtMe',
					'#music',
					'#SM4CXOs',
					'#TGIF',
					'Gujarat',
					'Hyper Building',
					'Sushmita Banerjee']
		},
		Pakistan:{
			name:['#thecrosspolo',
					'#MQM',
					'#Pakistan',
					'#Syria',
					'#UniteAndDefend',
					'#karachi',
					'#MyPhoneTaughtMe',
					'#19000lies',
					'#music']
		},
		Singapore:{
			name:['#thecrosspolo',
					'#CountdownToStayingStrong',
					'#987GiveMeInfinite',
					'#MyPhoneTaughtMe',
					'#TGIF',
					'#singapore',
					'#HotFMBieberoid',
					'Malaysia',
					'Galaxy Supernova',
					'Percy Jackson']	
		},
		SouthAfrica:{
			name:['#thecrosspolo',
					'#Pinetown',
					'#casualday',
					'#NFU_PFB',
					'#TGIF',
					'#PFB',
					'KZN',
					'Syria',
					'Cape Town',
					'#music']		
		},
		UnitedKingdom:{
			name:['#thecrosspolo',
					'#mysexlifeinmovietitles',
					'#TGIF',
					'#YouKnowYoureAWrestlingFanWhen',
					'Britain',
					'America',
					'#CountdownToStayingStrong',
					'Scotland',
					'#music',
					'#Ravens']			
		},
		Canada:{
			name:['#thecrosspolo',
					'Big Brother',
					'#BB15',
					'#mysexlifeinmovietitles',
					'#CountdownToStayingStrong',
					'#ThrowBackThursday',
					'#iHeartLorde',
					'McCrae',
					'Julius Thomas',
					'#TGIF']				
		},
		UnitedStates:{
			name:['#thecrosspolo',
					'2 Chainz',
					'#Syria',
					'#mysexlifeinmovietitles',
					'#badchildrensbooks',
					'America',
					'#Broncos',
					'#SorryNotSorry',
					'Ravens',
					'#TGIF']					
		},
		Australia:{
			name:['#thecrosspolo',
					'Ravens',
					'#CountdownToStayingStrong',
					'Ron Burgundy',
					'#mysexlifeinmovietitles',
					'#iHeartLorde',
					'The Age',
					'#TGIF',
					'Coalition',
					'#TonyTunes']						
		},
		NewZealand:{
			name:['#thecrosspolo',
				'#mysexlifeinmovietitles',
				'#TGIF',
				'#CountdownToStayingStrong',
				'#iHeartLorde',
				'#nzfw',
				'Auckland',
				'New Zealand',
				'Wellington',
				'Can']							
		}

	}
	$scope.countries=[
	    "India",
	    "Pakistan",
	    "Singapore",
	    "SouthAfrica",
	    "UnitedKingdom",
	    "Canada",
	    "UnitedStates",
	    "Australia",
	    "NewZealand"
	  ];
	$scope.trends=[];
  	$scope.loadTrends=function(){
  	
	  	$scope.countryTrend=$scope.json[$scope.firstCountry].name;
	  	if(!$scope.myForm.secondCountry.$dirty){
	  		for(let i=0;i<$scope.countryTrend.length;i++){
	  			let url="http://twitter.com/search?q="+$scope.countryTrend[i];
	  			let obj={'name': $scope.countryTrend[i],'url': url};
	  			$scope.trends.push(obj);
	  		}
	  	}
	  	else{
	  		$scope.trends=[];
	  		$scope.secondTrend=$scope.json[$scope.secondCountry].name;
	  		for(let i=0;i<$scope.secondTrend.length;i++){
	  			if($scope.countryTrend.indexOf($scope.secondTrend[i])!=-1){
	  				let url="http://twitter.com/search?q="+$scope.secondTrend[i];
	  				let obj={'name': $scope.secondTrend[i],'url': url};
	  				$scope.trends.push(obj);
	  			}
	  		}

	  	}
	  	$scope.chartData=[['Status','Count']];
	  	drawChart();
  	}
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  $scope.chartData=[['Status','Count']];
  function drawChart() {
  	for(let i=0;i<$scope.trends.length;i++){
  		let len=$scope.trends[i].name.length;
  		let temp=[$scope.trends[i].name,len];
  		$scope.chartData.push(temp);
  	}
    var data = google.visualization.arrayToDataTable($scope.chartData);

    var options = {
      title: 'Trend Weight Contribution',
      pieHole: 0.3,
      colors:['green','#e8d247','purple','indigo','red','blue','pink','black','maroon','gray','orange','teal']
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }
});