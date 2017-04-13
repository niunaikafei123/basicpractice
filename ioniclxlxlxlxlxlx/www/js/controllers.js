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
   
   for (var i = 0; i < 5; i++) {
	  setTimeout(function() {
	    console.log(i);
	  }, 1000 * i);
	}
   
   setTimeout(function() {
	  console.log(1)
	}, 0);
	new Promise(function executor(resolve) {
	  console.log(2);
	  for( var i=0 ; i<10000 ; i++ ) {
	    i == 9999 && resolve();
	  }
	  console.log(3);
	}).then(function() {
	  console.log(4);
	});
	console.log(5);
})

//每个函数都有一个prorotype,即原型，然后每个对象都有一个__proto__，可成为隐式原型，并且存在一个这么的关系，对象.__proto__ === 方法.prorotype
.controller('BibaoCtrl',function($scope,Data,$state){
//	function Fn() { }
//      Fn.prototype.name = '王福朋';
//      Fn.prototype.getYear = function () {
//          return 1988;
//      };
//
//      var fn = new Fn();
//      console.log(fn);
//      console.log(Fn.prototype);
//      console.log(fn.name);
//      console.log(fn.getYear());
		function aaa(){
			aaa.prototype.a = 1;
			aaa.prototype.b = 2;
		}
		var bbb = new aaa();
		console.log(bbb);
		console.log(bbb.a);
		var yyy={
			a:10,
			b:20
		}
		console.log(yyy.toString());
		console.log(a);
		var a = 10;
		console.log(this);
//		函数在定义的时候,已经确定了自由变量的作用域,而不是在函数调用的时候
		var a = 10;
		function fn(){
			console.log(a);
		}
		function bar(f){
			var a = 20;
			f();
		}
		bar(fn); //因为函数fn在定义的时候，已经明确了a为10，所以在执行fn函数的时候，直接打印出来的是10;
//		关于this的取值情况，this取值分以下四种情况
//		1>构造函数
//		构造函数是为了new一个对象,并且构造函数的函数名第一个需要大写
		function Foo(){
			this.name = "王福朋";
			this.year = "1988";
			console.log(this);	//此时的this是window		
		}
		Foo();
//		2>函数作为对象的一个属性
//		如果函数作为对象的一个属性时,并且作为对象的一个属性被调用时,函数中的this指向该对象
		var obj = {
			x:10,
			fn:function(){
				console.log(this);  //此时的this指向obj这个对象
				console.log(this.x); //10
			}
		};
		obj.fn();
//		然而,如果fn函数不是作为obj对象的属性被调用,而是赋给一个新的变量的时候,此时this就指向了window
		var obj = {
			x:10,
			fn:function(){
				console.log(this);  //此时的this指向window
				console.log(this.x); //undefined
			}
		};	
		var fn1 = obj.fn;
		fn1();
//		3>函数用call或者apply调用
//		当一个函数被call或者apply调用的时候,this的值就取传入的对象的值.
		var obj = {
			x:10
		}
		var fn = function(){
			console.log(this);  //obj
			console.log(this.x);  //10
		}
		fn.call(obj);
		
//		4>全局调用普通函数
		var pp = 10;
		var yyp = function(){
			console.log(this);   //window
			console.log(window.pp);  //undefined
		}
		yyp();
		
		var tt = 10;
		console.log(tt);
		console.log(window.tt);
		
//		js中的apply和call方法
//		call方法:调用一个对象的方法,以另一个对象替换当前的对象
		function f(){
	                  var a = "name";		
	                  this.b = "test1";		
	                  this.add = function (){ return "add" }		
	               }
		
		function o(){
		               this. c = "c";
		             }

        f.call(o);  //就是把f的方法在o中走一遍
		
//		闭包的两种情况:1.函数作为返回值,2函数作为参数传递
		function fn(){
			var max = 10;
			return function bar(x){
				if(x > max){
					console.log(x);
				}
			}
		}
		//闭包的两个特殊例子
		function aa(){
			var tt = 6;
			(function(){
				console.log(tt);
			})()
		}
		aa();
	//解读：这种的一个普通的闭包说明闭包用到了外面定义的变量，是可以拿到的，因此可以打印出来tt为6
	function bb(){
		var pp = "11";
		(function(){
			if( pp === 'undefined'){
				console.log("hello" + pp);
			}
			else{
				console.log("你好" + pp);
			}
		})()
	}
	bb();
	//解读：这样的话会执行else后面的语句，因为闭包中可以拿到pp的值，因此执行else；
	function cc(){
		var yy = 0;
		(function(){
			if(typeof yy === 'undefined'){
				var yy = "000";
				console.log("我是新数据" + yy);
			}
			else{
				console.log("我是旧数据" + yy)
			}
		})()
	}
	cc();
	//解读：这种的yy虽然在闭包外面定义了，但是因为在闭包里面有重新赋值，所以在闭包里面的刚开始相当于加了一条var yy;因此此时的yy就是undefined，因此会走if语句。
	
	function Foo() {
	    var i = 0;
	    return function() {
	        console.log(i++);
	    }
	}	 
	var f1 = Foo(),
	    f2 = Foo();
	f1(); //0
	f1(); //1
	f2(); //0  这里因为f2是Foo的一个新对象，所以要重新开始
	
	var bb = 1;
	function aa(bb){
		bb = 2;
		console.log(bb);
	};
	aa(bb); //相当于aa(1),但是因为a函数里面重新定义了变量bb，因此a函数中的bb值为2，因此会打印出来2
	console.log(bb); //这个会打印出来全局变量bb为1
})
.controller('jiedianCtrl', function($scope,$ionicActionSheet,$state) {
	$scope.myFunction = function(){
		console.log("222");
		var node=document.getElementById("myList2").lastChild;
		var list = document.getElementById("myList1");
		if(document.getElementById("myList2").childNodes.length >=1){
			list.appendChild(node);
		}
		else{
			alert("没有子元素了，so无法删除了");
		}
		
	};
	$scope.removenode = function(){
		var node=document.getElementById("myList2").lastChild;
		node.parentNode.removeChild(node);
	};
	$scope.addnode = function(){
		var list = document.getElementById("myList1");
		list.appendChild(document.createTextNode("新添加"));
	};
	$scope.replacenode = function(){
		var a = document.getElementById('myList1').lastChild;
		var b = document.getElementById('myList1').firstChild;
		a.parentNode.replaceChild(b,a);
	};
	$scope.insertnode = function(){
		var newelement = document.createElement("li");
		var newnode = document.createTextNode("warter");
		newelement.appendChild(newnode);
		var list = document.getElementById("myList1");
		list.insertBefore(newelement,list.childNodes[0]);		
	};
	$scope.insertafternode = function(newnode,oldnode){
		 //判断oldnode后面还有没有同类别的标记
		  var nextnode = oldnode.nextSibling;
		 if(nextnode){ //如果没有则为null,则为false,有的话就为true
		  oldnode.parentNode.insertBefore(newnode,nextnode);
		 }else{
		  oldnode.parentNode.appendChild(newnode);
		 }
	};
	//闭包的应用
	for(var i=0;i<6;i++){
		(function(i){
			setTimeout(function(){
				console.log(i);
			},2000)
		})(i)
	}
	function aa(){
		var qq = "abc";
		(function(){
			console.log(qq);
		})()
	}
	aa();
	
	
	//关于ajax的部分
	var xml = new XMLHttpRequest(); //创建XMLHttpRequest对象
	console.log(xml);
	//首先会检查XMLHttpRequest的整体状态并且保证它已经完成（readyState=4），即数据已经发送完毕，然后根据服务器的设定询问请求状态，如果一切已经就绪（status =200），然后执行下面需要的操作。
	//注意：XMLHttpRequest有两个方法，open和send，其中open方法指定了：1.向服务器提交数据的类型，即post还是get，2.请求的url地址和传递的参数，3.传输方式，false为同步，true为异步，默认为true
	//send方法用来向服务器发送请求的。
	//ajax无非是两个过程，发送请求和相应请求。
	
	
//	xml.open("POST", 'http://www.baidu.com', false); //对象已经建立，调用open方法
//	//当readyState改变时,会触发onreadystatechange事件
//  xml.onreadystatechange = function () {
//      if (xml.readyState == 4) {
//          document.getElementById("user1").innerHTML = "数据正在加载...";
//          if (xml.status == 200) {
//              document.write(xml.responseText);
//          }
//      }
//  }
//  xml.send();

//使用ajax的几个优点：
//1.页面无刷新,在页面内与服务器通信,用户的体验很好;
//2.使用异步方式与服务器进行通信，不需要打断用户的操作，具有更加快速的相应能力；
//3.可以吧以前一些服务器负担的工作转嫁给客户端，利用客户端闲置的能力来处理，减轻服务器和带宽的负担，ajax的原则是“按需取数据”；
	//jsonp的介绍
	
		
	//函数的引用
		function master(callback){
			var a = 1 ;
			window.fn = callback;
			callback(a);
		}
		
		master(function(a){
			console.log(a)
		})
		
		window.fn(5)
})
.controller('jsonpCtrl', function($scope,$ionicActionSheet,$state) {
	window.GetData = function(data){
		console.log(data.count);		
	}
	$scope.GetAjaxData = function(){
		var url = "http://api.douban.com/v2/movie/in_theaters?callback=GetData";
		var script = document.createElement('script');
		script.setAttribute("src",url);
		document.getElementsByTagName("head")[0].appendChild(script);
	}
	//总结jsonp，本地站点一直处于主动地位，定义callback函数，动态添加script节点，执行远程js，发送请求，传入请求参数和callback名称;url的问号前面是web站点一般处理程序的SearchBook地址，问号后面我们传入一个参数callback,值为GetData，也就是我们上面定义的方法名以及回调函数的名称，当然我们可以传入更多的参数。
	//ajax和jsonp的相同点与不同点
	//1.相同点:目的一样，都是请求一个url，然后把服务器返回的数据进行处理。
	//2.不同点：本质上是不同的，ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心是通过HTTP来动态添加<script>标签来调用服务器提供的js脚本。
	//3.他们的区别不在于是否跨域，因为ajax通过服务器代理一样可以实现跨域，jsonp本身也不排斥同域的属于获取
		function test(){
			console.log(a);
			console.log(foo());
			var a = 1;
			function foo(){
				return 2;
			}
		}
		test();
		
		function aa(){
			var stb = "hello world";
			(function(){
				if(typeof stb === 'undefined'){
					var stb = "leilei";
					console.log("nihao" + stb);
				}
				else{
					console.log("nibuhao" + stb);
				}
			})()
		}
		aa();
		
})


.controller('DashCtrl', function($scope,$ionicActionSheet,$timeout,$state) {
	$scope.tiaoshuzu = function(){
		$state.go('tab.shuzu')
	};
	$scope.tiaobibao = function(){
		$state.go('tab.bibao');
	};
	$scope.tiaojiedian = function(){
		$state.go('tab.jiedian');
	}
	$scope.tiaojsonp = function(){
		$state.go('tab.jsonp');
	}
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
