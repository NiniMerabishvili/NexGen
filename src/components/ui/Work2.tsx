interface Work2Props {
  image: string;
}

const Work2 = ({ image }: Work2Props) => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl overflow-hidden">
      <img
        src={image}
        alt="Project Screenshot"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Work2;