import { validateJobType } from "@/types/JobTypeGuard";
import { Card } from "./card";

export default async function Details({ params }: { params: { id: string } }) {
  const { data } = await fetch(
    `https://jsearch.p.rapidapi.com/job-details?job_id=${params.id}&extended_publisher_details=false`,
    {
      headers: {
        "x-rapidapi-key": "9ff66f0d07msh2e5677f6ea9e1d3p16a33ajsnb2fd88692a26",
      },
    }
  ).then((res) => res.json());
  if (!Array.isArray(data)) {
    throw Error("Wrong data ");
  }
  const job = validateJobType(data[0]);
  if (job) {
    return <Card job={job}  />;
  }
}
