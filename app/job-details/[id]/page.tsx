import { validateJobType } from "@/types/JobTypeGuard";
import { Card } from "./card";
import { OneJob } from "@/service/jobService";

export default async function Details({ params }: { params: { id: string } }) {
  const { data } = await OneJob(params.id);
  if (!Array.isArray(data)) {
    throw Error("Wrong data ");
  }
  const job = validateJobType(data[0]);
  if (job) {
    return <Card job={job} />;
  }
}
