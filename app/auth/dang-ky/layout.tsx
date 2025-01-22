import { Metadata } from "next";

export async function generateMetadata(context: any): Promise<Metadata> {
  return {
    title: "Đăng ký",
    description: "Đăng ký",
  };
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
