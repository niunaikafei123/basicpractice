// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'],function($provide,$filterProvider){
	//自定义服务
		$provide.provider('abcService',function(){
				this.$get = function(){
					return{
						message : 'abcService Message'
					}
				}
		});
		//自定义工厂
		$provide.factory('abcFactory',function(){
				return "abab";
		})	
		//自定义工厂
		$provide.factory('Data',function(){
				return {
					name : '小小',
					city:[
						{
							name:'上海',
							py:'shanghai',
						},
						{
							name:'天津',
							py:'tianjin',
						},
						{
							name:'上海',
							py:'shanghai',
						},
						{
							name:'重庆',
							py:'chongqing',
						},
					]
				}
		})
	//自定义服务(注：对于自定义服务来讲，返回的东西只能是对象格式的，而自定义工厂可以返回任意类型，例如字符串)
		$provide.service('abcService3',function(){
			return [1,2,3,4,5,6,7];
		})
	 $filterProvider.register('filterAge',function(){
			return function(obj){
				console.log(obj);
//				return obj;
				var newarray = [];
			  angular.forEach(obj,function(o){
			  	console.log(o);
			  	if(o.age > 25){
			  		newarray.push(o);
			  	}
			  })
				return newarray;				
			}
	 })
		$provide.service('datas',function(){
			return [
				{name:'张鹏',
				 age:'12',
				 city:"上海"
				},
				{name:'星星',
				 age:'20',
				 city:'北京'					
				},
				{name:'玲玲',
				 age:'30',
				 city:"天津"
					
				}
			]
		})
})
//定义模块过滤器
.filter('filtercity',function(){
	return function(obj){
		var cityarray = [];
		angular.forEach(obj,function(o){
			if(o.city === "上海"){
				cityarray.push(o);
			}
		});
		return cityarray;
	}
})
.factory('hahaha',function(){
	return[
		{
			title:"no1",
			content:"no1-content",
		},
		{
			title:"no2",
			content:"no2-content",
		},
		{
			title:"no3",
			content:"no3-content",
		}
	]
})
//城市三级联动
.filter('filtercity',function(){
	return(function(obj,parent){
		console.log(obj);
		console.log(parent);
		var filterdata=[];
		angular.forEach(obj,function(data){
			console.log(data);
			if(data.parent == parent){
				filterdata.push(data);
				console.log(filterdata);
			}
		})
		return filterdata;
	})
})
.directive('kittencupGroup',function(){
	return{
		restrict:"E",
		replace:true,
		template:'<div ng-transclude></div>',
		transclude:true,
		controllerAs:'kittencupGroupcontroller',
		controller:function(){
			this.groups=[];
			this.closeOthercollapse = function(nowscope){
				angular.forEach(this.groups,function(scope){
					if(scope !== nowscope){
						scope.isopen = true;
					}
				})
			}
		}
		
	}
})
.directive('kittencupCollapse',function(){
	return{
		restrict:"E",
		replace:true,
		require:'^kittencupGroup', //这个controller需要用到上个指令中的controller，则需要写require
		templateUrl:'/templates/kittencupCollapse.html',
		scope:{
			heading:"@"  //通过属性来传值
		},
		link:function(scope,iElement,iAttrs,kittencupGroupcontroller){
			scope.isopen = true;
			scope.changeOpen =function(){
				scope.isopen = !scope.isopen;
				kittencupGroupcontroller.closeOthercollapse(scope);
			}
			kittencupGroupcontroller.groups.push(scope);
		},
		transclude:true //指令内部的内容替换	
	}
})
//自定义指令
.directive('costomTag',function(){
	return{
			restrict:'ECA',  //E为元素风格，C为类的形式，A为属性的形式
//			templateUrl:'templates/a.html'
			template:"<div>这是新数据<span ng-transclude></span></div>",
			transclude:true, //用于保留原始数据
		  compile:function(tElement,tAttrs,transclude){
		  	//编译阶段
		  	tElement.append(angular.element('<div>aaaaa</div>'))
		  	console.log('custom compile 编译阶段');
		  	return{
		  		//表示在编译阶段之后，指令连接到子元素之前运行
		  		pref:function prelink(){
		  			console.log('customTag的prelink阶段..')
		  		},
		  		//表示在所有子元素都连接之后才运行
		  		post:function postlink(scope,iElement,iAttrs,controller){
		  			iElement.on('click',function(){
		  				console.log(scope.item);
		  				scope.$apply(function(){
		  					scope.item.name = "改变了哈哈";
		  				})
		  			})
		  			console.log('customs all directive link')
		  		}
		  	}
//		  	return postlink function(){
//		  		console.log('compile return fun');
//		  	}
		  },
		  link:function(){
		  	
		  }
	}
})
.directive('bookList',function(){
	 return{
	 	 restrict:"ECAM",
	 	 controller:function($scope){
	 	 			$scope.books = [
					{
						name:'java',
					},
					{
						name:'php',
					},
					{
						name:'javascript'
					}
				];
//				this.addBook = function(){
//					alert('test');
//				};
				this.addBook = function(){
					$scope.books.push({name:'c++'})
				}
	 	 },
	 	 controllerAs:'bookListController',
	 	 template:'<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
	 	 replace:true,
//	 	 link:function(scope,iEelement,iAttrs,bookListController){
//	 	 		iEelement.on('click',bookListController.addBook)
//	 	 }
	 	 link:function(scope,iEelement,iAttrs,bookListController){
//	 	 		iEelement.on('click',bookListController.addBook)
	 	 }
	 }
})
.directive('bookAdd',function(){
	return{
		restrict:"ECAM",
		require:'^bookList', //表示bookAdd所依赖的指令在这个指令的上面，所以需要在前面加上箭头
		template:'<button type="button">添加</button>',
		replace:true,
		link:function(scope,iEelement,iAttrs,bookListController){
	 	 		iEelement.on('click',bookListController.addBook)
	 	 }
	}
})
.directive('addShuxing',function(){
	return{
		restrict:"ECAM",
		controller:function($scope){
			//console.log($scope.a());
//			$scope.fruits = $scope.a();
         // 双向绑定引用类型
         console.log($scope.b);
		 $scope.fruits = $scope.b;
	     $scope.b.push({name:"菠萝"});
	     //使用简单数据类型的方法
	     //  console.log($scope.c);
		},
		template:'<div><ul><li ng-repeat = "fruit in fruits">{{fruit.name}}</li><ul></div>',
		scope:{
			//a:"&fruits",
			b:"=parents",
			//c:"@parentTitle"
		},
		replace:true,
		link:function(scope,iElement,iAttrs,ctrl){
			
		}
	}
})
.directive('costomTags',function(){
	return{
			restrict:'ECA',  //E为元素风格，C为类的形式，A为属性的形式
		  compile:function(){
		  	
		  },
		  link:function(){
		  	
		  }
	}
})
.directive('costom2Tag',function(){
	return{
			restrict:'ECA',  //E为元素风格，C为类的形式，A为属性的形式
			templateUrl:'costom2Tag'
	}
})
.constant("aa","现在7点半了")  //可以用来声明整个应用范围内的常量，并且让他们在所有配置（config方法里）和实例（controller,services等）方法中都可用
.value("bb","几点能走呢")  //只能注入像controller，services，factory等方法

