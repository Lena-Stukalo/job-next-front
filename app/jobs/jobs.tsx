"use client";
import { Search } from "@/components/form/Search";
import { JobList } from "@/components/list/JobsList";
import { AllJobs } from "@/service/jobService";
import { validateJobType } from "@/types/JobTypeGuard";
import { validateRegisterFormValues } from "@/types/profile";
import { useFormik } from "formik";
import { useState, useEffect } from "react";

export default function Jobs() {
  const [data, setData] = useState<any>();
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("all");
  const [isProfile, setIsProfile] = useState(false);

  const handeleSubmit = async ({ search }: { search: string }) => {
    setLoading(true);
    setSearch(search);
  };
  useEffect(() => {
    const storage = localStorage.getItem("profile");
    const parse = storage && validateRegisterFormValues(JSON.parse(storage));
    if (!!parse) {
      setIsProfile(true);
      AllJobs(parse.job_Desired).then(({ data }) => {
        setData(data);
        setLoading(false);
      });
    } else {
      AllJobs(search).then(({ data }) => {
        setData(data);
        setLoading(false);
      });
    }
  }, [search]);

  const formik = useFormik({
    initialValues: { search: "" },
    onSubmit: handeleSubmit,
  });
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  if (Array.isArray(data)) {
    const jobs = data.map((item) => validateJobType(item));

    return (
      <div>
        {!isProfile && <Search {...formik} />}
        <JobList data={jobs.filter((item) => !!item)} />
      </div>
    );
  } else {
    <h1>Errors</h1>;
  }
}
