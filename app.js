new Vue({

	el:"#app",
	data:{
		name:"Hero",
		age:20,
		website:"http://www.baidu.com",
		websiteTag:"<a href='http://www.baidu.com'>百度一下</a>",
		x:0,
		y:0
	},
	methods:{
		intro:function() {
			return "My name is "+this.name;
		},
		add:function(index) {
			this.age+=index;
		},
		minus:function(index) {
			this.age-=index;
		},
		updateXY:function(event) {
			this.x=event.offsetX;
			this.y=event.offsetY;
			console.log(event);
		},
		alert:function(event) {
			alert("Hello World!!");
		},
		testCapture:function(num) {
			alert(num);
		}
	}
});

/*

el:表示要获取的容器的根元素的名称
data：用于存储数据
methods:用于存储方法
*/