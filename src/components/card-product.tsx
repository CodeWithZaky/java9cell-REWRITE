import KardusBekas from "@/assets/kardus-bekas.jpg";
import Image from "next/image";
import { Card } from "./ui/card";

const CardProduct = () => {
  return (
    <Card className="flex flex-col gap-5 text-wrap">
      <Image src={KardusBekas} alt="gambar" />
      <div className="text-wrap">
        <p>kardus bekas kecap bango1ply - 59ml-33x21x11</p>
        <p>Rp1.500</p>
        <p>+cart</p>
      </div>
    </Card>
  );
};

export default CardProduct;
