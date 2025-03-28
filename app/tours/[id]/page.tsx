import localImg from '@/images/landscape.jpg';
import Image from 'next/image';

const remoteImg = 'https://www.course-api.com/images/tours/tour-1.jpeg';

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>page {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        <div>
          <Image
            src={localImg}
            width={192}
            height={192}
            alt="obrazek"
            className="w-48 h-48 object-cover rounded"
            priority
          />
          <h2>local image</h2>
        </div>
        <div>
          <Image
            src={remoteImg}
            width={192}
            height={192}
            alt="obrazek 2"
            className="w-48 h-48 object-cover rounded"
            priority
          />
          <h2>remote image</h2>
        </div>
      </section>
    </div>
  );
};

export default page;
