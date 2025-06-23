const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-20 bg-[#111111] text-white">
      <p className="md:text-lg sm:text-base text-gray-400 mb-3 sm:mb-4">Hey, I'm</p>

      <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] bg-[length:100%] bg-clip-text text-transparent mb-6 leading-tight">
        Sneha Arumugam
      </h1>

      <p className="max-w-screen md:text-lg sm:text-base text-gray-300 leading-relaxed mb-8 sm:mb-10">
        I'm a software engineer based in Toronto, Canada and also a communication and journalism student. 
        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. 
        I have been freelancing for a year now while studying at the university and I've managed to gain a decent amount 
        of experience and valuable knowledge from all different kinds of fields throughout my projects/work.
      </p>
    </section>
  );
};

export default Hero;
