import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/jobs`)
  return (
      <h1> Wellcome home</h1>
  );
}
