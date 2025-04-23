import React from "react";
import OptimizedImage from "./OptimizedImage";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  productName,
}) => {
  if (!isOpen) return null;

  const handleGoFood = () => {
    window.open("https://gofood.co.id", "_blank");
    onClose();
  };

  const handleShopeeFood = () => {
    window.open("https://shopeefood.co.id", "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900">
            Pesan {productName}
          </h3>
          <p className="text-gray-600 mt-1">
            Pilih platform untuk melanjutkan pemesanan
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={handleGoFood}
            className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <OptimizedImage
              src="/images/logos/gofood.svg"
              alt="GoFood"
              height={48}
              className="mb-2"
            />
            <span className="font-medium">GoFood</span>
          </button>

          <button
            onClick={handleShopeeFood}
            className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <OptimizedImage
              src="/images/logos/shopeefood.svg"
              alt="ShopeeFood"
              height={48}
              className="mb-2"
            />
            <span className="font-medium">ShopeeFood</span>
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 text-gray-800"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
