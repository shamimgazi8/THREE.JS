// components/GradientText.jsx or directly in your page/component

const GradientText = ({ text }: any) => {
  return (
    <h1
      className="
      text-5xl md:text-7xl lg:text-8xl font-bold
      bg-gradient-to-r
      from-blue-500 via-purple-500  to-orange-500
      text-transparent
      bg-clip-text
      inline-block
      drop-shadow-lg 
      mb-3
    "
    >
      {text}
    </h1>
  );
};

export default GradientText;
