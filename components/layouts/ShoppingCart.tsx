import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CreditCardIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import useCartStore from "@/store/cartStore";
import Image from "next/image";
import { formatPrice } from "@/helpers/helpers";

const ShoppingCart = () => {
  const items = useCartStore((state) => state.items);

  const removeItem = useCartStore((state) => state.removeFromCart);

  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <ShoppingBagIcon size={30} />
          <div className="absolute -top-2 -right-1 bg-red-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {items.length ?? 0}
          </div>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="border-b py-2 text-xl">Giỏ hàng.</SheetTitle>
        </SheetHeader>

        <div className="my-5">
          {items.length > 0 ? (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="absolute object-contain"
                          width={64}
                          height={72}
                        />
                      )}
                    </div>

                    <div className="flex flex-col self-start">
                      <span className="line-clamp-1 text-sm font-medium mb-1">
                        {item.name}
                      </span>

                      <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
                        {item.attributes?.size} - {item.attributes?.color}
                      </span>

                      <div className="mt-4 text-xs text-muted-foreground">
                        <button
                          onClick={() => removeItem(item.product_variation_id)}
                          className="flex items-center gap-0.5"
                        >
                          <X className="w-3 h-4" />
                          Xoá
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1 font-medium">
                    <span className="ml-auto line-clamp-1 text-sm">
                      {item.promotion_discount
                        ? formatPrice(
                            item.price -
                              item.price * (item.promotion_discount / 100)
                          )
                        : formatPrice(item.sale_price ?? item.price)}
                    </span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <Image
                src="https://res.cloudinary.com/doy3slx9i/image/upload/v1735373251/Pengu/oops_k6dat1.svg"
                width={200}
                height={200}
                alt="Empty cart"
              />

              <p className="text-center text-gray-400 mt-4">
                Giỏ hàng của bạn trống.
              </p>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="mt-10 sm:justify-between">
            <div className="w-full flex items-center justify-center gap-4">
              <SheetTrigger asChild>
                <Link
                  href="/gio-hang"
                  className="flex-1 w-full px-4 py-2 bg-primary text-white text-[1.1rem] rounded-md flex items-center gap-[7px]"
                >
                  <ShoppingCartIcon size={20} />
                  Giỏ hàng
                </Link>
              </SheetTrigger>

              <SheetTrigger asChild>
                <Link
                  href="/thanh-toan"
                  className="flex-1 w-full px-4 py-2 bg-white border border-gray-500 text-primary text-[1.1rem] rounded-md flex items-center gap-[7px]"
                >
                  <CreditCardIcon size={20} />
                  Thanh toán
                </Link>
              </SheetTrigger>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
