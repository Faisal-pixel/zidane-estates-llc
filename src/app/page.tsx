import Hero from "@/components/Hero";
import LatestNewsAndInsight from "@/components/LatestNewsAndInsight";
import ScheduleAConsolation from "@/components/ScheduleAConsolation";
import { BLOGS_COLLECTION_NAME, db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { Blog } from "./blog/types";
import FeaturedListings from "@/components/FeaturedListings";

export default async function Home() {
  const getBlogs = async () => {
    const blogsCollection = collection(db, BLOGS_COLLECTION_NAME);
    const blogsQuery = query(blogsCollection, orderBy("timestamp", "desc"));

    const querySnapshot = await getDocs(blogsQuery);
    const blogData: Blog[] = [];

    querySnapshot.forEach((doc) => {
      blogData.push({ ...doc.data(), id: doc.id } as Blog);
    });

    return blogData;
  };

  const items = await getBlogs();

  return (
    <>
      <head>
        <title>Home | Zidane Estates LLC</title>
      </head>

      <div className=" my-16">
        <Hero />
        <LatestNewsAndInsight blogs={items} />
        <ScheduleAConsolation />
        <FeaturedListings />
      </div>
    </>
  );
}
