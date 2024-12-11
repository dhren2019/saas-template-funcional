"use client";

import React, { useState } from "react";
import Templates from "Templates"; // Ajusta la ruta según corresponda
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
  form: (Field & { options?: { label: string; value: string }[] })[];
};

const HeroPage = () => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const template: Template | undefined = Templates.find((t: Template) => t.slug === "seo-optimization");

  if (!template) {
    return <div>Template not found</div>;
  }

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Lógica para enviar datos al backend
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
                      <button className="w-full text-left">Select an option</button>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroPage;