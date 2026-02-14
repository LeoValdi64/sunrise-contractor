"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, CheckCircle, XCircle } from "lucide-react";
import { SERVICE_AREA_ZIPS, COMPANY } from "@/lib/constants";

export function ServiceAreaChecker() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<{ found: boolean; city?: string } | null>(null);

  const checkZip = (e: React.FormEvent) => {
    e.preventDefault();
    const city = SERVICE_AREA_ZIPS[zip.trim()];
    setResult(city ? { found: true, city } : { found: false });
  };

  return (
    <div>
      <form onSubmit={checkZip} className="flex gap-2 max-w-sm">
        <Input
          placeholder="Enter ZIP code"
          value={zip}
          onChange={(e) => { setZip(e.target.value); setResult(null); }}
          maxLength={5}
          className="bg-white"
        />
        <Button type="submit" className="bg-brand-green hover:bg-brand-green-light text-white shrink-0">
          <MapPin className="h-4 w-4 mr-1.5" />
          Check
        </Button>
      </form>
      {result && (
        <div className={`mt-3 flex items-center gap-2 text-sm ${result.found ? "text-brand-green" : "text-red-600"}`}>
          {result.found ? (
            <>
              <CheckCircle className="h-4 w-4" />
              <span>Great news! We serve <strong>{result.city}</strong> and surrounding areas.</span>
            </>
          ) : (
            <>
              <XCircle className="h-4 w-4" />
              <span>This ZIP may be outside our primary area. Call <a href={COMPANY.phoneHref} className="font-semibold underline">{COMPANY.phone}</a> to check.</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
