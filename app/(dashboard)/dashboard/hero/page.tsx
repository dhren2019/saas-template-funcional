"use client";

import React, { useState } from "react";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Define los tipos para los campos y el template
type Field = {
  label: string;
  field: "input" | "textarea" | "select";
  name: string;
  placeholder?: string;
  required: boolean;
  options?: { label: string; value: string }[];
};

type Template = {
  slug: string;
  name: string;
  desc: string;
  form: Field[];
};

const HeroPage = () => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [response, setResponse] = useState<{
    title: string;
    metadescription: string;
    sitemap: string;
  }>({
    title: "",
    metadescription: "",
    sitemap: "",
  });

  const template: Template | undefined = Templates.find((t: Template) => t.slug === "seo-optimization");

  if (!template) {
    return <div>Template not found</div>;
  }

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Crear el prompt para la API de Gemini utilizando los datos del formulario
    const prompt = `
      Based on the following inputs, generate SEO titles, meta descriptions, a sitemap ready for Google Search Console, and an optimized structure with Hn headings:
      Website Type: ${formData.websiteType}
      Location Type: ${formData.locationType}
      Target URL: ${formData.targetUrl}
      Framework: ${formData.framework}
    `;

    // Llamar a la API de Gemini
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await res.json();

      // Actualizar el estado con la respuesta de la API
      setResponse({
        title: data.title || "No title generated",
        metadescription: data.metadescription || "No meta description generated",
        sitemap: data.sitemap || "No sitemap generated",
      });
    } catch (error) {
      console.error("Error fetching Gemini API:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <Card>
        <CardHeader>
          <CardTitle>{template.name}</CardTitle>
          <p className="text-gray-600">{template.desc}</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {template.form.map((field, index) => (
              <div key={index} className="space-y-2">
                <label className="block font-medium">{field.label}</label>
                {field.field === "input" && (
                  <Input
                    type="text"
                    placeholder={field.placeholder || ""}
                    required={field.required}
                    onChange={(e) =>
                      handleChange(field.name, e.target.value)
                    }
                  />
                )}
                {field.field === "textarea" && (
                  <Textarea
                    placeholder={field.placeholder || ""}
                    required={field.required}
                    onChange={(e) =>
                      handleChange(field.name, e.target.value)
                    }
                  />
                )}
                {field.field === "select" && field.options && (
                  <Select
                    onValueChange={(value) =>
                      handleChange(field.name, value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options.map((option, idx) => (
                        <SelectItem key={idx} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            ))}

            <Button type="submit" variant="default" className="w-full">
              Submit
            </Button>
          </form>

          {/* Mostrar respuesta de la API */}
          {response.title && (
            <div className="mt-6">
              <h2>Resultados Optimización SEO</h2>
              <p><strong>Title:</strong> {response.title}</p>
              <p><strong>Meta Description:</strong> {response.metadescription}</p>
              <p><strong>Sitemap:</strong></p>
              <pre>{response.sitemap}</pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroPage;
