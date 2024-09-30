import KardusBekas from "@/assets/kardus-bekas.jpg";
import Image from "next/image";
import { Card } from "./ui/card";

const CardProduct = () => {
  const title = "kardus bekas kecap bango1ply - 59ml-33x21x11 original";

  return (
    <Card className="flex flex-col gap-1 pb-2 text-wrap">
      <Image src={KardusBekas} alt="gambar" />
      <div className="space-y-1 px-1 text-sm text-wrap">
        <p>{title.length > 30 ? title.slice(0, 30) + "..." : title}</p>
        <p className="text-yellow-400">Rp1.500</p>
        <div className="flex justify-between">
          <p className="bg-primary px-2 border rounded-md text-background">
            +cart
          </p>
          <p className="bg-primary px-2 border rounded-md text-background">
            buy now
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CardProduct;
