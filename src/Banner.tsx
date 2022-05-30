import {ParallaxBanner} from 'react-scroll-parallax'
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export const BannerTop = () => {
    const background: BannerLayer = {
        image: "https://lh3.googleusercontent.com/9NUsrG6qCv9Ek96VV6MlX_DALMM--rEI8mbt52TXR-3Stdlx9Z4a_x-DjcMKv5xXQO5Iqx4HEKdTbCQWr3dvLS2Js-ELvAO_PzSFlJpYd8qEGw56J14yDQ6J76XBYKTDAAxI3l-WOLnMDkkihpZgLa9OTYyHnlSH4VbFuJoD0g0BAacGB48UZMCW0gI_hF5UEF72kWzMXhM_91W0U6uIFUulE_PtTZ8asma5u9O9WTZ0WiTfC3CNPB4fHyTpt5RCixCCZF64cBSAEocrsVJujz8nqA5mk9SWn89sgbv3mOXdzAthVGvgSBpouZHzyl-tesOxiz1I6DRE8C8vjmyRW4gQKZu65soI2ELNME4Q-f3TPA2zJfZ-sHvANQlxDV5TwcJ2tFPpOVb1x57pY-6QVadnbo6CRjUtGMxOe5ET0M1bN9MSogW_KQTr9YjL8n3CkXXU3eA7-3QmYHmr7g6Kogy7bDZnRcUJQeOyWt_fcWEdQIO9sMDU8fRNr6Ezn_lvTG0CLiZ52K52Md7h6w7AQX7XL4Er0Pcdzi0qgkYw9-4nIiJ8dZEzucjkQS0U4l3HTH0LGN-coZQVS3l-PGWKA4NfZhIrQyPRdnsVBPW2XP0_qaHGgSK1qVh5eF8q7n0rbzMri3xbBgzbIzZdsgJ5DsbfRjRPp9XFw630hZYPyawpQbAcQDfg_pZjV3BtO79YfBZGn7-HSL9lRw06Oflp2lpArPGvq53U_PtQZ2C6YOg8Nqgk7_dxN4jSF1BjhlPH1pMhCp9S4IaKACgtQk2pIN2iDZvnBgKL0wWrKJfx1QTjV4Lnzk0XwMnE7SQurIg9WyEsmcV5iWkMilbopLAmLOjoEB1R6od5Yb9uvdNK=w958-h719-no?authuser=0",
        translateY: [0, 50],
        opacity: [1, 0.3],
        scale: [1.05, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const headline: BannerLayer = {
        translateY: [0, 30],
        scale: [1, 1.05, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="inset center">
                <h1 className="headline white">Jancuk Pristel</h1>
            </div>
        )
    };

    const foreground: BannerLayer = {
        image: "https://lh3.googleusercontent.com/qX5lv9zGLSZT1Fie9zQTzSJZcooPfFZMQWGRHf0xt-89hFeq4MIFe90-_QLZiZ7GnDzxOIUNIjsg3NQGzr_QkU-rlIxuviR9lsyIdS1qmb_VHrLG2ZzmlMlAlTlTacIcEFshSSKATTPrq1ggbZo3nPt4FwWJ0BXLvRI5i8bhFYcbstVpzPQolDTWGTNMcExaieB7FLZCxWIAeOEam0DzwvbyUrieZyGDeldqOdE1eP6t4kreiJv0ZxDGMM9cpMGBV5zSffdpDneQeNmKd7v-gjSqAQMPzwerZjaH4xVpzUloK1Ml_ACPiqd2vPxVFW4GnzKYoMsHj32Izx88hc2kE0z-ZOz2XRARzVTmtQd2pmjBQb-S4p7k2QaCSqRLsfEmeTJR_AzA-9wZrp9XjC7L18FV6pRhpVznAPKhz0TSQDBFjWfFmyNQanbnuRIG-MOcbI7CsP8i0JFOcAvNcSuUQcvSn7knQoWE2WbfPzpzr4-gjrDczoYQq64OkPivPstiIw1oTGEOgUt8UgoXGyNFLUBLZkyLEhFCw-WHj_eaAhsWaTf5c6i8vz1ilpSnTSxBhJTVo5Cr1D5Mtwx1zOOOBmdgKiBCKPyuK6NdaKf6oK-FK72qPU3ZZ-jne7VrK4NqHVND-KeXwO8cFs-Zam9Cy-sh7bIExGcHB95lXQSPmYkrAmnEZK56zYQwzRpu5kXhqcEcVlacwt5s6YiTjSAXJr3MTc6cCAy6ff8On3rmeH7sYY-a8JQFX8274UU_L8Na8ol571leWl8edP90KxCdr03I5m_yhi_L5pSFH1f4o_zXNhVfXBU2GsZ1lVaEivIe_U26weYKLkGeSIvNviTejdQGJp2VGpThaiDvJbBs=w1283-h961-no?authuser=0",
        translateY: [0, 15],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const gradientOverlay: BannerLayer = {
        opacity: [0, 15],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="gradient inset" />
    };

    return (
        <ParallaxBanner
            layers={[background, headline, foreground, gradientOverlay]}
            className="full"
            />
    );
};