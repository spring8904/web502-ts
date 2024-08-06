import { Carousel } from 'react-bootstrap'

const Banner = () => {
  return (
    <Carousel
      className=""
      style={{
        background:
          'linear-gradient(97deg, #B5DCB0 5.13%, rgba(249, 243, 238, 0.00) 139.8%)',
      }}
    >
      <Carousel.Item>
        <div className="h-[600px] w-full bg-[url(/media/1/banner/1.png)] bg-right bg-no-repeat">
          <div className="m-auto h-[600px] max-w-screen-lg">
            <div>
              <p className="w-8/12 pt-[180px] text-6xl text-[#505F4E]">
                Chúng tôi chăm sóc khu vườn và ngôi nhà xinh đẹp của bạn
              </p>
              <p className="mt-6 w-1/2 text-[#665345]">
                Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp
                chữ. Lorem Ipsum đã là văn bản giả chuẩn của ngành kể từ những
                năm 1500
              </p>
              <button className="mt-5 rounded-[3px] border-[3px] border-[#505F4E] border-[solid] px-11 py-4 text-lg text-[#505F4E]">
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="h-[600px] w-full bg-[url(/media/1/banner/2.png)] bg-right bg-no-repeat">
          <div className="m-auto h-[600px] max-w-screen-lg">
            <div>
              <p className="w-8/12 pt-[180px] text-6xl text-[#505F4E]">
                Chúng tôi chăm sóc khu vườn và ngôi nhà xinh đẹp của bạn 2
              </p>
              <p className="mt-6 w-1/2 text-[#665345]">
                Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp
                chữ. Lorem Ipsum đã là văn bản giả chuẩn của ngành kể từ những
                năm 1500
              </p>
              <button className="mt-5 rounded-[3px] border-[3px] border-[#505F4E] border-[solid] px-11 py-4 text-lg text-[#505F4E]">
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="h-[600px] w-full bg-[url(/media/1/banner/3.png)] bg-right bg-no-repeat">
          <div className="m-auto h-[600px] max-w-screen-lg">
            <div>
              <p className="w-8/12 pt-[180px] text-6xl text-[#505F4E]">
                Chúng tôi chăm sóc khu vườn và ngôi nhà xinh đẹp của bạn 3
              </p>
              <p className="mt-6 w-1/2 text-[#665345]">
                Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp
                chữ. Lorem Ipsum đã là văn bản giả chuẩn của ngành kể từ những
                năm 1500
              </p>
              <button className="mt-5 rounded-[3px] border-[3px] border-[#505F4E] border-[solid] px-11 py-4 text-lg text-[#505F4E]">
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}
export default Banner
