const buggerBtn = document.querySelector('.bugger_btn');
const buggerMenu = document.querySelector('.bugger_menu');
const searchMenu = document.querySelector('.search_menu');
const searchBtn = document.querySelectorAll('.search');
const detailBtn = document.querySelectorAll('.main01>button');
const detailImg = document.querySelectorAll('.detail_box1');

detailBtn.forEach(function(obj,key){
    // console.log(obj)
    obj.onclick = ()=>{
        // if(key==0){
        //     detailImg.className='detail_box1 active';
        // }
        detailImg.forEach(function(obj2,key2){
            if(key==key2){
                obj2.className='detail_box1 active';
            }
        })
    }
})

detailImg.forEach(function(obj,key){
    obj.onclick=()=>{
        obj.className='detail_box1';
    }
})

buggerBtn.onclick = function(){
    buggerMenu.style.display="block";
    buggerBtn.style = 'opacity:0';
}

close_bugger.onclick = function(){
    buggerMenu.style.display="none";
    buggerBtn.style = 'opacity:1';
}

searchBtn.forEach(function(v,k){
    v.onclick = function(){
        buggerMenu.style.display="none";
        searchMenu.style.transform = 'translateY(10%)';
        search_value.value = ""
    }
});


close_search.onclick = function(){
    searchMenu.style.transform = 'translateX(-100%)';
    buggerBtn.style = 'opacity:1';
}

search_enter.onclick = function(){
    if(search_value.value == ""){
        alert("내용을 입력해주세요");
    } else {
        searchMenu.style.transform = 'translateX(-100%)';
        buggerBtn.style = 'opacity:1';
        
    }
}