.directive('hideTabs', function($rootScope) {  
  return {  
    restrict: 'A',  
    link: function(scope, element, attributes) {  
      scope.$on('$ionicView.beforeEnter', function() {  
        scope.$watch(attributes.hideTabs, function(value){  
          $rootScope.hideTabs = 'tabs-item-hide';  
        });  
      });  
      scope.$on('$ionicView.beforeLeave', function() {  
        scope.$watch(attributes.hideTabs, function(value){  
          $rootScope.hideTabs = 'tabs-item-hide';  
        });  
        scope.$watch('$destroy',function(){  
          $rootScope.hideTabs = false;  
        })  
      });  
    }  
  };  
})

.directive('even',function(){
	return{
		require:'ngModel',
		link : function(scope,elm,attrs,ngModelController){
			ngModelController.$parsers.push(function(viewvalue){
				console.log(viewvalue);
			})
		}
	}
})

//run方法是注入之后，用户可用之前执行，比如加载远程的模板，需要在使用前放入缓存，或者在使用操作前判断用户是否登录，未登录可以先去登录页面
.run(function($ionicPlatform) {
	console.log("run")
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
	console.log("config")
	//为了使安卓手机导航条置顶，需要以下几句代码
      $ionicConfigProvider.platform.ios.tabs.style('standard'); 
	    $ionicConfigProvider.platform.ios.tabs.position('bottom');
	    $ionicConfigProvider.platform.android.tabs.style('standard');
	    $ionicConfigProvider.platform.android.tabs.position('standard');
	
	    $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
	    $ionicConfigProvider.platform.android.navBar.alignTitle('left');
	
	    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
	    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        
	
	    $ionicConfigProvider.platform.ios.views.transition('ios'); 
	    $ionicConfigProvider.platform.android.views.transition('android');	

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
   .state('tab.jiedian', {
    url: '/dash/jiedian',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-jiedian.html',
        controller: 'jiedianCtrl'
      }
    }
  })
  .state('tab.shuzu', {
    url: '/dash/shuzu',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-shuzu.html',
        controller: 'ShuzuCtrl'
      }
    }
  })
  .state('tab.bibao', {
    url: '/dash/bibao',
    views: {
      'tab-dash': {
        templateUrl: 'templates/bibao.html',
        controller: 'BibaoCtrl'
      }
    }
  })
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
    .state('tab.form', {
    url: '/account/form',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-form.html',
//      controller: 'FormCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
