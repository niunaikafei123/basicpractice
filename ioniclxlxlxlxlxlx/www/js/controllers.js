angular.module('starter.controllers', [])
.controller('ShuzuCtrl',function($scope,Data,$state){
	var shuzu00 = [1,2,3,4,5];
	var shuzu01 = ["aa","bb","cc","dd"];
	shuzu00.push("11,12,13"); //向数组的末尾添加元素
	shuzu00.unshift("-1,-2,-3"); //向数组的开头添加元素
	var shumu = shuzu00.pop(); //删除数组的末尾元素
	var shuzu001 = shuzu00.splice(1,0,44);  //向shuzu00中1的位置添加元素44
	var shuzushanchu = shuzu00.shift(); //删除shuzu00的开始元素
	shuzu00.splice(1,2); //删除数组从index为1的开始，删除两个元素
	var shuzu99 = shuzu00.concat(shuzu01);
	var shuzu88 = shuzu99.reverse(); //将shuzu99取反
	var shuzu77 = shuzu88.sort(paixu); //将shuzu88按照大小排序
	console.log(shuzu77);
	document.getElementById("aa0").innerHTML = shuzu77.toString('.');	
	function paixu(a,b){
		return a - b;
	}
	var shuzup = [11,22,33,44,55,66,77,88,99];
	shuzup.slice(2,4);
	console.log(shuzup.slice(2,4)); //从数组中截取数组的一部分，包含前面不包含后面
	console.log(shuzup.join("."));  //将数组变成字符串
	console.log(shuzup.length);
	shuzup.length = 15;
	console.log(shuzup.length);
	shuzup.length = 4;
	console.log(shuzup);
   //	字符串的操作
   var str1 = "abcdefgh";
   var newstr = str1.substring(2,5); //截取字符串中2到4位的子串
   console.log(newstr);
   var newstr2 = str1.slice(2,5); //截取字符串index2到4之间的子串
   console.log(newstr2);
   var newstr3 = str1.substr(2,5); //截取字符串从index为2的地方开始截取，一共截取5个
   console.log(newstr3); 
   var newstr4 = str1.indexOf('de');//指出d所在的位置，如果所找的字符在字符串中不存在，则返回-1
   console.log(newstr4); 
   var str = "ABCDECDF";    
   console.log(str.lastIndexOf("CD",3)) //后面的数字指明了要查看哪个字符的index，然后从左到右查看它的index是几
   console.log(str.split('',4)); //将字符串变为数组
   
   var gaibian =  "ABCabc";
   console.log(gaibian.toLocaleUpperCase()); //将所有的字符变成大写的
   console.log(gaibian.toLocaleLowerCase()); //将所有的字符变成小写的
   
	
	
	
	
	
})
.controller('DashCtrl', function($scope,$ionicActionSheet,$timeout,$state) {
	$scope.tiaoshuzu = function(){
		$state.go('tab.shuzu')
	};	
	$scope.show = function(){
		 var hideSheet = $ionicActionSheet.show({
          buttons: [
            { text: '<b>Share</b> This' },
            { text: 'Move' }
          ],
          destructiveText: 'Delete',
          titleText: 'Modify your album',
          cancelText: 'Cancel',
          cancel: function() {
               console.log("我是删除键");
             },
          buttonClicked: function(index) {
            return true;
          }
      });
       $timeout(function() {
          hideSheet();
      }, 5000);
	};
	$scope.xianshi = true;
	$scope.xianshi11 = true;
   $scope.dingdan = function(){
   		if($scope.xianshi){
   			$scope.xianshi = false;
   		}
   		else{
   			$scope.xianshi = true;
   		}
   };
	 var makesound = function(animal){
	 		animal.sound();
	 }
	 var chicken = function(){}
	 chicken.prototype.sound = function(){
	 		console.log("咯哒咯哒");
	 };
	 var duck = function(){
		 	duck.prototype.sound = function(){
		 		 console.log("嘎嘎嘎");
		 	}
	 }
	  makesound(new chicken());
	  makesound(new duck());
	  
	  $scope.date = new Date();
      //$apply清除脏数据
	  setInterval(function(){
	  	$scope.$apply(function(){
	  		 $scope.date = new Date();
	  	},1000)
	  })
      //$watch在ionic只有监听对象才有效果
		$scope.user = {name: "sss"}
		  $scope.updated = -1;
		
		  $scope.$watch('user.name',function(newvalue,oldvalue){
            console.log(newvalue,oldvalue)
		},true)
		  $scope.duixiang = {
		  	name:"小明",
		  	count:50,
		  }
		  $scope.$watch('duixiang.name',function(newvalue,oldvalue){
		  	 console.log(newvalue,oldvalue);
		  },true)
		  $scope.carts=[
		  	{  		
				id:1000,
				name:'iphone5',
				quantity:3,
				price:4300	
		  	},{
		  		id:1001,
				name:'iphone5s',
				quantity:5,
				price:4500
		  	},{
		  		id:1002,
				name:'iphone6',
				quantity:10,
				price:5100	
		  	},{
		  		id:1003,
				name:'iphone6plus',
				quantity:11,
				price:5500	
		  	}
		  ];
		  //计算总价格
		  $scope.totalprice = function(){
		  	var total = 0;
		  	angular.forEach($scope.carts,function(item){
		  		total += item.price*item.quantity;
		  	})
		  	return total;
		  }
		  //计算总数量
		  $scope.num = function(){
		  	var num = 0;
		  	angular.forEach($scope.carts,function(item){
		  		num += item.quantity;
		  	})
		  	return parseInt(num);
		  };
		  //查找要执行的那一项的索引
//		  var index = -1;
		  var selectid = function(id){
		  	var index = -1;
		  	angular.forEach($scope.carts,function(item,key){
		  		if(id == item.id){
		  			index = key;
		  			return;
		  		}
		  	})
		  	console.log(index);
		  	return index;
		  };		  
		  //清除购物车中的某一项
		  $scope.remove= function(id){
		  	var index = selectid(id);
		  	console.log(index);
		  	console.log(id);
		  	if(index != -1){
		  		$scope.carts.splice(index,1);
		  	}
		  };
		  //为购买者购物车里添加商品
		  $scope.add = function(id){
		  	 var index = selectid(id);
		  	 console.log(index);
		  	 if(index != -1){
		  	 	++$scope.carts[index].quantity;
		  	 }
		  };
		  //为购买者购物车里减商品
  		  $scope.reduce = function(id){
		  	 var index = selectid(id);
		  	 console.log(index);
		  	 var item = $scope.carts[index];
		  	 if(index != -1){
					if(item.quantity >1){
						--$scope.carts[index].quantity;
					}else{
						var returnkey = confirm("确定从购物车中删除商品");
						if(returnkey){
							$scope.remove(id);
						}
					}
		  	 	
		  	 }
		  }
  		  //用watch用法（当watch一个对象的时候，需要后面带上true这个参数）
  		  $scope.$watch('carts',function(oldvalue,newvalue){
  		  	console.log(oldvalue);
  		  	console.log(newvalue);
		  	angular.forEach(newvalue,function(item,key){
		  		if(item.quantity < 1){
		  			var returnkey = confirm("是否从购物车内删除该产品？");
		  			if(returnkey){
		  				$scope.remove(item.id);
		  			}
		  			else{
		  				item.quantity = oldvalue[key].quantity;
		  			}
		  		}
		  	})
  		  	
  		  },true)
})

