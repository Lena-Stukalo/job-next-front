export async function AllJobs(search:string) {
    return await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${search}&date_posted=all`,
        {
          headers: {
            "x-rapidapi-key": process.env.API_KEY!,
          },
        }
      ).then((res) => res.json());
}
export async function OneJob(id:string) {
    return await fetch(
        `https://jsearch.p.rapidapi.com/job-details?job_id=${id}&extended_publisher_details=false`,
        {
          headers: {
            "x-rapidapi-key": process.env.API_KEY!,
          },
        }
      ).then((res) => res.json());
}

