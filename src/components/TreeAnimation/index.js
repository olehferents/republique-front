import React, {useEffect, useState} from "react";
import './index.scss';
import left from './../../assets/left.jpg';
import right from './../../assets/right.jpg';
import frame0 from './../../assets/frames/frame0000.jpg';
import frame1 from './../../assets/frames/frame0001.jpg';
import frame2 from './../../assets/frames/frame0002.jpg';
import frame3 from './../../assets/frames/frame0003.jpg';
import frame4 from './../../assets/frames/frame0004.jpg';
import frame5 from './../../assets/frames/frame0005.jpg';
import frame6 from './../../assets/frames/frame0006.jpg';
import frame7 from './../../assets/frames/frame0007.jpg';
import frame8 from './../../assets/frames/frame0008.jpg';
import frame9 from './../../assets/frames/frame0009.jpg';
import frame10 from './../../assets/frames/frame0010.jpg';
import frame11 from './../../assets/frames/frame0011.jpg';
import frame12 from './../../assets/frames/frame0012.jpg';
import frame13 from './../../assets/frames/frame0013.jpg';
import frame14 from './../../assets/frames/frame0014.jpg';
import frame15 from './../../assets/frames/frame0015.jpg';
import frame16 from './../../assets/frames/frame0016.jpg';
import frame17 from './../../assets/frames/frame0017.jpg';
import frame18 from './../../assets/frames/frame0018.jpg';
import frame19 from './../../assets/frames/frame0019.jpg';
import frame20 from './../../assets/frames/frame0020.jpg';
import frame21 from './../../assets/frames/frame0021.jpg';
import frame22 from './../../assets/frames/frame0022.jpg';
import frame23 from './../../assets/frames/frame0023.jpg';
import frame24 from './../../assets/frames/frame0024.jpg';
import frame25 from './../../assets/frames/frame0025.jpg';
import frame26 from './../../assets/frames/frame0026.jpg';
import frame27 from './../../assets/frames/frame0027.jpg';
import frame28 from './../../assets/frames/frame0028.jpg';
import frame29 from './../../assets/frames/frame0029.jpg';
import frame30 from './../../assets/frames/frame0030.jpg';
import frame31 from './../../assets/frames/frame0031.jpg';
import frame32 from './../../assets/frames/frame0032.jpg';
import frame33 from './../../assets/frames/frame0033.jpg';
import frame34 from './../../assets/frames/frame0034.jpg';
import frame35 from './../../assets/frames/frame0035.jpg';
import frame36 from './../../assets/frames/frame0036.jpg';
import frame37 from './../../assets/frames/frame0037.jpg';
import frame38 from './../../assets/frames/frame0038.jpg';
import frame39 from './../../assets/frames/frame0039.jpg';
import frame40 from './../../assets/frames/frame0040.jpg';
import frame41 from './../../assets/frames/frame0041.jpg';
import frame42 from './../../assets/frames/frame0042.jpg';
import frame43 from './../../assets/frames/frame0043.jpg';
import frame44 from './../../assets/frames/frame0044.jpg';
import frame45 from './../../assets/frames/frame0045.jpg';
import frame46 from './../../assets/frames/frame0046.jpg';
import frame47 from './../../assets/frames/frame0047.jpg';
import frame48 from './../../assets/frames/frame0048.jpg';
import frame49 from './../../assets/frames/frame0049.jpg';
import frame50 from './../../assets/frames/frame0050.jpg';
import dec12 from './../../assets/12 Dec.jpg';
import dec13 from './../../assets/13 Dec.jpg';
import dec14 from './../../assets/14 Dec.jpg';
import dec15 from './../../assets/15 Dec.jpg';
import logo from './../../assets/logo_republiqe.png';
import arrowLeft from './../../assets/arrow-left.png';
import arrowRight from './../../assets/arrow-right.png';
import OfferModal from "../OfferModal";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import {CLEAR_AUTH, SUCCESS} from "../../actionTypes";
import {Swipe} from "react-swipe-component";
import {ImageMap} from '@qiuz/react-image-map';

