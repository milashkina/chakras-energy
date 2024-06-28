import globalStyle from "@/app/globalStyle.module.css";
import data from '@/app/data/data-info.json'
import {TChakraInfo} from "@/app/data/type";
import React, {FC} from "react";
import Reiki from "../../../public/the-chakras-reiki.png"
import Image from "next/image"

interface IChakraInfo {
    info: TChakraInfo[],
}
const Page: FC<IChakraInfo> = ({info}): JSX.Element => {
    info = data

    return (
        <section>
        <div className={`p-8 text-center`}>The seven Major Chakras:</div>
        <div className={`${globalStyle.infoSection} p-4 m-6 flex items-center justify-center gap-8`}>
            <ul>
                {info && info.map((elem, key) => <li className={`p-2`} key={key}>{elem.name}</li>)}
            </ul>
            <Image src={Reiki && Reiki.src} height={105} width={200} alt={"info-graphic"} />
        </div>
        <div className={`flex flex-col justify-between items-center p-8 gap-10`}>
            {info && info.map((elem) =>
                <div className={`flex flex-col gap-2 justify-evenly items-center`} data-info={elem} key={elem._id}>
                    <div>{elem.sound}</div>
                    <div className={`flex gap-2 items-center`}>
                        <div>
                            <Image src={'/'+elem.mandala} alt={elem.name} className={`${globalStyle.frame}`} width={95} height={95}/>
                        </div>
                        <div>
                            <div className={`font-light`}><span className={`font-bold`}>Name:</span> {elem.name}</div>
                            <div className={`font-light`}><span className={`font-bold`}>Meaning:</span> {elem.meaning}</div>
                            <div className={`font-light`}><span className={`font-bold`}>Color:</span> {elem.color}</div>
                            <div className={`font-light`}><span className={`font-bold`}>Sense: </span>{elem.sense}</div>
                            <div className={`font-light`}><span className={`font-bold`}>Location: </span>{elem.location}</div>
                            <div className={`font-light`}><span className={`font-bold`}>Gemstones: </span>{elem.gemstones.map((el, key) => <span key={key}>{el}, </span>)}</div>
                            <div className={`font-light`}><span className={`font-bold`}>Pranayama: </span>{elem.pranayama.map((el, key) => <span key={key}>{el}, </span>)}</div>
                            <div className={`font-light`}><span className={`font-bold`}>Essential oils: </span>{elem.essential_oil.map((el, key) => <span key={key}>{el}, </span>)}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </section>
    )
}
export default Page
