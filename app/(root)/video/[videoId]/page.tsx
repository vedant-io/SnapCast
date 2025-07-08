import VideoDetailHeader from "@/components/VideoDetailHeader";
import VideoPlayer from "@/components/VideoPlayer";
import { getVideoById } from "@/lib/actions/video";
import { redirect } from "next/dist/server/api-utils";
import { Params } from "next/dist/server/request/params"

const page = async({params}: Params) => {

  const { videoId } = await params;


  const {user, video} = await getVideoById(videoId);

  if(!video) redirect('/404')




  return (
    <main className="wrapper page">
      <VideoDetailHeader {...video} userImg={user?.image} username={user?.name} ownerId={video.userId}/>
      <section className="content">
        <VideoPlayer videoId={video.videoId}/>
      </section>
    </main>
  )
}

export default page
