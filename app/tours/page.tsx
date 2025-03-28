import Link from 'next/link';
import Image from 'next/image';
interface Tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
}

const URL = 'https://www.course-api.com/react-tours-project';

const fetchTours = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const res = await fetch(URL);
  const tours: Tour[] = await res.json();
  return tours;
};

const ToursPage = async () => {
  const tours = await fetchTours();

  return (
    <section>
      <h1 className="text-3xl mb-4">Tours Page</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {tours.map(tour => (
          <div key={tour.id}>
            <Link href={`/tours/${tour.id}`} className="text-blue-500">
              {tour.name}
            </Link>

            <p>{tour.info}</p>
            <div className="relative h-48 mb-2">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover rounded"
              />
            </div>
            <p>{tour.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToursPage;
