import { useListContactSubmissions } from "@workspace/api-client-react";
import { format } from "date-fns";

export default function AdminContacts() {
  const tokenHeader = { headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } };
  const { data: contacts, isLoading } = useListContactSubmissions({ request: tokenHeader });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Contact Submissions</h1>
        <p className="text-slate-500 mt-2">View all inquiries from the website contact form.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-slate-500">Loading...</div>
        ) : contacts && contacts.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="p-4 font-medium text-slate-600">Date</th>
                <th className="p-4 font-medium text-slate-600">Name</th>
                <th className="p-4 font-medium text-slate-600">Contact Info</th>
                <th className="p-4 font-medium text-slate-600">Subject</th>
                <th className="p-4 font-medium text-slate-600">Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="border-b hover:bg-slate-50 align-top">
                  <td className="p-4 text-slate-600 whitespace-nowrap">
                    {format(new Date(contact.createdAt), 'MMM d, yyyy HH:mm')}
                  </td>
                  <td className="p-4 font-medium text-slate-900 whitespace-nowrap">{contact.name}</td>
                  <td className="p-4 text-sm text-slate-600">
                    <div>{contact.email}</div>
                    {contact.phone && <div>{contact.phone}</div>}
                  </td>
                  <td className="p-4 text-slate-900 font-medium">{contact.subject}</td>
                  <td className="p-4 text-slate-600 text-sm max-w-xs truncate" title={contact.message}>
                    {contact.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-8 text-center text-slate-500">No contact submissions found.</div>
        )}
      </div>
    </div>
  );
}
