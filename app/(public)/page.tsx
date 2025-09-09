import { Button } from "@/components/ui/button";
import Image from "next/image";
import styles from "./../ui/home.module.css";

export default function Home() {
  return (
    <>
      <div>
         <div className={styles.shape}></div>
         <Image src='/next.svg' alt="Logo" width={1000} height={760} className=""/>
         {/* <Image src='/globe.svg' alt="Logo" width={100} height={76} className=" md:hidden"/> */}
         <Button className="border-custom-color">Click</Button>
      </div>
    </>
  );
}
