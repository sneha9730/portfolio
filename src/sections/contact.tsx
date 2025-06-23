import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <footer className="w-screen bg-[#111111] text-white py-8 px-6 mt-auto">
      <div className="max-w-8xl pl-4 pr-4 sm:pl-12 sm:pr-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#DD5789] to-[#9845E8] bg-clip-text text-transparent">
            CONTACT
          </h2>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-end items-center">
            <a
              href="mailto:snehaarumugam10@gmail.com"
              className="flex items-center gap-2 border border-[#33D2FF] hover:border-2 px-4 py-2 rounded transition-all duration-200"
            >
              <Mail size={18} color="white" />
              <span className="font-medium hidden sm:block">Send an email</span>
            </a>

            <a
              href="https://linkedin.com/in/snehaarumugam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#33D2FF] hover:border-2 px-4 py-2 rounded transition-all duration-200"
            >
              <Linkedin size={18} color="white" />
              <span className="font-medium hidden sm:block">LinkedIn</span>
            </a>

            <a
              href="https://github.com/sneha9730"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#33D2FF] hover:border-2 px-4 py-2 rounded transition-all duration-200"
            >
              <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.77-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
              </svg>
              <span className="font-medium hidden sm:block">Github</span>
            </a>

            <a
              href="https://leetcode.com/sneha_9730/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#33D2FF] hover:border-2 px-4 py-2 rounded transition-all duration-200"
            >
              <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
              <span className="font-medium hidden sm:block">Leetcode</span>
            </a>

            <a
              href="https://kaggle.com/sneha9730"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#33D2FF] hover:border-2 px-4 py-2 rounded transition-all duration-200"
            >
              <span className="text-white font-bold text-lg">K</span>
              <span className="font-medium hidden sm:block">Kaggle</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
