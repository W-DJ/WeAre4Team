$(function() {
	
	/* 부모창 링크 이동 시작*/
	$("button#homeBtn").click(function(){
		window.parent.location.href="/index.jsp";
		});
	$("button#joinBtn").click(function(){
		window.parent.location.href="/Member/Join.jsp";
		});
	$("button#loginBtn").click(function(){
		window.parent.location.href="/Member/Login.jsp";
	});
	$("button#MypageBtn").click(function(){
		window.parent.location.href="/Member/MyPage.jsp";
	});
	$("button#InquireBtn").click(function(){
		window.parent.location.href="/bbs_Notice/ServiceMain.jsp";
	});
	$("button#PrListBtn").click(function(){
		window.parent.location.href="/product/prodList.jsp";
	});
	$("button#MemberListBtn").click(function(){
		window.parent.location.href="/Member/MemList.jsp";
	});
	$("button#logOutBtn").click(function(){
		window.parent.location.href="/Member/Logout.jsp";
	});
	$("div#headerLogoArea").click(function(){
		window.parent.location.href="/index.jsp";
	});
	
	$("a#allGoods").click(function(){
		window.parent.location.href="/product/prodList.jsp";
	});
	
	$("a.typeSearch").click(function(){
		typeSearch = $(this).text().trim();
		window.parent.location.href="/product/prodList.jsp?typeSearch="+typeSearch;
	});
	
	$("a.orderBy").click(function(){
		orderBy = $(this).attr("data-orderBy");
		window.parent.location.href="/product/prodList.jsp?orderBy="+orderBy;
	});
		/* 부모창 링크 이동 끝*/
		
		/* 메인메뉴 pulldown 시작*/
	$("ul#mainMenu>li.mainLi").mouseover(function () {
       $(this).children("ul.subMenu").stop().slideDown();
    });
    $("ul#mainMenu>li.mainLi").mouseout(function () {
        $(this).children("ul.subMenu").stop().slideUp();
    });


		/* 메인메뉴 pulldown 끝*/	
	
	function home() {
	location.href='/bbs_Notice/noticebbs.jsp';
	}

	setInterval(fnSlide, 5000);
	
	function fnSlide() {
		
		$("#slideFrame").animate(
		{"margin-left": "-1200px"},
		2000,
		function(){
			// div#slideFrame 하위의 첫 번째 a요소를
			// 마지막 a요소 다음으로 이동하세요.
			$("#slideFrame a:first-child")
					.insertAfter("#slideFrame a:last-child");
			// #slideFrame의 margin-left를 원위치. margin-left: 0;
			$("#slideFrame").css({"margin-left": "0"});
		});
	};
	$(window).scroll(function(){
                let topPos = $(this).scrollTop();
                if(topPos > 50){
                    $("#topBtnArea").fadeIn(1000);
            }else{
                $("#topBtnArea").fadeOut(1000);
            }
        });
        $("div#topBtnArea").click(function(){
            $(window).scrollTop(0);
        });


	/* 상품 클릭 시 상품 상세보기 페이지 이동 끝 */
	
	$("button.typeSearch").click(function(){
		typeSearch = $(this).attr("data-typeSearch");
		location.href="/product/prodList.jsp?typeSearch="+typeSearch;
	});
	
	$("button.orderBy").click(function(){
		orderBy = $(this).attr("data-orderBy");
		location.href="/product/prodList.jsp?orderBy="+orderBy;
	});


	/* 더보기 클릭 시 상품 리스트 페이지 이동 끝*/

	});
	/* 상품 클릭 시 상품상세보기 페이지 이동 시작 */

	function read(p1, p2) {
		
		let param = "/product/prodRead.jsp?num="+p1;
		     param += "&nowPage="+p2;
		window.parent.location.href=param;
	}		