const TreeAnimation = () => {
    const dates = [
        {
            name: '12',
            image: dec12,
            text: "If you want to make an entrance and love a bit of 'drama', then look no further than our all-over ostrich feather puffball dress. Don't panic tho….no real ostrich's were harmed in the making of this outfit - get the virtual look without the animal cruelty today with xxx% off",
            price: 99.9,
        },
        {
            name: '13',
            image: dec13,
            text: "When the clock strikes midnight on New Years Eve you won't need a firework display to be the centre of attention, with this brightly coloured oversized jumper dress, you will be able to reset the clock and start the new year with a sparkle! Get ready for your big appearance with xxx% discount today! ",
            price: 99.9,
        },
        {
            name: '14',
            image: dec14,
            text: "If you are looking for something with a bit more edge and drama to start the new year in style, then this luxe leather Jumpsuit could just be the ticket! Enjoy an exclusive discount of XXX% when you purchase today ",
            price: 99.9,
        },
        {
            name: '15',
            image: dec15,
            text: "Start 2021 with a bang with this one-of a kind coat that brings sparkle to any occasion!  We have been very adventurous with fabrics, colours and cuts to make sure you truly stand out, to finish we've even paired this outfit with our own custom mirror effect boots! Get your sparkle today with xxx% discount ",
            price: 99.9,
        },
    ]
    // const map1 = {
    //     name: 'calendar',
    //     areas: [
    //         {
    //             name: '12',
    //             shape: 'poly',
    //             coords: [262, 575, 288, 446, 359, 447, 385, 575],
    //             fillColor: 'rgba(255, 255, 255, 0.7)',
    //         }
    //     ]
    // }
    // const map2 = {
    //     name: 'calendar',
    //     areas: [
    //         {
    //             name: '13',
    //             shape: 'poly',
    //             coords: [290, 442, 307, 322, 355, 323, 378, 442],
    //             fillColor: 'rgba(255, 255, 255, 0.7)',
    //         }
    //     ]
    // }
    const map1 = [{
        "name": "12",
        "width": "12.548070553858611%",
        "height": "10.551893266137194%",
        "left": "43.48964407265114%",
        "top": "49.903930523994916%"
    }];
    const map2 = [{
        "name": "13",
        "width": "12.43611584327087%",
        "height": "13.017751479289942%",
        "left": "43.87776831345824%",
        "top": "34.4378698224852%"
    }];
    const map4 = [{
        "name": "15",
        "width": "11.584327086882453%",
        "height": "13.372781065088757%",
        "left": "44.04812606473592%",
        "top": "33.96449704142012%"
    }];
    const map5 = [{
        "name": "14",
        "width": "12.947189097103918%",
        "height": "13.727810650887573%",
        "left": "43.36669505962518%",
        "top": "33.84615384615385%"
    }]
    const dispatch = useDispatch();
    const history = useHistory();
    const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
    const [direction, setDirection] = useState('next');
    const [image, setImage] = useState(frame0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [map, setMap] = useState(map1);
    const [modalData, setModalData] = useState(null);

    const getModalData = (day) => {
        return dates.find(date => date.name === day);
    };

    const onMapClick = (area) => {
        setIsModalOpen(true);
        setModalData(getModalData(area.name));
    }

    useEffect(() => {
        dispatch({type: CLEAR_AUTH + SUCCESS});
    }, []);

    useEffect(() => {
        if (direction === 'next') {
            if (currentFrameIndex === 10) {
                setImage([`frame${0}`]);
                setMap(map2);
                setTimeout(() => {
                    setImage(frame1);
                }, 100);
                setTimeout(() => {
                    setImage(frame2);
                }, 150);
                setTimeout(() => {
                    setImage(frame3);
                }, 200);
                setTimeout(() => {
                    setImage(frame4);
                }, 250);
                setTimeout(() => {
                    setImage(frame5);
                }, 300);
                setTimeout(() => {
                    setImage(frame6);
                }, 350);
                setTimeout(() => {
                    setImage(frame7);
                }, 400);
                setTimeout(() => {
                    setImage(frame8);
                }, 450);
                setTimeout(() => {
                    setImage(frame9);
                }, 500);
                setTimeout(() => {
                    setImage(frame10);
                }, 600);
            } else if (currentFrameIndex === 20) {
                setTimeout(() => {
                    setImage(frame11);
                }, 150);
                setTimeout(() => {
                    setImage(frame12);
                }, 200);
                setTimeout(() => {
                    setImage(frame13);
                }, 250);
                setTimeout(() => {
                    setImage(frame14);
                }, 300);
                setTimeout(() => {
                    setImage(frame15);
                }, 350);
                setTimeout(() => {
                    setImage(frame16);
                }, 400);
                setTimeout(() => {
                    setImage(frame17);
                }, 450);
                setTimeout(() => {
                    setImage(frame18);
                }, 500);
                setTimeout(() => {
                    setImage(frame19);
                }, 550);
                setTimeout(() => {
                    setImage(frame20);
                }, 600);
            } else if (currentFrameIndex === 30) {
                setMap(map4);
                setTimeout(() => {
                    setImage(frame21);
                }, 150);
                setTimeout(() => {
                    setImage(frame22);
                }, 200);
                setTimeout(() => {
                    setImage(frame23);
                }, 250);
                setTimeout(() => {
                    setImage(frame24);
                }, 300);
                setTimeout(() => {
                    setImage(frame25);
                }, 350);
                setTimeout(() => {
                    setImage(frame26);
                }, 400);
                setTimeout(() => {
                    setImage(frame27);
                }, 450);
                setTimeout(() => {
                    setImage(frame28);
                }, 500);
                setTimeout(() => {
                    setImage(frame29);
                }, 550);
                setTimeout(() => {
                    setImage(frame30);
                }, 600);
            } else if (currentFrameIndex === 40) {
                setMap(map5)
                setTimeout(() => {
                    setImage(frame31);
                }, 150);
                setTimeout(() => {
                    setImage(frame32);
                }, 200);
                setTimeout(() => {
                    setImage(frame33);
                }, 250);
                setTimeout(() => {
                    setImage(frame34);
                }, 300);
                setTimeout(() => {
                    setImage(frame35);
                }, 350);
                setTimeout(() => {
                    setImage(frame36);
                }, 400);
                setTimeout(() => {
                    setImage(frame37);
                }, 450);
                setTimeout(() => {
                    setImage(frame38);
                }, 500);
                setTimeout(() => {
                    setImage(frame39);
                }, 550);
                setTimeout(() => {
                    setImage(frame40);
                }, 600);
            } else if (currentFrameIndex === 50) {
                setTimeout(() => {
                    setImage(frame41);
                }, 150);
                setTimeout(() => {
                    setImage(frame42);
                }, 200);
                setTimeout(() => {
                    setImage(frame43);
                }, 250);
                setTimeout(() => {
                    setImage(frame44);
                }, 300);
                setTimeout(() => {
                    setImage(frame45);
                }, 350);
                setTimeout(() => {
                    setImage(frame46);
                }, 400);
                setTimeout(() => {
                    setImage(frame47);
                }, 450);
                setTimeout(() => {
                    setImage(frame48);
                }, 500);
                setTimeout(() => {
                    setImage(frame49);
                }, 550);
                setTimeout(() => {
                    setImage(frame50);
                }, 600);
            } else {
                setImage(frame0);
            }
        } else if (direction === 'prev') {
            if (currentFrameIndex === 0) {
                setMap(map1);
                setTimeout(() => {
                    setImage(frame9);
                }, 100);
                setTimeout(() => {
                    setImage(frame8);
                }, 150);
                setTimeout(() => {
                    setImage(frame7);
                }, 200);
                setTimeout(() => {
                    setImage(frame6);
                }, 250);
                setTimeout(() => {
                    setImage(frame5);
                }, 300);
                setTimeout(() => {
                    setImage(frame4);
                }, 350);
                setTimeout(() => {
                    setImage(frame3);
                }, 400);
                setTimeout(() => {
                    setImage(frame2);
                }, 450);
                setTimeout(() => {
                    setImage(frame1);
                }, 500);
                setTimeout(() => {
                    setImage(frame0);
                }, 550);
            } else if (currentFrameIndex === 10) {
                setMap(map2)
                setTimeout(() => {
                    setImage(frame19);
                }, 100);
                setTimeout(() => {
                    setImage(frame18);
                }, 150);
                setTimeout(() => {
                    setImage(frame17);
                }, 200);
                setTimeout(() => {
                    setImage(frame16);
                }, 250);
                setTimeout(() => {
                    setImage(frame15);
                }, 300);
                setTimeout(() => {
                    setImage(frame14);
                }, 350);
                setTimeout(() => {
                    setImage(frame13);
                }, 400);
                setTimeout(() => {
                    setImage(frame12);
                }, 450);
                setTimeout(() => {
                    setImage(frame11);
                }, 500);
                setTimeout(() => {
                    setImage(frame10);
                }, 550);
            } else if (currentFrameIndex === 20) {
                setTimeout(() => {
                    setImage(frame29);
                }, 100);
                setTimeout(() => {
                    setImage(frame28);
                }, 150);
                setTimeout(() => {
                    setImage(frame27);
                }, 200);
                setTimeout(() => {
                    setImage(frame26);
                }, 250);
                setTimeout(() => {
                    setImage(frame25);
                }, 300);
                setTimeout(() => {
                    setImage(frame24);
                }, 350);
                setTimeout(() => {
                    setImage(frame23);
                }, 400);
                setTimeout(() => {
                    setImage(frame22);
                }, 450);
                setTimeout(() => {
                    setImage(frame21);
                }, 500);
                setTimeout(() => {
                    setImage(frame20);
                }, 550);
            } else if (currentFrameIndex === 30) {
                setMap(map5);
                setTimeout(() => {
                    setImage(frame39);
                }, 100);
                setTimeout(() => {
                    setImage(frame38);
                }, 150);
                setTimeout(() => {
                    setImage(frame37);
                }, 200);
                setTimeout(() => {
                    setImage(frame36);
                }, 250);
                setTimeout(() => {
                    setImage(frame35);
                }, 300);
                setTimeout(() => {
                    setImage(frame34);
                }, 350);
                setTimeout(() => {
                    setImage(frame33);
                }, 400);
                setTimeout(() => {
                    setImage(frame32);
                }, 450);
                setTimeout(() => {
                    setImage(frame31);
                }, 500);
                setTimeout(() => {
                    setImage(frame30);
                }, 550);
            } else if (currentFrameIndex === 40) {
                setTimeout(() => {
                    setImage(frame50);
                }, 100);
                setTimeout(() => {
                    setImage(frame49);
                }, 150);
                setTimeout(() => {
                    setImage(frame48);
                }, 200);
                setTimeout(() => {
                    setImage(frame47);
                }, 250);
                setTimeout(() => {
                    setImage(frame46);
                }, 300);
                setTimeout(() => {
                    setImage(frame45);
                }, 350);
                setTimeout(() => {
                    setImage(frame44);
                }, 400);
                setTimeout(() => {
                    setImage(frame43);
                }, 450);
                setTimeout(() => {
                    setImage(frame42);
                }, 500);
                setTimeout(() => {
                    setImage(frame41);
                }, 550);
                setTimeout(() => {
                    setImage(frame40);
                }, 600);
            } else {
                setImage(frame0);
            }
        }
    }, [currentFrameIndex]);

    const handleNext = () => {
        setCurrentFrameIndex((prevState) => {
            setDirection('next');
            if (prevState === 50) {
                return 0;
            } else {
                return prevState + 10;
            }
        });
    };

    const handlePrev = () => {
        setCurrentFrameIndex((prevState) => {
            setDirection('prev');
            if (prevState === 0) {
                return 40;
            } else {
                return prevState - 10;
            }
        });
    }

    return (
        <div className="tree-animation">
            <img src={logo} className="tree-animation__logo" alt=""/>
            <img src={left} className="tree-animation__image" alt=""/>
            <Swipe detectTouch={true} onSwipedLeft={handleNext} onSwipedRight={handlePrev}
                   className="tree-animation__swiper">
                <ImageMap
                    className="map"
                    src={image}
                    map={map}
                    onMapClick={onMapClick}
                />
                {/*<ImageMapper src={image} map={map} width={650} imgWidth={650} height={900} imgHeight={900} onClick={(area) => {*/}
                {/*    setIsModalOpen(true);*/}
                {/*    setModalData(getModalData(area.name));*/}
                {/*}}/>*/}
            </Swipe>
            {isModalOpen && (
                <OfferModal
                    image={modalData?.image}
                    text={modalData?.text}
                    price={modalData?.price}
                    closeAction={() => setIsModalOpen(false)}
                    action={() => {
                        if (localStorage.getItem('accessToken')) {
                            console.log('buy');
                        } else {
                            history.push('/signUp');
                        }
                    }}
                />)}
            <img src={right} className="tree-animation__image" alt=""/>
            <img src={arrowLeft} className="tree-animation__prev tree-animation__hover-img" onClick={handlePrev}
                 alt=""/>
            <img src={arrowRight} className="tree-animation__next tree-animation__hover-img" onClick={handleNext}
                 alt=""/>
        </div>

    );
};

export default TreeAnimation;
