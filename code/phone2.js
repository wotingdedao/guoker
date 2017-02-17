$(function(){
	//热门问答
	var aLi1=$('#banner-list ul li');
	aLi1.each(function(item,index){
		this.onmouseenter=function(){
			$(aLi1).each(function(item,index){
				$(aLi1).css('background','#fff');
			})
			this.style.background='#f3f3f3';
		}

	});
	//热门回答
	var aLi2=$('#hot-quest nav ul li');
	$(aLi2).each(function(item,index){
		$(aLi2).css('borderBottom','0');
	})
	$(aLi2).eq(0).css('borderBottom','0.1rem solid #d82e5d');
	aLi2.each(function(item,index){
		this.onmouseenter=function(){
			$(aLi2).each(function(item,index){
				$(aLi2).css('borderBottom','0');
			})
			this.style.borderBottom='0.1rem solid #d82e5d';
		}
	})
	var aLi3=$('#hot-quest .list ul li');
	function showContent(_this){
		$(aLi3).each(function(item,index){
			$(aLi3).css('background','#fff');
		})
		$(_this).toggle(
			function(){
				_this.children[1].style.display='block';
				$(_this).css('height','6.5rem');
				//$(this:nth-child(2)).css('display','block');
			},
			function(){
				_this.style.height='2.05rem';
				_this.children[1].style.display='none';
			}
		)
	}
	// console.log(aLi3);
	aLi3.each(function(item,index){
		this.onmouseenter=function(){
			showContent(this);
			this.style.background='#f3f3f3';
		}

	})
	//小组热帖
	var aLi4=$('#team nav ul li');
	$(aLi4).each(function(item,index){
		$(aLi4).css('borderBottom','0');
	})
	$(aLi4).eq(0).css('borderBottom','0.1rem solid #d82e5d');
	aLi4.each(function(item,index){
		this.onmouseenter=function(){
			$(aLi4).each(function(item,index){
				$(aLi4).css('borderBottom','0');
			})
			this.style.borderBottom='0.1rem solid #d82e5d';
		}
	})
	var aLi5=$('#team .list ul li');
	
	// console.log(aLi3);
	aLi5.each(function(item,index){
		this.onmouseenter=function(){
			showContent(this);
			this.style.background='#f3f3f3';
		}

	})
})