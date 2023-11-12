"use client";

import { Tooltip, Typography } from "@material-tailwind/react";
import Coins from "@/app/models/coins";
import Image from "next/image";
import Bitcoin from "@/public/bitcoin.png";
import Star from "@/public/star.png";
import Chart from "@/public/chart.png";

interface CoinListItem {
  coin: Coins;
}

const CoinListItem = ({ coin }: CoinListItem) => {
  const classes = "p-2 cursor-default ";
  var threeDigitRandom = Math.floor(Math.random() * 900 + 100);
  var twoDigitRandom = Math.floor(Math.random() * 90 + 10);
  var percentOne = Math.floor(Math.random() * 9000 + 1000) / 100;
  var percentTwo = Math.floor(Math.random() * 9000 + 1000) / 100;
  var Price = Math.floor(Math.random() * 900 + 100) / 10000;
  return (
    <>
      <tr>
        <td className={classes}>
          <Tooltip
            content="Volume"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <div className="flex items-center gap-2 ">
              <Image src={Star} alt="image" width={20} height={20} />
              <Image src={Bitcoin} alt="image" width={30} height={30} />

              <div className="flex flex-col">
                <Typography variant="small" className="font-normal">
                  {coin.market}
                </Typography>
              </div>
            </div>
          </Tooltip>
        </td>
        <td className={classes}>
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <Typography variant="small" className="font-normal">
                {Price}
              </Typography>
            </div>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col text-red-700">
            <Typography variant="small" className="font-normal pl-5">
              {percentOne}%
            </Typography>
            <Typography
              variant="small"
              className="font-normal opacity-70 text-green-800 pl-5"
            >
              {percentTwo}%
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <Image src={Chart} alt="image" width={100} height={30} />
        </td>
        <td className={classes}>
          <Tooltip
            content="Base Volume"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <div className=" pl-7 ">{threeDigitRandom}M</div>
          </Tooltip>
        </td>
        <td className={classes}>
          <Tooltip
            content="Volume"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <div className=" pl-7 ">{twoDigitRandom}M</div>
          </Tooltip>
        </td>
        <td className={classes}>
          <Tooltip
            content="Trade Now !"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Typography
              variant="small"
              className=" text-green-800 font-bold cursor-pointer pl-4"
            >
              Trade
            </Typography>
          </Tooltip>
        </td>
      </tr>
    </>
  );
};

export default CoinListItem;
