import { IJobType } from "@/types/jobType";
import Link from "next/link";
import { BsHeart, BsHeartFill } from "react-icons/bs";

export function ListCard({job}:{job:IJobType}) {

    return (
      <Link href={`/job-details/${job.job_id}`}>
        <div className="h-60 bg-cyan-900 rounded-md p-4 flex flex-col justify-between">
            
            <div>
            <h2 className="text-center">{job.job_title}</h2>
                <p className="p-1"><span className="text-cyan-200">City: </span>{job.job_city}</p>
                <p className="p-1"><span className="text-cyan-200">Publisher: </span>{job.job_publisher}</p>
                <p className="p-1"><span className="text-cyan-200">Employment type: </span>{job.job_employment_type}</p>
                <p className="p-1"><span className="text-cyan-200">Remoute/Office: </span>{job.job_is_remote?"Remoute":"Office"}</p>
            </div>
           
        </div>
      </Link>
    );
  }
  