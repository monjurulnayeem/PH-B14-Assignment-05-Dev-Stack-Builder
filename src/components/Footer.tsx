function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-100 bg-white"
    >
      <div className="mx-auto max-w-[1300px] px-5 pb-7 pt-14 lg:px-0">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center"
            >
              <img
                src="/images/logo.png"
                alt="Dev Stack"
                className="h-8 w-auto"
              />
            </a>

            <p className="mt-4 max-w-[330px] text-[11px] leading-5 text-slate-400">
              Curated tools, technologies, and
              resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex items-center gap-5">
              <a
                href="#github"
                className="text-[10px] font-medium text-slate-600 hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#twitter"
                className="text-[10px] font-medium text-slate-600 hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#linkedin"
                className="text-[10px] font-medium text-slate-600 hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-slate-800">
              Product
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#home"
                className="block text-[10px] text-slate-400 hover:text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="block text-[10px] text-slate-400 hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="block text-[10px] text-slate-400 hover:text-pink-500"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div id="about">
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-slate-800">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#about"
                className="block text-[10px] text-slate-400 hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#contact"
                className="block text-[10px] text-slate-400 hover:text-pink-500"
              >
                Contact
              </a>

              <a
                href="#careers"
                className="block text-[10px] text-slate-400 hover:text-pink-500"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-slate-800">
              Legal
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#privacy"
                className="block text-[10px] text-slate-400 hover:text-pink-500"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="block text-[10px] text-slate-400 hover:text-pink-500"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#privacy"
              className="text-[10px] text-slate-400 hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-[10px] text-slate-400 hover:text-pink-500"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;