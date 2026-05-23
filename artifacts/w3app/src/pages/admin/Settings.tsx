import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Globe, Phone, Mail, MapPin, Lock } from "lucide-react";

export default function AdminSettings() {
  const { toast } = useToast();
  const [saved, setSaved] = useState(false);

  const siteInfo = [
    { label: "Site Name", value: "W3AppDevelopers", icon: Globe },
    { label: "Site URL", value: "https://w3appdevelopers.com", icon: Globe },
    { label: "Phone", value: "+91 96985 48633", icon: Phone },
    { label: "Email", value: "info@w3appdevelopers.com", icon: Mail },
    { label: "Address", value: "Mullamparappu, Erode, Tamil Nadu, India", icon: MapPin },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
      <p className="text-slate-500 mb-8">Site configuration and environment overview</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-none shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Site Information</h2>
            <div className="space-y-4">
              {siteInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="text-sm font-medium text-slate-800 truncate">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" /> Environment Secrets
            </h2>
            <div className="space-y-3">
              {["SMTP_EMAIL", "SMTP_PASSWORD", "ADMIN_EMAIL", "JWT_SECRET", "DATABASE_URL"].map((key) => (
                <div key={key} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <span className="text-sm font-mono text-slate-700">{key}</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Configured</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-4">
              Secrets are managed via Replit Secrets panel. Never expose these in code.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm lg:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">WhatsApp & Contact Config</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-slate-500 block mb-1">WhatsApp Number</label>
                <Input value="+91 96985 48633" readOnly className="bg-slate-50 text-sm" />
              </div>
              <div>
                <label className="text-xs text-slate-500 block mb-1">SMTP Host</label>
                <Input value="smtp.gmail.com" readOnly className="bg-slate-50 text-sm" />
              </div>
              <div>
                <label className="text-xs text-slate-500 block mb-1">SMTP Port</label>
                <Input value="587" readOnly className="bg-slate-50 text-sm" />
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              To update these values, modify them in Replit Secrets. Changes take effect on next server restart.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
