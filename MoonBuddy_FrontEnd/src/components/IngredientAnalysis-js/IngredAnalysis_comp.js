import React, { useState } from 'react';
import NavigatorMain from "../Main-js/Navigator_main";
import Navitgator1 from "../Main-js/Navitgator1";
import style from "../css/IngredientAnalysis.module.css";
import { AiOutlineShareAlt, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Modal, Box, Button, Typography } from '@mui/material';
//npm install react-icons --save
//npm install @mui/material @emotion/react @emotion/styled

//모달 데이터 관리
const ModalData = [
    {
        title: "Orgainc 100",
        description: "100% 유기농 순면 커버.3년 이상 화학비료를 사용하지 않은 토양에서 자란 원료로 모든 유기농 기준을 준수했을 때 받을 수 있는 국제 인증",
    },
    {
        title: "FDA",
        description: "FDAFDAFDAFDAFDAFDA... (내용 생략)",
    },
    {
        title: "더마테스트",
        description: "1더마테스트더마테스트... (내용 생략)",
    },
];
//모달 스타일 설정
const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-30%, -30%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '3px solid #6E00FD',
    boxShadow: 10,
    p: 6,
};

const IngredientAnalysis = () => {
    // const ProductData=[]
    const [openModal, setOpenModal] = useState(false);
    const [currentModalIndex, setCurrentModalIndex] = useState(0);

    const handleOpen = (index) => {
        setCurrentModalIndex(index);
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const [activeTab, setActiveTab] = useState('feat');
    const featLiLength = document.querySelectorAll('.Tab_Feature').length;
    const borderStyle = activeTab === 'feat' ? { borderBottom: featLiLength ? `${featLiLength * 2}px solid transparent` : 'none' } : {};

    return (
        <div>
            <Navitgator1 />
            <NavigatorMain />
            <div className={style.container}>
                {/* 제품 정보(이미지,브랜드,이름,가격) 파트 */}
                <div className={style.LeftArea_ProductInfo}>
                    {/* map함수로 매핑해야할지 고민 */}
                    <div>
                        <img src={"/imgs/Products/[제품]건강한 순수한면.jpg"} alt="건강한 순수한면" />
                    </div>
                    <div className={style.LeftBotton}>
                        <div>
                            <p className={style.brand}>(순수한면)</p>
                            <p className={style.name}><h3>(건강한 순수한면)</h3></p>
                            <p className={style.price}>(가격)원</p>
                        </div>
                        <div><AiOutlineShareAlt size={25} /> <AiOutlineHeart size={25} /></div>
                    </div>
                </div>
                <div className={style.RightArea_IngredientInfo}>
                    {/* 문버디스코어 파트 */}
                    <div className={style.Section1}>
                        <img src={"/imgs/MoonScore.png"} alt="문버디 스코어" height="100px" />
                        <div className={style.title}>문버디 스코어<div className={style.real_moonscore}>(88.27)</div></div>
                    </div>
                    {/* 위험성분 파트 */}
                    <div className={style.Section2}>
                        <div className={style.title}>위험성분</div>
                        <div>
                            폴리에틸렌폴리프로필렌복합섬유
                        </div>
                        <div>
                            올레핀중합체
                        </div>
                        <div>
                            면상펄프
                        </div>
                    </div>
                    {/* 인증마크 파트 */}
                    <div className={style.Section3}>
                        <div className={style.title}><h4>인증마크</h4>마크를 클릭하면 자세한 설명이 나옵니다.</div>
                        <div style={{ display: 'flex' }}>
                            {ModalData.map((data, index) => (
                                <div key={index}>
                                    <Button onClick={() => handleOpen(index)}>
                                        <img src={"/imgs/Marks/Mark" + `${index + 1}` + ".png"} height="100px" />
                                    </Button>
                                    <Modal open={openModal && currentModalIndex === index} onClose={handleClose} aria-labelledby={`modal-Mark${index + 1}-title`} aria-describedby={`modal-Mark${index + 1}-description`}>
                                        <Box sx={ModalStyle}>
                                            <Typography id={`modal-Mark${index + 1}-title`} variant="h6" component="h1">
                                                {data.title}
                                            </Typography>
                                            <Typography id={`modal-Mark${index + 1}-descrip tion`} sx={{ mt: 2 }}>
                                                {data.description}
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
            {/* 제품 특징 & 리뷰 파트 */}
            <div className={style.BottomArea_FeatureAndReivew}>
                <ul className={style['TabList']} style={borderStyle}>
                    <li
                        className={activeTab === 'feat' ? style.Tab_Feature : ''}
                        onClick={() => setActiveTab('feat')}
                    >
                        특징
                    </li>
                    <li className={activeTab === 'reviews' ? style.Tab_Review : ''}
                        onClick={() => setActiveTab('reviews')}
                    >
                        리뷰
                    </li>
                </ul>
                {/* 하단에 표시할 특징or리뷰 */}
                {activeTab === 'feat' && (
                    <div>
                        <img src={"/imgs/ProductFeatures/건강한 순수한면.jpg"} />
                    </div>
                )}
                {activeTab === 'reviews' && (
                    <ul>
                        <div className={style.Review}>
                            리뷰1
                        </div>
                        <div className={style.Review}>
                            리뷰2
                        </div>
                        {/* 리뷰 목록을 추가 */}
                    </ul>
                )}
            </div>
        </div >
    );
};

export default IngredientAnalysis;