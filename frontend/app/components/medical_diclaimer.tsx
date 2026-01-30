export default function Medical() {
  return (
    <div>
            <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-100 border-2 border-slate-300 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Medical Disclaimer</h3>
                <p className="text-slate-700 leading-relaxed">
                  This tool is for <strong>research and educational purposes only</strong>. It does not replace professional medical diagnosis, treatment, or advice. Always consult qualified healthcare providers for medical decisions. The predictions provided are probabilistic estimates based on limited biomarkers and should be used only as supplementary information within a comprehensive clinical assessment. NeuroScan AI and its developers assume no liability for clinical decisions made based on this tool's outputs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
