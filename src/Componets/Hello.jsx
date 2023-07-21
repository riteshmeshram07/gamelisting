import React from 'react'
import S1 from "./../assets/Images/2.png";
import S2 from "./../assets/Images/3.png";
import S3 from "./../assets/Images/4.png";

export const Hello = () => {
  return (
    <div className="footer  bg-slate-300 dark:bg-pink-700 justify-center align-middle hidden md:block ">
    <div className="socialMedia flex cursor-pointer justify-center align-middle gap-4 pt-2">
    <img src={S1} width={60} height={60} className="hidden md:block" />
    <img src={S2} width={60} height={60} className="hidden md:block" />
    <img src={S3} width={60} height={60} className="hidden md:block" />
    </div>
    <p> &copy; 2023 riteshmeshram.com</p>
  </div>
  )
}
