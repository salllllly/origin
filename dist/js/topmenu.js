let $window=$(window),winW=$window.width();function slider_ul_list(i){let n,e=$("#"+i),t=e.find(".item_menu_Box").width(),l=e.find("ul").width(),o=e.find("li"),d=e.find(".active").index(),f=(e.find("li.active").offset().left,(winW-t)/2),s=0,a=0,m=new Array,r=new Array;o.each((function(){m[a]=$(this).offset().left,s=m[a]-f,s<l-t&&(n=a),r[a]=s,a++})),$(window).on("resize",(function(){l=e.find("ul").width(),t=e.find(".item_menu_Box").width(),l>t?(e.addClass("open_flexslider"),e.find(".item_menu_Box").scrollLeft(r[d])):e.removeClass("open_flexslider")})).resize(),$("#"+i+" .rbtn").on("click",(function(){r[d]<l-t&&(d++,e.find(".item_menu_Box").stop().animate({scrollLeft:r[d]},600))})),$("#"+i+" .lbtn").on("click",(function(){r[d]>0&&(d--,e.find(".item_menu_Box").stop().animate({scrollLeft:r[d]},600))})),$("#"+i+" .item_menu_Box").on("scroll",(function(){let i=e.find(".item_menu_Box").scrollLeft();i<=0?(e.addClass("mleft"),e.find(".lbtn").addClass("nopage")):i>=r[n]?(e.addClass("mright"),e.find(".rbtn").addClass("nopage")):(e.removeClass("mleft mright"),e.find(".flex-direction-nav a").removeClass("nopage"))})).scroll()}window.setTimeout((function(){slider_ul_list("top-menu-ul")}),600);