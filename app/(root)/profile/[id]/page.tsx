import Header from "@/components/Header"
import VideoCard from "@/components/VideoCard"
import { dummyCards } from "@/constants"

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params

  return (
    <div className="wrapper page">
      <Header subHeader="email@testmail.com" title="Test" userImg="/assets/images/dummy.jpg" />
      <h1 className="text-2xl font-karla">USER ID: {id}</h1>
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}

      </section>

    </div>
  )
}

export default page
