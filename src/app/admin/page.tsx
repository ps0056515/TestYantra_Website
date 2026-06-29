"use client";

import { useEffect, useState } from "react";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { Inquiry } from "@/lib/db";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  // Check sessionStorage for active session on load
  useEffect(() => {
    const savedPassword = sessionStorage.getItem("admin_session_key");
    if (savedPassword === "ty-admin-2026") {
      setIsAuthenticated(true);
      fetchInquiries(savedPassword);
    }
  }, []);

  const fetchInquiries = async (pwd: string) => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/inquiries", {
        headers: {
          "X-Admin-Password": pwd,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch enquiries. Invalid credentials.");
      }

      const data = await res.json();
      setInquiries(data.inquiries || []);
    } catch (err: any) {
      setError(err.message || "An error occurred.");
      setIsAuthenticated(false);
      sessionStorage.removeItem("admin_session_key");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/inquiries", {
        headers: {
          "X-Admin-Password": password,
        },
      });

      if (!res.ok) {
        throw new Error("Incorrect password. Please try again.");
      }

      const data = await res.json();
      setInquiries(data.inquiries || []);
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_session_key", password);
    } catch (err: any) {
      setError(err.message || "An error occurred.");
      setIsAuthenticated(false);
      sessionStorage.removeItem("admin_session_key");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setInquiries([]);
    setPassword("");
    sessionStorage.removeItem("admin_session_key");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;

    const pwd = sessionStorage.getItem("admin_session_key") || "";
    try {
      const res = await fetch(`/api/admin/inquiries?id=${id}`, {
        method: "DELETE",
        headers: {
          "X-Admin-Password": pwd,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to delete inquiry.");
      }

      // Remove from local list state
      setInquiries((prev) => prev.filter((item) => item.id !== id));
    } catch (err: any) {
      alert(err.message || "Could not delete enquiry.");
    }
  };

  const filteredInquiries = inquiries.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(term) ||
      item.email.toLowerCase().includes(term) ||
      item.interest.toLowerCase().includes(term) ||
      item.industry.toLowerCase().includes(term) ||
      item.message.toLowerCase().includes(term)
    );
  });

  if (!isAuthenticated) {
    return (
      <V2InnerShell>
        <div className="mx-auto max-w-md py-12">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-xl shadow-black/5 sm:p-8">
            <h1 className="text-xl font-bold tracking-tight text-[var(--text)]">Admin Console</h1>
            <p className="text-xs text-[var(--muted2)] mt-1">Please enter the security password to view form enquiries.</p>

            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted2)]">
                  Security Password
                </label>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="mt-2 h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/10 transition duration-300 font-medium"
                />
              </div>
              {error && <p className="text-xs font-bold text-red-500">{error}</p>}
              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-[var(--accent)] text-sm font-bold text-white shadow-lg shadow-[var(--accent)]/10 hover:bg-[var(--accent)]/90 transition duration-300 cursor-pointer"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </div>
      </V2InnerShell>
    );
  }

  return (
    <V2InnerShell>
      <div className="space-y-5">
        {/* Header Block */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--border)] pb-4">
          <div>
            <h1 className="text-xl font-bold text-[var(--text)]">Enquiries Dashboard</h1>
            <p className="text-xs text-[var(--muted2)] mt-1">
              View and manage submissions captured from the contact form.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="self-start sm:self-center px-3 py-1.5 text-xs font-bold rounded-lg border border-red-500/20 text-red-500 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/30 transition duration-200 cursor-pointer flex items-center gap-1.5"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>

        {/* Counter and Filter Panel */}
        <div className="grid gap-4 md:grid-cols-12 items-center">
          <div className="md:col-span-3 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-4 text-center">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--muted2)]">Total Enquiries</span>
            <h2 className="text-3xl font-extrabold text-[var(--accent)] mt-1">{inquiries.length}</h2>
          </div>
          <div className="md:col-span-9">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, email, interest, industry or message contents..."
              className="h-14 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg2)] px-4 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/10 transition duration-300 font-medium"
            />
          </div>
        </div>

        {/* Enquiries Table */}
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] overflow-hidden shadow-xl shadow-black/5">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16 text-[var(--muted2)]">
              <svg className="animate-spin h-8 w-8 text-[var(--accent)] mb-3" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Fetching submissions...</span>
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="text-center py-16 text-[var(--muted2)]">
              <div className="text-3xl">📭</div>
              <h3 className="mt-4 font-bold text-[var(--text)]">No submissions found</h3>
              <p className="text-xs mt-1">Try adapting your search parameters or check back later.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--surface)] text-[10px] uppercase tracking-wider font-extrabold text-[var(--muted2)]">
                    <th className="py-2.5 px-4">Date</th>
                    <th className="py-2.5 px-4">User Info</th>
                    <th className="py-2.5 px-4">Classification</th>
                    <th className="py-2.5 px-4">Message</th>
                    <th className="py-2.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] text-sm">
                  {filteredInquiries.map((item) => (
                    <tr key={item.id} className="hover:bg-[var(--surface)]/45 transition">
                      <td className="py-2.5 px-4 whitespace-nowrap text-xs text-[var(--muted2)] font-medium">
                        {new Date(item.timestamp).toLocaleDateString("en-GB")}
                        {" — "}
                        {new Date(item.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="py-2.5 px-4">
                        <div className="font-bold text-[var(--text)]">{item.name}</div>
                        <a
                          href={`mailto:${item.email}`}
                          className="text-xs text-[var(--accent)] hover:underline block mt-0.5"
                        >
                          {item.email}
                        </a>
                      </td>
                      <td className="py-2.5 px-4 whitespace-nowrap">
                        <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--border)] text-[var(--text)] mr-2">
                          {item.interest}
                        </span>
                        <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded border border-[var(--border)] text-[var(--muted2)]">
                          {item.industry}
                        </span>
                      </td>
                      <td className="py-2.5 px-4 max-w-xs md:max-w-md">
                        <p className="text-xs text-[var(--muted2)] leading-relaxed line-clamp-3 hover:line-clamp-none transition duration-200 cursor-pointer">
                          {item.message || <span className="italic text-[var(--muted)]">No message provided.</span>}
                        </p>
                      </td>
                      <td className="py-2.5 px-4 text-right whitespace-nowrap">
                        <button
                          onClick={() => setSelectedInquiry(item)}
                          className="text-xs font-bold text-[var(--accent)] hover:underline mr-4 cursor-pointer"
                        >
                          View Email
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-xs font-bold text-red-500 hover:text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-500/10 transition cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* HTML Email Template Preview Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-[99999] flex items-start justify-center bg-black/60 p-4 backdrop-blur-sm pt-[88px]">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[var(--bg2)] border border-[var(--border)] overflow-hidden shadow-2xl max-h-[80vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-2.5 bg-[var(--surface)]">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--muted2)]">
                Email Preview
              </span>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="text-xs font-bold px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--bg3)] text-[var(--muted2)] hover:text-[var(--text)] transition cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            {/* Modal Content - Scrollable Email Client View */}
            <div className="p-6 overflow-y-auto bg-slate-50 dark:bg-slate-950 flex-1 flex justify-center items-start">
              {/* Recreated EmailJS HTML Template Block */}
              <div className="w-full max-w-xl bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm text-left">
                {/* Header */}
                <div className="bg-[#0f172a] py-4 px-6 border-b-4 border-[#f38118]">
                  <h2 className="text-lg font-bold text-white m-0">New Customer Enquiry</h2>
                  <p className="text-[11px] text-slate-400 mt-1 font-medium">TestYantra & Innovexce Contact Form Submission</p>
                </div>
                
                {/* Content Body */}
                <div className="p-6 text-slate-700 space-y-4 font-sans">
                  <div className="border-b border-slate-100 pb-2">
                    <div className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Full Name</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">{selectedInquiry.name}</div>
                  </div>
                  
                  <div className="border-b border-slate-100 pb-2">
                    <div className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Email Address</div>
                    <div className="text-sm font-semibold text-[#f38118] mt-0.5">
                      <a href={`mailto:${selectedInquiry.email}`} className="hover:underline">
                        {selectedInquiry.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="border-b border-slate-100 pb-2">
                    <div className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Interest</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">{selectedInquiry.interest}</div>
                  </div>
                  
                  <div className="border-b border-slate-100 pb-2">
                    <div className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Industry</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">{selectedInquiry.industry}</div>
                  </div>
                  
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mt-4">
                    <div className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider mb-2">Message Details</div>
                    <p className="text-xs text-slate-600 leading-relaxed m-0 whitespace-pre-wrap">{selectedInquiry.message || "No message provided."}</p>
                  </div>
                  
                  {/* Reply Action Button */}
                  <div className="pt-4 text-center">
                    <a
                      href={`mailto:${selectedInquiry.email}?subject=Re: Your inquiry with TestYantra`}
                      className="inline-block bg-[#f38118] hover:bg-[#e07210] text-white text-xs font-bold px-6 py-3 rounded-lg shadow-sm transition"
                    >
                      Reply to Sender
                    </a>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="bg-slate-100 border-t border-slate-200 p-4 text-center text-[10px] text-slate-500">
                  This enquiry was sent from the <a href="https://testyantra.com" target="_blank" rel="noreferrer" className="text-[#f38118] font-semibold hover:underline">TestYantra Contact Form</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </V2InnerShell>
  );
}
