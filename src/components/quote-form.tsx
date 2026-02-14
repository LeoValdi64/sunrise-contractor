"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES, COMPANY } from "@/lib/constants";
import { Send, CheckCircle } from "lucide-react";

interface QuoteFormProps {
  className?: string;
  preselectedService?: string;
}

export function QuoteForm({ className, preselectedService }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: preselectedService || "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            Full Name *
          </label>
          <Input
            id="name"
            required
            placeholder="John Smith"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
            Phone Number *
          </label>
          <Input
            id="phone"
            type="tel"
            required
            placeholder="(425) 555-0123"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-white"
          />
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
          className="bg-white"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1.5">
          Service Needed *
        </label>
        <select
          id="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Select a service...</option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
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
