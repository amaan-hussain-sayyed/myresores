
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { useEffect } from "react";

export default async function Home() {
    
  

  return (
    <section className="flex flex-col flex grow items-center justify-center gap-4 py-8 md:py-10" >
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Share&nbsp;</h1>
        <h1 className={title({ color: "violet", textShadow:"sm"})}>Knowladge&nbsp;</h1>
        <br />
        <h1 className={title( {size:"sm"})}>
          platforms for sharing and discovering & exploring knowledge
        </h1>
        <h2 className={subtitle({ class: "mt-4" ,size: "sm" })}>
            ALLKNOW best platforms for blogs
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/login"
        >
         Login
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full", color:"default" })}
          href="/register"
        >
          Create Account
        </Link>
      </div>
    </section>
  );
}
