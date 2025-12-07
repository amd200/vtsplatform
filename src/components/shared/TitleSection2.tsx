function TitleSection2({ title }: { title: string }) {
  return (
    <div
      className="text-center  mb-12 block pb-2 font-ar-medium  relative  "
    >
      <h2 className="text-primary md:text-4xl text-3xl">
        <span className="relative inline-block">
              {title}

              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 120 8" fill="none">
                <path d="M2 6C40 2 80 2 118 6" stroke="#ad4221" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
      </h2>
    </div>
  );
}

export default TitleSection2;