.controller('ChatsCtrl', function($scope, Chats,abcService,abcFactory,abcService3,Data,$filter) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  console.log(Chats);
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  var Children = function(){
			console.log(1)
		}
		Children.prototype = {
			name : 'kk'
		}
		
		var children1 = new Children();
		var children2 = new Children();
		console.log(children1.__proto__ === children2.__proto__ )   //true
		
		var Duck = function(){
			//每new一次  Duck.prototype就重新获得一个新的对象
			//导致和上一次new的出来的实例的下一层原型不是同一个东西(引用地址)
			Duck.prototype = {
				name : 'aa'
			}
		}
		var duck1 = new Duck();
		var duck2 = new Duck();
		console.log(duck1.__proto__  === duck2.__proto__);   //false
		console.log(duck1);
		console.log(duck2);
		var a = {name:'A'};
		var b = {name:'B'};
		a.brother = b;
		b = {name :'newB'};
		console.log(a.brother.name);
		console.log(abcService);
		console.log(abcFactory);
		console.log(abcService3);
		$scope.shijian = new Date();
		$scope.daxie = "HJKK";
		$scope.xiaoxie = "ahnndn";
		console.log(Data.city);
			$scope.data={
				name:'aa',
				chengshi:
			[
				{
					city:"上海",
				 	py:"shanghai",
				},
				{
					name:'天津',
					py:'tianjin',
				},
				{
					name:'北京',
					py:'beijing',
				},
				{
					name:'重庆12345',
					py:'chongqing',
				},
			]
		};
//		在controller中使用过滤器	
		var number = $filter('number')(3000);
		var yuan = $filter('currency')(10000);
		console.log(number);
		console.log(yuan);
		var jsonstring = $filter('json')($scope.xiaoxie);
		console.log(jsonstring);
//		$scope.checkName = function(obj){
//			console.log(obj);
//		}
})
//注：Data是注入的工厂服务，从自定义工厂中取到的值
.controller('Acontroller',function($scope,Data){
	console.log($scope);
	$scope.data = {
		message:'哈喽哈喽' 
	}
	$scope.Data = Data;
})
.controller('Bcontroller',function($scope,Data){
	console.log($scope);
	$scope.data = $scope.$$prevSibling.data;  //第一种方式
	$scope.Data = Data;  //工厂方式
})
.controller('demoCtrl', function($scope) {
	$scope.poi = "这是新的";
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('firstController', function($scope,$state) {
	var that = this;
	console.log(this);
  $scope.hobbys=[
  	{
  		id:1,
  		name:"跳绳",
  	},
  	{
  	    id:2,
  	    name:"玩游戏",
  	},
  	{
  		id:3,
  		name:"弹钢琴",
  	}
  ];
  $scope.data = {
	 hobbys: [1,2],
	 city:8
  };  
  $scope.toggleHobbySelection = function(id){
  	var index = -1;
  	if($scope.data.hobbys === undefined){
  		$scope.data.hobbys=[];
  	}
  	else{
  		 index = $scope.data.hobbys.indexOf(id);
  	}  	
  	if(index === -1){
  		$scope.data.hobbys.push(id);
  	}else{
  		$scope.data.hobbys.splice(index,1)
  	}
  	console.log($scope.data.hobbys);
  }
  $scope.cities=[
  		{
  			name:"上海",
  			parent:0,
  			id:1
  		},
  		{
  			name:"上海市",
  			parent:1,
  			id:2
  		},
  		{
  			name:"徐汇区",
  			parent:2,
  			id:8
  		},
  		{	
  			name:"北京",
  			parent:0,
  			id:4 			
  		},
  		{
  			name:"北京市",
  			parent:4,
  			id:10
  		},
  		{
  			name:"朝阳区",
  			parent:10,
  			id:22  			
  		}
  	];
//	用于找parentid的方法
  	this.findCityparentId = function(id){
  		console.log(id);
  		var parentid;
  		angular.forEach($scope.cities,function(city){
  			if(city.id == id){
  				parentid = city.parent;
  				return;
  			}
  		})
		return parentid;
  	}
  	//	让城市关联使用
  	this.initdata = function(){
  		if( $scope.data.city !==undefined){
	     	$scope.data.area = this.findCityparentId($scope.data.city);
	     	$scope.data.province = this.findCityparentId($scope.data.area);
	     	console.log($scope.data.area);
	     }
  	}
  	this.initdata();
  	  //先保留一份默认值
  $scope.origData = angular.copy($scope.data);
  $scope.reset = function(){
  	console.log(this);
  	$scope.data = angular.copy($scope.origData);
  	$scope.myForm.$setPristine();  //将表单复位至原始状态
  	this.initdata();
  }.bind(this);
    this.aa = function(){
    	console.log(this == $scope);
    }
    this.aa();
     
})
.controller('AccountCtrl', function($scope,produceData,datas,hahaha,aa,bb,$state) {
	$scope.tiaozhuan = function(){
		console.log(0909);
		$state.go('tab.form');
	}
	console.log(bb);
	console.log(aa);
	console.log(hahaha);
	$scope.datatues = hahaha;
	console.log($scope);
	$scope.title = "我是title";
	$scope.fruits = [
		{
			name:'苹果',
		},
		{
			name:'香蕉',
		},
		{
			name:'橘子'
		}
	]
	$scope.hehes =[
		{
			id:10,
			name:"张三",
		},
		{
			id:20,
			name:"雷刚"			
		}
		
	]
	
  $scope.poi = "这是最新的吗";
  $scope.settings = {
    enableFriends: true
  };
$scope.pushNotification = { checked: true };
  $scope.pushNotificationChange = function(){
  	 console.log('Push Notification Change', $scope.pushNotification.checked);  	 
  };
  $scope.produceData = produceData;
  $scope.datas = datas;
  //通过angular调用jquery对象改变文本的值
  $scope.dianji = function(event){
  	console.log(event);
  	angular.element(event.target).html("您好");
  }
  //map方法针对数组，返回一个新的数组
  var users=[
  	{name:"张明",age:'12',sex:'男'},
  	{name:"丽丽",age:'20',sex:'女'},
  	{name:"超超",age:'19',sex:'男'}
  ];
  var names=users.map(function(obj){
  	return obj.name;
  });
  console.log(names.join(','));
  var array1 =["老师","学生","校长","主任"];
  var array2=["辛苦","劳累"];
  var array12 = [12,10,0,8,11,5]
  array1.push("课代表","班长"); //向数组末尾添加元素
  array1.unshift("憎恨","特别恨"); //向数组的开头添加元素
  array1.splice(2,0,"苹果") //向index为2的地方插入“苹果”

  var ppp = array1.pop(); //将数组的末尾删除，并且赋值给ppp
  var ttt = array1.shift(); //将数组的开头删除，并且赋值给ttt
  var det = array1.splice(0,2) //将数组从0开始，删除两个
  
  var newarray1 = array1.slice(1,3) //截取数组index从1到3的值
  var arrayarray = array1.concat(array2); //将数组1和数组2合并，并组成一个新数组
  
  var array3 = array1.slice(0); //将数组array1复制一遍
  var array4 = arrayarray.concat(); //将数组arrayarray复制一遍
  
  var array5 = array1.reverse(); //将数组array1反转
  var array6 = array12.sort(newsort); //直接sort()不带参数的话，将数组array12按照字母顺序进行排序，而如果sort(fun),也就是参数如果是一个函数的话，这个函数是一个比较函数，并且需要返回一个值用来说明这两个值的相对顺序的数字
  function newsort(a,b){
  	return a - b;
  }
  var string0 = array1.join('-'); //将数组变成字符串
  console.log(string0)
  console.log(array6);
  console.log(array3);
  console.log(arrayarray);
  console.log(newarray1);
  console.log(det);
  console.log(ttt);
  console.log(array1);
  console.log(ppp);
  
});
var total = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
});
console.log(total);
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
console.log(flattened);
var bv =[0,1,2,3,4].reduce(function(a,b){
  return a + b;
});
console.log(bv);
var  arr = [1, 2, 3, 4, 5];
sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
})
console.log(arr, sum);
var result=[
	{  subject: 'math',
        score: 88
	},
	{
        subject: 'chinese',
        score: 95
    },
    {
        subject: 'English',
        score: 80
    }
]
var zongfen = result.reduce(function(prev,cur){
	return prev+cur.score;	
},0)
console.log(zongfen);
