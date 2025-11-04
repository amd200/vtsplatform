function TitleSection({ title }: { title: string }) {
  return (
    <div
      className="border-b-4 mb-8 border-[#d1d5db] inline-block pb-2 font-ar-medium text-[29px] relative after:content-[''] after:absolute after:w-1/2 after:h-1 after:rounded-2xl after:bg-gray-300 after:-bottom-3 after:start-0
                before:content-[''] before:absolute before:w-1/2 before:h-1 before:rounded-2xl before:bg-gray-300 before:-top-0.5 before:start-0"
    >
      <h2 className="text-primary">{title}</h2>
    </div>
  );
}

export default TitleSection;
