"use client";
import { IJobType } from "@/types/jobType";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { BiArrowBack } from "react-icons/bi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
interface IInfo {
  job: IJobType;
  router: AppRouterInstance;
  IsFavs: boolean;
  favorites: IJobType[];
}
export function Info({ job, router, IsFavs, favorites }: IInfo) {
  return (
    <div className="p-4 -screen">
      <div className="flex justify-between">
        <div className="cursor-pointer rounded bg-slate-800 p-1">
          <BiArrowBack onClick={router.back} />
        </div>
        <div className="cursor-pointer rounded bg-slate-800 p-1">
          {IsFavs ? (
            <BsHeartFill
              onClick={() => {
                localStorage.setItem(
                  "favoriteJobs",
                  JSON.stringify(
                    favorites.filter((item) => item.job_id !== job.job_id)
                  )
                );
                router.refresh();
              }}
            />
          ) : (
            <BsHeart
              onClick={() => {
                localStorage.setItem(
                  "favoriteJobs",
                  JSON.stringify([...favorites, job])
                );
                router.refresh();
              }}
            />
          )}
        </div>
      </div>
      <h1 className="text-center">{job.job_title}</h1>
      <p className="p-1">
        <span className="text-cyan-200">City: </span>
        {job.job_city}
      </p>
      <p className="p-1">
        <span className="text-cyan-200">Publisher: </span>
        {job.job_publisher}
      </p>
      <p className="p-1">
        <span className="text-cyan-200">Employment type: </span>
        {job.job_employment_type}
      </p>
      <p className="p-1">
        <span className="text-cyan-200">Remoute/Office: </span>
        {job.job_is_remote ? "Remoute" : "Office"}
      </p>
      <p className="p-1">
        <span className="text-cyan-200">Description: </span>
        {job.job_description}
      </p>
      <p className="p-1">
        <span className="text-cyan-200">Posted date: </span>
        {new Date(job.job_posted_at_timestamp).toLocaleDateString()}
      </p>
    </div>
  );
}
