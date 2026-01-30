"use client";

interface HeroProps {
  scrollToForm: () => void;
}

export default function Hero({ scrollToForm }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 text-sm backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-100">Clinical AI • Research-Based • Data-Driven</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              AI-Powered<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Alzheimer's Risk
              </span><br />
              Assessment
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              A clinical decision-support tool using cognitive, demographic, and genetic biomarkers to estimate Alzheimer's disease risk for early screening and research purposes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Start Assessment
              </button>
              <a 
                href="#how-it-works"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side Visual (Stats Card) */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl rotate-3"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Model Accuracy</div>
                    <div className="text-2xl font-bold">94.3%</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { label: "MMSE Analysis", width: "w-4/5" },
                    { label: "APOE4 Factor", width: "w-3/5" },
                    { label: "Demographics", width: "w-full" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">{item.label}</span>
                      <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full ${item.width} bg-gradient-to-r from-blue-400 to-cyan-400`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}