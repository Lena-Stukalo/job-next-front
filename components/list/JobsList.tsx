import { IJobType } from "@/types/jobType";
import { ListCard } from "./ListCard";

export function JobList({ data }: { data: IJobType[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-4">
      {data.map((job) => (
        <li key={job.job_id}>
          <ListCard job={job} />
        </li>
      ))}
    </ul>
  );
}
