"use client";
import React, { forwardRef } from 'react';

interface PredictionResult {
  prediction: number;
  probability_ad: number;
  label: string;
}

interface AssessmentFormProps {
  formData: {
    MMSCORE: number;
    AGE: number;
    PTGENDER: number;
    PTEDUCAT: number;
    APOE4_count: number;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  result: PredictionResult | null;
}

const AssessmentForm = forwardRef<HTMLDivElement, AssessmentFormProps>(
  ({ formData, setFormData, handleSubmit, loading, result }, ref) => {
    return (
      <section ref={ref} id="assessment-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Clinical Risk Assessment</h2>
            <p className="text-lg text-slate-600">Enter patient biomarkers for AI-powered risk analysis</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
              <h3 className="text-2xl font-bold text-white">Alzheimer's Risk Assessment</h3>
              <p className="text-blue-100 text-sm mt-1">Clinical Predictive Model v1.0</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* MMSE Score */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">
                    MMSE Score <span className="text-slate-500 font-normal ml-2">(0-30)</span>
                  </label>
                  <input 
                    type="number" step="0.1" min="0" max="30"
                    value={formData.MMSCORE}
                    onChange={(e) => setFormData({...formData, MMSCORE: parseFloat(e.target.value)})}
                    className="w-full p-4 bg-slate-50 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 transition-all"
                    required
                  />
                </div>

                {/* Age */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">Patient Age</label>
                  <input 
                    type="number" min="40" max="100"
                    value={formData.AGE}
                    onChange={(e) => setFormData({...formData, AGE: parseInt(e.target.value)})}
                    className="w-full p-4 bg-slate-50 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 transition-all"
                    required
                  />
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">Biological Sex</label>
                  <select 
                    value={formData.PTGENDER}
                    onChange={(e) => setFormData({...formData, PTGENDER: parseInt(e.target.value)})}
                    className="w-full p-4 bg-slate-50 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 text-slate-900 outline-none transition-all"
                    required
                  >
                    <option value={0}>Male</option>
                    <option value={1}>Female</option>
                  </select>
                </div>

                {/* Education */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-900">Years of Education</label>
                  <input 
                    type="number" min="0" max="30"
                    value={formData.PTEDUCAT}
                    onChange={(e) => setFormData({...formData, PTEDUCAT: parseInt(e.target.value)})}
                    className="w-full p-4 bg-slate-50 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 transition-all"
                    required
                  />
                </div>

                {/* APOE4 */}
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-bold text-slate-900">APOE ε4 Allele Count</label>
                  <select 
                    value={formData.APOE4_count}
                    onChange={(e) => setFormData({...formData, APOE4_count: parseInt(e.target.value)})}
                    className="w-full p-4 bg-slate-50 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 text-slate-900 outline-none transition-all"
                    required
                  >
                    <option value={0}>None (0 alleles)</option>
                    <option value={1}>Heterozygous (1 allele)</option>
                    <option value={2}>Homozygous (2 alleles)</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg transition-all active:scale-95 disabled:bg-slate-400 text-lg"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Processing Clinical Data...</span>
                  </div>
                ) : "Run AI Prediction"}
              </button>
            </form>

            {/* Result Display Section */}
            {result && (
              <div className="px-8 pb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className={`rounded-2xl border-2 p-8 shadow-lg ${
                  result.prediction === 1 ? 'bg-red-50 border-red-300' : 'bg-emerald-50 border-emerald-300'
                }`}>
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${result.prediction === 1 ? 'bg-red-500' : 'bg-emerald-500'}`}>
                            {result.prediction === 1 ? '!' : '✓'}
                         </div>
                         <h3 className={`text-2xl font-bold ${result.prediction === 1 ? 'text-red-800' : 'text-emerald-800'}`}>
                          {result.label}
                         </h3>
                      </div>
                      <p className="text-slate-600">Risk Probability: <span className="font-bold">{(result.probability_ad * 100).toFixed(1)}%</span></p>
                      
                      {/* Probability Bar */}
                      <div className="w-full bg-slate-200 rounded-full h-2.5 mt-4">
                        <div 
                          className={`h-2.5 rounded-full transition-all duration-1000 ${result.prediction === 1 ? 'bg-red-500' : 'bg-emerald-500'}`}
                          style={{ width: `${result.probability_ad * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className={`text-5xl font-extrabold ${result.prediction === 1 ? 'text-red-600' : 'text-emerald-600'}`}>
                      {(result.probability_ad * 100).toFixed(0)}%
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
);

AssessmentForm.displayName = "AssessmentForm";
export default AssessmentForm;