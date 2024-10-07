import KardusBekas from "@/assets/kardus-bekas.jpg";
import Image from "next/image";
import { Card } from "./ui/card";

const CardProduct = () => {
  const title = "kardus bekas kecap bango1ply - 59ml-33x21x11 original";

  return (
    <Card className="flex flex-col gap-1 text-wrap pb-2">
      <Image src={KardusBekas} alt="gambar" />
      <div className="space-y-1 text-wrap px-2 text-sm">
        <p>{title.length > 30 ? title.slice(0, 30) + "..." : title}</p>
        <p className="text-yellow-400">Rp1.500</p>
        <div className="flex justify-between">
          <p className="rounded-md border bg-primary px-2 text-background">
            +cart
          </p>
          <p className="rounded-md border bg-primary px-2 text-background">
            buy now
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CardProduct;
