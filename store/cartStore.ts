import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-toastify";

export type CartItem = {
  id: number; // ID sản phẩm
  product_variation_id: number; // ID biến thể sản phẩm
  name: string; // Tên sản phẩm
  price: number; // Giá sản phẩm (giá thường)
  sale_price?: number | null; // Giá giảm (nếu có)
  promotion_discount?: number | null; // Giá khuyến mãi (nếu có %)
  quantity: number; // Số lượng
  image: string; // Hình ảnh sản phẩm
  attributes?: { [key: string]: string }; // Thuộc tính được chọn (nếu có)
  in_stock?: number;
  slug?: string;
};

export type ShoppingCartState = {
  items: CartItem[]; // Danh sách sản phẩm trong giỏ hàng
  subTotal: number; // Tổng giá trị sản phẩm chưa giảm giá
  totalPrice: number; // Tổng giá trị giỏ hàng (sau giảm giá)
  totalQuantity: number; // Tổng số lượng sản phẩm
};

export type ShoppingCartActions = {
  addToCart: (item: CartItem) => void;
  removeFromCart: (product_variation_id: number) => void;
  updateQuantity: (product_variation_id: number, quantity: number) => void;
  clearCart: () => void;
};

const calculateCartTotals = (items: CartItem[]) => {
  let subTotal = 0;
  let totalPrice = 0;
  let totalQuantity = 0;

  items.forEach((item) => {
    if(item.promotion_discount){
      const itemPrice =item.price; // lấy giá gốc
      const itemDiscount = itemPrice * (item.promotion_discount / 100); //giá của chương trình khuyến mãi

      const finalPrice = itemPrice - itemDiscount;

      subTotal += finalPrice * item.quantity;
      totalPrice += finalPrice * item.quantity;
      totalQuantity += item.quantity;
    }else{
      const itemPrice = item.sale_price ?? item.price; 

      subTotal += itemPrice * item.quantity;
      totalPrice += itemPrice * item.quantity;
      totalQuantity += item.quantity;
    }

  });

  return { subTotal, totalPrice, totalQuantity };
};

const useCartStore = create<ShoppingCartState & ShoppingCartActions>()(
  persist(
    (set, get) => ({
      // Trạng thái mặc định
      items: [],
      totalQuantity: 0,
      subTotal: 0,
      totalPrice: 0,

      // Thêm sản phẩm vào giỏ
      addToCart: (item) => {
        set((state) => {
          const existingItem = state.items.find(
            (i) => i.product_variation_id === item.product_variation_id
          );

          let updatedItems: CartItem[];
          if (existingItem) {
            updatedItems = state.items.map((i) =>
              i.product_variation_id === item.product_variation_id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            );
          } else {
            updatedItems = [...state.items, item];
          }

          // Tính toán lại giỏ hàng
          const { subTotal, totalPrice, totalQuantity } = calculateCartTotals(updatedItems);
          
          return { items: updatedItems, subTotal, totalPrice, totalQuantity };
        });
      },

      // Xóa sản phẩm khỏi giỏ
      removeFromCart: (product_variation_id) => {
        set((state) => {
          const updatedItems = state.items.filter(
            (i) => i.product_variation_id !== product_variation_id
          );

          // Tính toán lại giỏ hàng
          const { subTotal, totalPrice, totalQuantity } = calculateCartTotals(updatedItems);
          toast.success("Đã xóa sản phẩm khỏi giỏ hàng");
          return { items: updatedItems, subTotal, totalPrice, totalQuantity };
        });
      },

      // Cập nhật số lượng sản phẩm
      updateQuantity: (product_variation_id, quantity) => {
        set((state) => {
          const updatedItems = state.items.map((i) =>
            i.product_variation_id === product_variation_id
              ? { ...i, quantity }
              : i
          );
          //không được tăng quá số lượng tồn kho

          const itemInStock = updatedItems.find((i) => i.product_variation_id === product_variation_id)?.in_stock;
          if (itemInStock !== undefined && itemInStock < quantity) {
            toast.error("Số lượng sản phẩm trong kho không đủ");
            return state;
          }

          //không được giảm số lượng dưới 1
          if (quantity < 1) {
            toast.error("Số lượng sản phẩm không hợp lệ");
            return state;
          }
          // Tính toán lại giỏ hàng
          const { subTotal, totalPrice, totalQuantity } = calculateCartTotals(updatedItems);
          
          return { items: updatedItems, subTotal, totalPrice, totalQuantity };
        });
      },

      // Làm rỗng giỏ hàng
      clearCart: () =>
        set({ items: [], subTotal: 0, totalPrice: 0, totalQuantity: 0 }),
    }),
    {
      name: "cart-storage", // Tên lưu trữ
      storage: createJSONStorage(() => localStorage), // Sử dụng localStorage
    }
  )
);

export default useCartStore;
