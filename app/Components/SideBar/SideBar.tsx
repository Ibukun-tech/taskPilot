"use client";
import ima from "../../../public/gab.jpg";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreProvider";
import Image from "next/image";
import React from "react";
import styles from "./sideBar.module.css";
import Menu from "../../utils/Meal";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const SideBar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const handleClick = (link: string) => {
    router.push(link);
  };
  // const { value } = useContext(StoreContext);
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideProfile}>
        <div className={styles.sideProfileOverlay}></div>
        <div>
          <Image
            className={styles.sideImage}
            width={50}
            height={50}
            src={ima}
            alt={""}
          />
        </div>
        <h1 className={styles.sideProfileName}>
          <span>Ibk</span>
          <span>oyetunji</span>
        </h1>
      </div>

      <ul className={styles.sideNavItems}>
        {Menu.map((item, id) => {
          return (
            <li
              key={id}
              className={`${styles.sideNavItem} ${
                item.link === pathName ? styles.active : " "
              }`}
              onClick={() => {
                handleClick(item.link);
              }}
            >
              {item.icon}
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <div>stuff</div>
    </div>
  );
};

export default SideBar;
