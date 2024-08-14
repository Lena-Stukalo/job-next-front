import Link from 'next/link'

export default function Header() {
    return (
        <header className="container mx-auto bg-slate-800 flex">
<Link href="/jobs" className=''>jobs</Link>
<Link href="/job-details/1">details</Link>
<Link href="/liked">liked</Link>
<Link href="/create-profile">profile</Link>
        </header>
    );
  }
  