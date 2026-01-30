"use client";
import { useState, useRef, useEffect } from 'react';
import Header from './components/header';
import About from './components/about';
import Hiw from './components/hiw';
import M_exp from './components/model_explaination';
import Footer from './components/footer';
import Medical from './components/medical_diclaimer';
import Hero from './components/hero';
import AssessmentForm from './components/AssessmentForm';

// 1. Move the interface outside the component for better scope
interface PredictionResult {
  prediction: number;
  probability_ad: number;
  label: string;
}

export default function NeuroScanAI() {
  const [formData, setFormData] = useState({
    MMSCORE: 24,
    AGE: 70,
    PTGENDER: 0,
    PTEDUCAT: 16,
    APOE4_count: 0
  });
  
  // 2. Explicitly type the result state
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // 3. Create a ref for the form container
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data as PredictionResult);
    } catch (error) {
      console.error("Error:", error);
      alert("Backend connection failed. Please ensure the FastAPI server is running on port 8000.");
    }
    setLoading(false);
  };

  // 4. Corrected scrollToForm logic
  const scrollToForm = () => {
    if (!showForm) {
      setShowForm(true);
      // We use a small timeout to allow Next.js to render the section before scrolling
      setTimeout(() => {
        formRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start' 
        });
      }, 100);
    } else {
      formRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "'IBM Plex Sans', system-ui, -apple-system, sans-serif" }}>
      <Header />
      <Hero scrollToForm={scrollToForm} />
      <About />
      <Hiw />
      {/* 5. Attach the ref to the section container */}
      {showForm && (
        <AssessmentForm 
          ref={formRef}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          loading={loading}
          result={result}
        />
      )}
      <M_exp />
      <Medical />
      <Footer />
    </div>
  );
}
