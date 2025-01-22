import { Metadata } from "next";

export async function generateMetadata(context: any): Promise<Metadata> {
  return {
    title: "Quên mật khẩu",
    description: "Quên mật khẩu",
  };
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
