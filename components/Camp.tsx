import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({backgroundImage, title, subtitle, peopleJoined}: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-20">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-500 p-4">
            <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-16 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
             <Image 
              src={url}
              key={url}
              alt="people"
              width={52}
              height={52}
              />
            ))}

          </span>
          <p className="bold-16  md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <div className="2xl:max-container relative flex flex-col py-10 lg:mb-10n lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
        backgroundImage="bg-bg-img-1"
        title= "Yosemite National Park"
        subtitle= "California"
        peopleJoined= '50+ joined'
        />
        <CampSite 
        backgroundImage="bg-bg-img-2"
        title="Rocky Moutain National Park"
        subtitle="Colorado"
        peopleJoined="100+ joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capatalize text-white">
            <strong> Feeling lost </strong> And Not Knowing The Way? </h2>
            <p className="regular-14 xl:regular-16 mt-5 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              In euismod ipsum et dui rhoncus auctor. 
              Nullam eget mauris purus. 
              Ut ultricies, lacus nec venenatis bibendum, 
              sem ante aliquet nisi, sed ullamcorper dolor est non elit. 
              Nulla facilisi. 
              Sed eget nunc nec tortor tincidunt aliquam. 
              Nulla facilisi. 
              Sed eget nunc nec tortor tincidunt aliquam. 
              Nulla facilisi.
            </p>
            <Image 
            src="quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
            />

        </div>
      </div>
    </div>
  );
};

export default Camp;
