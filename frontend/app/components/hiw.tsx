"use client"
export default function Hiw() {
  return (
           <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A three-step process combining clinical data input, AI analysis, and risk stratification
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="mt-4 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Input Clinical Data</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Enter validated clinical parameters including MMSE cognitive score, patient age, years of education, biological sex, and APOE ε4 genotype information.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Mini-Mental State Examination (MMSE) score</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Demographic information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Genetic risk factors (APOE4)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="mt-4 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">AI Processing</h3>
                  <p className="text-slate-600 leading-relaxed">
                    A trained machine learning model analyzes patient risk patterns based on validated clinical datasets and established biomarker correlations.
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">Feature Extraction</span>
                        <div className="w-20 h-1.5 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full w-full bg-blue-600 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">Risk Calculation</span>
                        <div className="w-20 h-1.5 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full w-full bg-blue-600 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">Probability Analysis</span>
                        <div className="w-20 h-1.5 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full w-full bg-blue-600 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="mt-4 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Risk Prediction</h3>
                  <p className="text-slate-600 leading-relaxed">
                    The system outputs probability scores and binary classification results with confidence metrics for clinical interpretation.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="font-semibold text-emerald-800">Low Risk Classification</span>
                      </div>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="font-semibold text-red-800">High Risk Classification</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}
