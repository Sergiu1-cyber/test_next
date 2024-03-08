import Image from "next/image";
import tree from "../public/tree.jpg";
import Form from "@/components/Form";

export default function Home() {
  return (
  <div>
    <Image 
      src={tree}
      alt="img"
      className="w-full"
    />

    <Form />
  </div>
  );
}
