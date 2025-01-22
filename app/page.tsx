import { Metadata } from "next";
import HomeCarousel from "./components/HomeCarousel";

export async function generateMetadata(context: any): Promise<Metadata> {
  return {
    title: "Pengu - Hệ thống cửa hàng thời trang toàn quốc",
    description:
      "Mua sắm thời trang chất lượng cao với giá cả phải chăng tại Pengu. Khám phá bộ sưu tập mới nhất của chúng tôi ngay hôm nay!",
  };
}

const HomePage = () => {
  return (
    <div className="w-full max-w-[1280px] mx-5 md:mx-auto">
      <div className="my-10">
        <HomeCarousel />
      </div>
    </div>
  );
};

export default HomePage;
