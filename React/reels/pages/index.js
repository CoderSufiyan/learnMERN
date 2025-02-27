import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import Feed from "../components/Feed";
import { AuthContext } from "../context/auth";
export default function Home() {

  const { user } = useContext(AuthContext);

  const Redirect = () => {
    const router = useRouter();
    router.push("/login");
  }
  
  return (
    <div>
      <Head>
        <title>Reels</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user?.uid?
        <Feed />: <Redirect/>}
    </div>
  );
}
