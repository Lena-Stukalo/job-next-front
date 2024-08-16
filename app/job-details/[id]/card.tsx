"use client";
import { IJobType } from "@/types/jobType";
import { validateJobType } from "@/types/JobTypeGuard";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Info } from "./Info";

export function Card({ job }: { job: IJobType }) {
  const router = useRouter();

  let favorites: IJobType[] = [];

  let storagePars;
  if (typeof window !== "undefined") {
    const storage = localStorage.getItem("favoriteJobs");
    storagePars = storage && JSON.parse(storage);
  }

  let IsFavs = false;

  if (Array.isArray(storagePars)) {
    IsFavs =
      storagePars
        .map((item) => validateJobType(item))
        .filter((item) => !!item && item.job_id === job.job_id).length > 0;
    favorites = storagePars
      .map((item) => validateJobType(item))
      .filter((item) => !!item);
  }

  return (
    <Info job={job} IsFavs={IsFavs} favorites={favorites} router={router} />
  );
}
