"use client";

import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  CardFooter,
  Radio,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { GetCoins } from "@/app/services/coins";
import LoadingBox from "@/app/components/shared/loadingBox";
import ReactCustomPaginate from "@/app/components/shared/reactCustomPaginate";
import EmptyList from "@/app/components/shared/emptyList";
import UnderlineTabs from "./components/shared/tabs";
import TransparentTabs from "./components/shared/filters";
import Search from "./components/shared/search";
import RadioInput from "./components/shared/radioInput";
import Coins from "./models/coins";
import CoinListItem from "./components/coinListItem/coinListItem";

const TABS = [
  {
    label: "Favorites",
    value: "favorites",
  },
  {
    label: "All",
    value: "all",
  },
  {
    label: "Spot",
    value: "spot",
  },
  {
    label: "Futures",
    value: "futures",
  },
  {
    label: "New Listings",
    value: "new listings",
  },
  {
    label: "Rankings",
    value: "rankings",
  },
];
const FILTERS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Infrastructure",
    value: "infrastructure",
  },
  {
    label: "Payments",
    value: "payments",
  },
  {
    label: "DefI",
    value: "defI",
  },
  {
    label: "Memes",
    value: "memes",
  },
  {
    label: "Web3",
    value: "web3",
  },
  {
    label: "Gaming",
    value: "gaming",
  },
];
const TABLE_HEAD = [
  "Product",
  "Price",
  "24h Change",
  "market",
  "24 baseVolume",
  "quoteVolume",
  "Actions",
];

const Coinss = (props: any) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { data, error } = useSWR("/public/markets", GetCoins);
  const loadingCions = !data && !error;
  const itemsPerPage = 10;
  const totalItems = data?.markets.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const queryPage = props.searchParams.page;
  useEffect(() => {
    setPage(parseInt(queryPage ?? 1));
  }, [queryPage]);
  const onPageChangeHandler = ({ selected }: { selected: number }) =>
    router.push(`?page=${selected + 1}`);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data?.markets.slice(startIndex, endIndex);

  return (
    <>
      <Card className="h-full w-full bg-black p-4 rounded-none ">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none bg-black"
        >
          <div className="md:flex justify-between flex-row-reverse">
            <Search />
            <UnderlineTabs tabs={TABS} activeTab="all" />
          </div>
          <div className="md:flex justify-between flex-row-reverse mb-6 ">
            <RadioInput />
            <TransparentTabs tabs={FILTERS} activeTab="all" />
          </div>

          <div className="m-4 flex items-center text-3xl sm:flex-row flex-col  justify-between gap-8 ">
            <div>
              <Typography
                variant="h4"
                className=" text-2xl text-white font-bold "
              >
                BG Market Watch
              </Typography>
              <Typography as="p" className=" text-sm text-white">
                Find promising coin and great opportunitiest!
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll h-full scrollbar-thin scrollbar-thumb-white scrollbar-track-px-0 bg-black shadow-lg rounded-md  ">
          {loadingCions ? (
            <LoadingBox />
          ) : data?.markets?.length > 0 ? (
            <table className="mt-4 w-full min-w-max table-auto text-left text-white  ">
              <thead className="bg-gradient-to-r from-slate-800 ">
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-slate-700 bg-blue-black/50 p-4 first:border-l last:border-r "
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="pt-5">
                {currentPageData.map((coin: Coins) => (
                  <CoinListItem key={coin?._id} coin={coin} />
                ))}
              </tbody>
            </table>
          ) : (
            <EmptyList
              title="Coin List is Empty"
              description="You can refresh the Page"
            />
          )}
        </CardBody>

        <CardFooter className="flex items-center justify-center p-4 bg-black">
          <ReactCustomPaginate
            onPageChangeHandler={onPageChangeHandler}
            pageCount={totalPages}
            page={page}
          />
        </CardFooter>
      </Card>
    </>
  );
};
export default Coinss;
