$("#tc_export").click(function(){
  function t(){
      d = new Date;
      YYYY=(""+d.getFullYear()).slice(-2);
      MM=("00"+(d.getMonth()+1)).slice(-2);
      DD=("00"+(d.getDate())).slice(-2);
      hh=("00"+(d.getHours())).slice(-2);
      mm=("00"+(d.getMinutes())).slice(-2);
      ss=("00"+(d.getSeconds())).slice(-2);
      return ""+YYYY+MM+DD+hh+mm+ss;
  }
 
  user=$("#navUsername")[0].textContent;
  alert(user);
  tc=[]
  /***$(".item").toArray().forEach(a=>{
      name=a.textContent.trim();
      id=$('a',a)[0].href.split("id=")[1];
      img=$('img',a)[0].dataset.original.split("/")[5];
      tc.push([name,id,img]);
  });
  tc;
  ***/
  
  //var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tc));
  //dlAnchorElem.setAttribute("href",dataStr);
  //dlAnchorElem.setAttribute("download", user+"_TC_"+t()+".json");

}
)
