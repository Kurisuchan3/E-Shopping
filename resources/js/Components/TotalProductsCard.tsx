import React from 'react';

interface TotalProductsCardProps {
  totalProducts: number;
}

const TotalProductsCard: React.FC<TotalProductsCardProps> = ({ totalProducts }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-64">
      <h3 className="text-lg font-semibold text-gray-700">Total Products</h3>
      <p className="mt-2 text-3xl font-bold text-cobalt-800">{totalProducts}</p>
    </div>
  );
};

export default TotalProductsCard;
