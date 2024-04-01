const buggerBtn = document.querySelector('.bugger_btn');
const buggerMenu = document.querySelector('.bugger_menu');
const searchMenu = document.querySelector('.search_menu');
const searchBtn = document.querySelectorAll('.search');

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

