"use client";
import { JobList } from "@/components/list/JobsList";
import { validateJobType } from "@/types/JobTypeGuard";

export default function Favorite() {
  let storagePars;
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("favoriteJobs");
    storagePars = data && JSON.parse(data);
    console.log(storagePars);
  }

  if (Array.isArray(storagePars)) {
    const jobs = storagePars.map((item) => validateJobType(item));

    return <JobList data={jobs.filter((item) => item !== false)} />;
  } else {
    <h1>Errors</h1>;
  }
}
