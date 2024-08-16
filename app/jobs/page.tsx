import { JobList } from "@/components/list/JobsList";
import {  validateJobType } from "@/types/JobTypeGuard";


export default async function Home () {
  const {data} = await fetch('https://jsearch.p.rapidapi.com/search?query=Node.js+developer%2CUSA&page=1&num_pages=1&date_posted=all',{headers:{
    'x-rapidapi-key':'9ff66f0d07msh2e5677f6ea9e1d3p16a33ajsnb2fd88692a26'
  }}).then((res) =>
    res.json()
  )

  if(Array.isArray(data)){
const jobs = data.map((item)=>validateJobType(item))

  return (
      <JobList data={jobs.filter((item)=>!!item)}/>
  );
}else{
<h1>Errors</h1> 
}

}
