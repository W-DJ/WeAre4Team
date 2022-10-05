<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<style>
iframe#ifrNotice {
	width: 100%;
	height: 300px;
	
}
iframe#ifrInquire {
width: 100%;
height: 600px;
display: none;
}
</style>
<link rel="stylesheet" href="/style/common_style.css">
<script src="/script/jquery-3.6.0.min.js"></script>
<script src="/script/script_Notice.js"></script>

<body>
	 <header>
	    <!--  헤더템플릿 시작, iframe으로 변경 -->
		<iframe src="/indd/header.jsp" scrolling="no" width="100%" frameborder=0 id="headerIfm"></iframe>
	    <!--  헤더템플릿 끝 -->   
  	</header>
	<div id="wrap">
		<button id="noticeBtn" class="headBtn">공지사항</button>
		<button id="personalBtn" class="headBtn">1:1문의</button>
		

		<iframe id="ifrNotice" src="/bbs_Notice/noticebbs.jsp" frameborder="0" scrolling="0"></iframe>
	
		<iframe id="ifrInquire" src="/bbs_Inquire/inquirebbs.jsp" frameborder="0" scrolling="0" > </iframe>
	</div>



	<iframe src="/indd/footer.jsp" scrolling="no" width="100%" frameborder=0 id="footerIfm"></iframe>
</body>
</html>