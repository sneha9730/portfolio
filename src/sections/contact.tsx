import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <footer className="w-screen bg-[#111111] text-white py-8 px-6 mt-auto">
      <div className="max-w-8xl pl-12 pr-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <h2 className="text-xl font-semibold font-sans text-center lg:text-left">
            CONTACT
          </h2>
                    
          <div className="flex flex-row gap-4 items-center justify-center lg:justify-end">
            <button className="flex items-center gap-2 bg-transparent border-1 border-[#646cffaa] hover:border-3 hover:border-[#646cffaa] active:border-4 active:border-blue-500 px-4 py-2 rounded transition-all duration-200 w-full sm:w-auto justify-center">
              <Mail size={18} />
              <span className="font-medium hidden sm:block">Send an email</span>
            </button>
                        
            <button className="flex items-center gap-2 bg-transparent border-1 border-[#646cffaa] hover:border-3 hover:border-[#646cffaa] active:border-4 active:border-blue-500 px-4 py-2 rounded transition-all duration-200 w-full sm:w-auto justify-center">
              <Linkedin size={18} />
              <span className="font-medium hidden sm:block">LinkedIn</span>
            </button>
                        
            <button className="flex items-center gap-2 bg-transparent border-1 border-[#646cffaa] hover:border-3 hover:border-[#646cffaa] active:border-4 active:border-blue-500 px-4 py-2 rounded transition-all duration-200 w-full sm:w-auto justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.77-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
              </svg>
              <span className="font-medium hidden sm:block">Github</span>
            </button>
                        
            <button className="flex items-center gap-2 bg-transparent border-1 border-[#646cffaa] hover:border-3 hover:border-[#646cffaa] active:border-4 active:border-blue-500 px-4 py-2 rounded transition-all duration-200 w-full sm:w-auto justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"/>
                <circle cx="18.5" cy="5.5" r="3.5"/>
            </svg>
            <span className="font-medium hidden sm:block">Leetcode</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;