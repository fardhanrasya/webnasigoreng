import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuData } from "../../data/menuData";
import SectionTitle from "../UI/SectionTitle";
import Button from "../UI/Button";
import Container from "../UI/Container";
import OrderModal from "../UI/OrderModal";
import OptimizedImage from "../UI/OptimizedImage";

const FeaturedMenu: React.FC = () => {
  // Get 3 featured items
  const featuredItems = menuData.filter((item) => item.featured).slice(0, 3);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOrderClick = (productName: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionTitle
          title="Menu Unggulan Kami"
          subtitle="Cobain menu favorit yang paling laris dan bikin ketagihan, dijamin bakal bikin kamu pengen nambah terus!"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden">
                <OptimizedImage
                  src={item.image}
                  alt={item.name}
                  height={224}
                  className="transition-transform duration-700 hover:scale-105"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-orange-600 font-bold">
                    Rp{(item.price * 15000).toLocaleString("id-ID")}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => handleOrderClick(item.name)}
                >
                  Pesan Sekarang
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu">
            <Button variant="outline" size="lg">
              Lihat Menu Lengkap
            </Button>
          </Link>
        </div>
      </Container>

      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedProduct}
      />
    </section>
  );
};

export default FeaturedMenu;
