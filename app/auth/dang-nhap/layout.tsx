import { Metadata } from "next";

export async function generateMetadata(context: any): Promise<Metadata> {
  return {
    title: "Đăng nhập",
    description: "Đăng nhập",
  };
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
