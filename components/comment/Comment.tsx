import { FunctionComponent } from "react";

interface Icomment {
  author: string;
  date: string;
  message: string;
}
const Comment: FunctionComponent<Icomment> = ({ author, message, date }) => {
  return <div className="w-full px-[20px] py-[20px] rounded-2xl bg-[#0FC2C0] my-[10px]" >
    <div className="flex w-full justify-between items-center m-0 " >
    <p className="text-white text-[16px] pr-[12px] lg:pr-0  lg:text-xl font-bold" > { author } </p>
    <p className="text-white text-[10px] italic lg:text-sm " > { date.toLocaleString() } </p>
    </div>
    <p className="text-white pt-[20px] m-0 text-[16px] text-xl " > { message } </p>
  </div>;
};

export default Comment;
