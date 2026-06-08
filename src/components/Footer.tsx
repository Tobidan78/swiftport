export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold">SwiftPort Logistics</h3>
          <p className="text-white/60 mt-3 text-sm">
            Fast, secure, and reliable port logistics solutions across Africa and beyond.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="font-semibold mb-3">Contact Info</h4>

          <p className="text-white/60 text-sm">
            📍 Lagos, Nigeria
          </p>

          <p className="text-white/60 text-sm mt-2">
            📧 support@swiftport.com
          </p>

          <p className="text-white/60 text-sm mt-2">
            📞 +234 7083984800
          </p>
        </div>

        {/* DEVELOPER INFO (YOUR INFO AREA) */}
        <div>
          <h4 className="font-semibold mb-3">Developer</h4>

          <p className="text-white/60 text-sm">
            Built by: Oluwatobi Daniel
          </p>

          <p className="text-white/60 text-sm mt-2">
            Role: Frontend Developer
          </p>

          <p className="text-white/60 text-sm mt-2">
            Project: Port Logistics
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} SwiftPort Logistics. All rights reserved.
      </div>
    </footer>
  );
}