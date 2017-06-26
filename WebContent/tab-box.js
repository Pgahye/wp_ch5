var tabBox= {
		
		liElementSelected : null,

		init: function(){
			
			for(var i=1; i<=5; i++){
				var liElement = document.getElementById("tab-"+i);
				console.log(liElement);
				liElement.onclick = this.onTabClicked;
				
			}
			
		},
		
		onTabClicked: function(){
			
			var liElement = this;
			console.log(this); //객체가 아닌 엘리먼트를 의미 
			var __this = tabBox;
			if(__this.liElementSelected != null){
				
				__this.liElementSelected.className= "";
			}
			liElement.className = "selected";
			
			__this.liElementSelected= liElement;
			
			var tabview = document.getElementById("tab-view");
			
			tabview.innerHTML = "탭뷰"+liElement.getAttribute("data-number")+"입니다";
			
		}
		
		
}