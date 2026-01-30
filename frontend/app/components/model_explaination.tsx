"use client"
export default function M_exp() {
  return (
         <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Interpret Results</h2>
            
            <div className="space-y-6 text-slate-700">
              <p className="leading-relaxed">
                This AI model provides a <strong>probability-based risk assessment</strong> and should not replace clinical diagnosis. The system analyzes multiple validated biomarkers to estimate the likelihood of Alzheimer's disease based on patterns learned from clinical research data.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-blue-900 mb-3">Key Factors Analyzed:</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>MMSE Score:</strong> Cognitive function assessment (lower scores indicate greater impairment)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Age:</strong> Advancing age is a primary risk factor for Alzheimer's disease</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Education:</strong> Cognitive reserve theory suggests higher education may provide protective effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>APOE ε4:</strong> Genetic variant associated with increased Alzheimer's risk</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-amber-900 mb-2">Important Clinical Considerations:</h3>
                <p className="text-amber-800">
                  Results should be interpreted by qualified healthcare professionals alongside comprehensive medical history, physical examination, neurological assessment, and additional diagnostic tests. This tool supports clinical decision-making but does not provide definitive diagnoses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
