<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<jsp:useBean id="aMgr" class="pack_Admin.AdminMgr" />
<% 
String aId = request.getParameter("aId");
String aPw = request.getParameter("aPw");
request.setCharacterEncoding("UTF-8"); 
boolean loginRes =aMgr.Administratorlogin(aId, aPw);

%>

<script>
<%
if (loginRes) {
	session.setAttribute("aId_Session", aId);
%>	
	location.href="/index.jsp";
<%
} else {
%>	
	alert("���̵� �Ǵ� ��й�ȣ�� Ȯ�����ּ���.");
	location.href="/Admin/index.jsp";
<%
}
%>
</script>