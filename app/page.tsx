import Image from "next/image";
import tree from "../public/tree.jpg";

export default function Home() {
  return (
  <div>
    <Image 
      src={tree}
      alt="img"
      className="w-full"
    />
    <h3 className="text-red-600">App</h3>
  </div>
  );
}
