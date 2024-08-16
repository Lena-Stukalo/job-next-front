export async function AllJobs(search:string) {
    return await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${search}&date_posted=all`,
        {
          headers: {
            "x-rapidapi-key": "9ff66f0d07msh2e5677f6ea9e1d3p16a33ajsnb2fd88692a26",
          },
        }
      ).then((res) => res.json());
}