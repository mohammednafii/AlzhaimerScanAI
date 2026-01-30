"use client"
export default function About() {
  return (
       <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">About NeuroScan AI</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              NeuroScan AI is a medical decision-support system designed to assist clinicians in estimating Alzheimer's disease risk using validated clinical and genetic indicators. The system analyzes multiple biomarkers including cognitive assessment scores, demographic factors, and genetic predisposition to provide probabilistic insights that support early screening and research.
            </p>
            <p className="text-slate-500 italic">
              This is not a diagnostic tool but provides evidence-based risk assessment to complement clinical judgment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Evidence-Based</h3>
              <p className="text-slate-600">
                Built on validated clinical research and peer-reviewed methodologies for Alzheimer's risk assessment.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rapid Analysis</h3>
              <p className="text-slate-600">
                Instant risk probability calculation based on multi-factor biomarker integration and machine learning.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Clinical Support</h3>
              <p className="text-slate-600">
                Designed as a decision-support tool to complement clinical expertise, not replace professional judgment.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
