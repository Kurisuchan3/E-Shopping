import ProductCard from '@/Components/ProductCard';
import { Button } from '@/Components/ui/button';
import AppLayout from '@/Layouts/AppLayout';
import { Product } from '@/types';
import { Head, Link } from '@inertiajs/react';
import homeImg from '../../images/home.jpg';

export default function Home({
  mainBestSellingProducts,
  morelosBestSellingProducts,
}: {
  mainBestSellingProducts: Product[];
  morelosBestSellingProducts: Product[];
}) {
  return (
    <AppLayout>
      <div className="pb-4 pt-2">
        <div className="relative mx-auto flex max-w-4xl items-center justify-center rounded-md py-4">
          <div className="z-10 flex h-[169px] w-[709px] flex-col items-center justify-center">
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <Button className="mt-4" asChild>
              <Link href={route('categories.index')}>Shop Now</Link>
            </Button>
          </div>
          <img src={homeImg} alt="" className="absolute" />
        </div>
        <br></br><br></br><br></br>
       
      </div>
    </AppLayout>
  );
}
