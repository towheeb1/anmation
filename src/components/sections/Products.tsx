import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiStar } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  color: string;
}

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.products-title',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.product-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.products-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: 'Collider Unwind',
      description: 'Original mood-boosting blend',
      price: 29.99,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=600&fit=crop',
      color: 'from-orange-400 to-red-500',
    },
    {
      id: 2,
      name: 'Collider Lift',
      description: 'Energizing citrus blend',
      price: 29.99,
      rating: 4.8,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=600&fit=crop',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      id: 3,
      name: 'Collider Drift',
      description: 'Calming herbal blend',
      price: 29.99,
      rating: 4.9,
      reviews: 94,
      image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=600&fit=crop',
      color: 'from-blue-400 to-indigo-500',
    },
  ];



  return (
    <section
      ref={sectionRef}
      id="products"
      className="section-padding-lg bg-cream"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="products-title text-4xl md:text-5xl font-medium text-black mb-4">
              Our Beers
            </h2>
            <p className="products-title text-black/60 max-w-md">
              Discover our range of mood-boosting, alcohol-free beers crafted for every moment.
            </p>
          </div>


        </div>

        {/* Products Grid */}
        <div className="products-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card group bg-white border border-black/10 overflow-hidden card-hover"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden img-zoom">
                {/* Rating Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5">
                  <FiStar className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="badge badge-dark">${product.price}</span>
                </div>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--transition-base)] flex items-center justify-center">
                  <button className="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-[var(--transition-base)]">
                    QUICK VIEW
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-black mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-black/60">{product.description}</p>
                  </div>
                  <a
                    href="#"
                    className="btn-primary text-xs px-4 py-2 whitespace-nowrap"
                  >
                    SHOP NOW
                  </a>
                </div>

                {/* Product Color Indicator */}
                <div className="mt-4 flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${product.color}`}
                  />
                  <span className="text-xs text-black/40">
                    {product.reviews} reviews
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-black hover:opacity-60 transition-opacity duration-[var(--transition-base)]"
          >
            VIEW ALL PRODUCTS
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;