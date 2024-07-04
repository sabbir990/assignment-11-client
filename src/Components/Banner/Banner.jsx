import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import { Navigation } from 'swiper/modules';
import Slide from '../Slide/Slide';

export default function Banner() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                <SwiperSlide>
                    <Slide image={banner1} title={'Group Volunteer'} description={"Experience the joy of giving back by joining our group volunteer program. Whether you're a team from work, a club, or a group of friends, volunteering together strengthens bonds and creates lasting memories. Together, we can make a significant impact in our community"} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={banner2} title={'Community Event'} description={"Join us for an exciting community event where we come together to make a difference. Whether it's a neighborhood cleanup, a charity drive, or a local festival, your participation helps build a stronger, more connected community."} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={banner3} title={'Helping hands'} description={"Every act of kindness counts. Join our Helping Hands initiative to support those in need and make a positive impact in our community. Whether it's lending a hand at local shelters, assisting with food drives, or offering a smile and support to someone in need, your efforts make a world of difference. "} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
