import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Card, Spin } from "antd";
import Logo from "./Logo";

const GlobalLoading = () => {
    const { globalLoading } = useSelector((state) => state.globalLoading);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (globalLoading) {
            setTimeout(() => {
                setIsLoading(true);
            }, 500);
        } else {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }, [globalLoading]);

    return (
        <>
            <div style={{
                opacity: isLoading ? 1 : 0,
                transition: "all .3s ease",
                pointerEvents: "none",
                pointerEvents: "none",
                position: "fixed",
                width: "100vw",
                height: "100vh",
                zIndex: 999,
                backgroundColor:"black"
            }} >
                <Card
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor:"black",
                        border:"none"
                    }}>
                    <Logo />
                    <Spin
                        size="large"
                        style={{
                            position: "absolute",
                            top: "10%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }} />
                </Card>
            </div>
        </>
    );
};

export default GlobalLoading;
