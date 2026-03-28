"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Job = {
  _id: string;
  title: string;
  location?: string;
};

type CareerForm = {
  name?: string;
  email?: string;
  phone?: string;
  position?: string;
  jobId?: string; // ✅ ADD
  address?: string; // ✅ NEW
  comments?: string;
};

export default function CareersPage() {
  const [form, setForm] = useState<CareerForm>({});
  const [file, setFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/career`);
      const data = await res.json();
      setJobs(data);
    };

    fetchJobs();
  }, []);

  const handleApplyClick = (job: Job) => {
    setForm({
      position: job.title,
      jobId: job._id, // ✅ ADD THIS
    });
    setOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) fd.append(key, value);
    });

    if (file) fd.append("cv", file);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/career/apply`,
        {
          method: "POST",
          body: fd,
        },
      );

      if (!res.ok) throw new Error();

      alert("Application submitted");
      setOpen(false);
      setForm({});
      setFile(null);
    } catch {
      alert("Submission failed");
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <Image
          src="/gallery-hero.jpg"
          fill
          alt="Careers"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center max-w-2xl px-6">
          <p className="uppercase tracking-[0.35em] text-sm mb-4 text-resort-gold">
            — Career —
          </p>

          <h1 className="text-4xl md:text-5xl font-cinzel mb-6 leading-tight">
            Join La Macaw Resort
          </h1>

          <p className="text-gray-300">
            Build your future with luxury hospitality
          </p>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {jobs.length === 0 ? (
            <div className="text-center py-20 border border-white/10">
              <h2 className="text-3xl font-cinzel mb-4">
                Opportunities Coming Soon
              </h2>

              <p className="text-gray-400">
                We are always looking for passionate individuals to join our
                team. While there are no openings at the moment, exciting
                opportunities may be available soon.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className="border border-white/10 p-6 flex justify-between items-center hover:border-resort-gold transition"
                >
                  <p>{job.title}</p>

                  <button
                    onClick={() => handleApplyClick(job)}
                    className="border border-resort-gold text-resort-gold px-5 py-2 hover:bg-resort-gold hover:text-black transition"
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="bg-[#0b0909] text-white w-full max-w-lg p-6 border border-white/10 relative animate-fadeIn max-h-[90vh] overflow-y-auto">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-cinzel mb-6 text-center">
              Apply for {form.position}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                placeholder="Full Name"
                required
                className="w-full bg-transparent border border-white/20 px-3 py-2.5 text-sm focus:border-resort-gold outline-none"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                placeholder="Email"
                required
                className="w-full bg-transparent border border-white/20 px-3 py-2.5 text-sm focus:border-resort-gold outline-none"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <input
                placeholder="Phone"
                required
                className="w-full bg-transparent border border-white/20 px-3 py-2.5 text-sm focus:border-resort-gold outline-none"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              <textarea
                placeholder="Your Address"
                required
                rows={3}
                className="w-full bg-transparent border border-white/20 px-3 py-2.5 text-sm focus:border-resort-gold outline-none"
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
              <input
                type="file"
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files && e.target.files[0]) {
                    setFile(e.target.files[0]);
                  }
                }}
              />

              <textarea
                placeholder="Comments"
                rows={4}
                className="w-full bg-transparent border border-white/20 px-3 py-2.5 text-sm focus:border-resort-gold outline-none"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setForm({ ...form, comments: e.target.value })
                }
              />

              <button
                className="w-full inline-block
                px-8 py-3 
                border border-resort-gold 
                text-resort-gold 
                tracking-widest text-sm
                hover:bg-resort-gold 
                hover:text-black 
                transition-all duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
