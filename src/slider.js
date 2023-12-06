import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="slider">
            <h1>Мультфильмы</h1>
            <Slider {...settings}>
                <div>
                    <img src="../img/1.jpg" alt="Landscape 1" />
                    <h1>В Городе Стихий обитатели огня, воды, земли и воздуха живут вместе. У сильной и вспыльчивой Эмбер завязывается дружба с расслабленным, плывущим по течению Уэйдом .</h1>
                </div>
                <div>
                    <img src="../img/960.webp" alt="Landscape 2" />
                    <h1> Губка Боб Появился в эфире 1 мая 1999 года и стал одной из самых популярных анимационных программ телевидения</h1>
                </div>
                <div>
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgravityfalls.fandom.com%2Fru%2Fwiki%2F%25D0%2593%25D1%2580%25D0%25B0%25D0%25B2%25D0%25B8%25D1%2582%25D0%25B8_%25D0%25A4%25D0%25BE%25D0%25BB%25D0%25B7%3A_%25D0%25A8%25D0%25B5%25D1%2581%25D1%2582%25D1%258C_%25D0%25BD%25D0%25B5%25D0%25BE%25D0%25B1%25D1%258B%25D1%2587%25D0%25BD%25D1%258B%25D1%2585_%25D0%25B8%25D1%2581%25D1%2582%25D0%25BE%25D1%2580%25D0%25B8%25D0%25B9&psig=AOvVaw1LGBgabq7ARSRSTRiR6sll&ust=1701929782332000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiSsdOU-oIDFQAAAAAdAAAAABAE"/>
               <h1>Мультфильм детский для детей, а для взрослых он отображает всю тяжесть подросткового периуда через которые все мы прошли.</h1>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
