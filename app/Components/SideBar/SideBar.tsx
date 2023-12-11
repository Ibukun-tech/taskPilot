"use client";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import ima from "../../../public/gab.jpg";
import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../Context/StoreProvider";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./sideBar.module.css";
import Menu from "../../utils/Meal";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { UserButton, useClerk, useUser } from "@clerk/nextjs";
const SideBar = () => {
  const [nav, setNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const v = useUser();
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(width);
  // @ts-ignore
  // const { firstName, lastName, imageUrl } = v.user;
  const router = useRouter();
  const pathName = usePathname();
  const handleClick = (link: string) => {
    router.push(link);
  };
  const { signOut } = useClerk();
  const signOutHandler = () => {
    signOut(() => {
      router.push("/signin");
    });
  };
  console.log();
  // const { value } = useContext(StoreContext);
  return (
    <div
      className={
        width >= 622
          ? styles.sideBar
          : nav
          ? styles.sideBarOpen
          : styles.sideBarClose
      }
    >
      <div
        className={styles.sideToggleNav}
        onClick={() => {
          setNav(!nav);
        }}
      >
        {nav ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faArrowLeft} />
        )}
      </div>
      <div className={styles.sideProfile}>
        <div className={styles.sideProfileOverlay}></div>
        <div>
          <Image
            className={styles.sideImage}
            width={50}
            height={50}
            src={v.user?.imageUrl || ""}
            alt={""}
          />
        </div>
        <div className={`sideUserBtn top-0 w-full h-full absolute z-20`}>
          <UserButton />
        </div>
        <h1 className={styles.sideProfileName}>
          <span>{v.user?.firstName}</span>
          <span>{v.user?.lastName}</span>
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
      <button onClick={signOutHandler} className={styles.sideBarButton}>
        {<FontAwesomeIcon icon={faSignOut} />}
        <p> Sign Out</p>
      </button>
    </div>
  );
};

export default SideBar;
