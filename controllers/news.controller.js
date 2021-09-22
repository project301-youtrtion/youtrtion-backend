'use strict';
const app_key=process.env.APP_KEY;
 const axios=require('axios')


const getNews=async(request,respond)=>{
    const item=request.query.qintitle;
    console.log(item)

    const UrlForItem="https://newsdata.io/api/1/news"
  
    const getItem=await axios.get(`${UrlForItem}?apikey=${app_key}&qintitle=${item}&language=en`)


    

    respond.json(getItem.data)
    console.log(getItem.data)


}

module.exports=getNews