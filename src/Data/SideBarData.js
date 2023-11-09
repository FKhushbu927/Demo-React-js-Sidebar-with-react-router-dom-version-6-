import * as FaIcons from "react-icons/fa";


import { HiWrenchScrewdriver } from "react-icons/hi2";
import { HiInformationCircle } from "react-icons/hi2";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { HiMiniShoppingBag  } from "react-icons/hi2";
import { GrAmazon } from "react-icons/gr";
import    {GrBarChart}  from "react-icons/gr";
import { BiCartAlt } from "react-icons/bi";


export const SidebarData=[
    // {
    //     title: "Accountantly",
    //     path: "/",
    //     icon: <FaIcons.FaHome />,
    //   },
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: < HiMiniSquaresPlus />,
      },
      {
        title: "Product and Services",
        path: "/products",
        icon: <HiMiniShoppingBag />,
      },
      {
        title: "Purchase",
        path: "/purchase",
        icon: <GrAmazon/>,
      },
      {
        title: "Sales",
        path: "/sales",
        icon: <BiCartAlt />,
      },
      {
        title: "Report",
        path: "/report",
        icon: <HiInformationCircle />,
      },
      {
        title: "Setting",
        path: "/setting",
        icon: <HiWrenchScrewdriver />,
      },
     
]