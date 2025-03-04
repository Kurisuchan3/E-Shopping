import BestSellingProductsTable, { BestSellingProduct } from '@/Components/BestSellingProductsTable';
import SalesGraph, { SalesData } from '@/Components/SalesGraph';
import AdminLayout from '@/Layouts/AdminLayout';
import TotalProductsCard from '@/Components/TotalProductsCard';
import { Order } from '@/types';
import { Head } from '@inertiajs/react';

export default function Dashboard({
  currentMonthSales,
  todaySales,
  yearSales,
  currentMonthBestSelling,
  recentOrders,
}: {
  currentMonthSales: SalesData;
  todaySales: SalesData;
  yearSales: SalesData;
  currentMonthBestSelling: BestSellingProduct[];
  recentOrders: Order[];
}) {
  const totalProducts = currentMonthBestSelling.length;

  return (
    <AdminLayout>

    </AdminLayout>
  );
}
