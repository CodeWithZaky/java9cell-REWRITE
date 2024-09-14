import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarPrimitive,
} from "@/components/ui/avatar";

export function Avatar({ image, alt }: { image: string; alt: string }) {
  return (
    <AvatarPrimitive>
      <AvatarImage src={image} alt={alt} />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarPrimitive>
  );
}
