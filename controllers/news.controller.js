'use strict';
const app_key=process.env.app_key;
 const axios=require('axios')


const getNews=async(request,respond)=>{
    const item=request.query.q;
    console.log(item)

    const UrlForItem="https://newsdata.io/api/1/news"
  
    const getItem=await axios.get(`${UrlForItem}?apikey=${app_key}&q=${item}`)

    respond.json(getItem.data)
    console.log(getItem.data)


}

module.exports=getNews