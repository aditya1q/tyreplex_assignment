import { About, Deals, Service, Payment, Footer, TyreList } from './index';

export default function Home() {
  return (
    <main className='flex flex-col gap-3 w-full lg:w-[87%] mx-auto z-0'>
      <About />
      <Deals />
      <Service />
      <TyreList />
      <Payment />
      <Footer />
    </main>
  );
}
