"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES, COMPANY } from "@/lib/constants";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface QuoteFormProps {
  className?: string;
  preselectedService?: string;
}

export function QuoteForm({ className, preselectedService }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: preselectedService || "",
    description: "",
  });

  const errors: Record<string, string> = {};
  if (touched.name && !formData.name.trim()) errors.name = "Name is required";
  if (touched.phone && !formData.phone.trim()) errors.phone = "Phone number is required";
  if (touched.phone && formData.phone.trim() && !/^[\d\s()+-]{7,}$/.test(formData.phone.trim())) errors.phone = "Enter a valid phone number";
  if (touched.email && formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errors.email = "Enter a valid email address";
  if (touched.service && !formData.service) errors.service = "Please select a service";

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Touch all required fields
    setTouched({ name: true, phone: true, service: true, email: true });

    if (!formData.name.trim() || !formData.phone.trim() || !formData.service) return;
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) return;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <CheckCircle className="h-16 w-16 text-brand-orange mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-4">
          We&apos;ve received your request and will get back to you within 24 hours.
        </p>
        <p className="text-sm text-muted-foreground">
          Need immediate help? Call us at{" "}
          <a href={COMPANY.phoneHref} className="text-brand-purple font-semibold hover:underline">
            {COMPANY.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            Full Name *
          </label>
          <Input
            id="name"
            placeholder="John Smith"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onBlur={() => handleBlur("name")}
            className={`bg-white ${errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
            Phone Number *
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="(425) 555-0123"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            onBlur={() => handleBlur("phone")}
            className={`bg-white ${errors.phone ? "border-red-400 focus-visible:ring-red-400" : ""}`}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onBlur={() => handleBlur("email")}
          className={`bg-white ${errors.email ? "border-red-400 focus-visible:ring-red-400" : ""}`}
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1.5">
          Service Needed *
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          onBlur={() => handleBlur("service")}
          className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
            errors.service ? "border-red-400 focus-visible:ring-red-400" : "border-input"
          }`}
        >
          <option value="">Select a service...</option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
        {errors.service && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.service}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1.5">
          Project Description
        </label>
        <Textarea
          id="description"
          rows={4}
          placeholder="Tell us about your project, timeline, and any specific requirements..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="bg-white"
        />
      </div>

      <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple-light text-white text-base py-6 font-bold">
        <Send className="h-4 w-4 mr-2" />
        Request Free Estimate
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        We respond to all inquiries within 24 hours. Your information is never shared.
      </p>
    </form>
  );
}
