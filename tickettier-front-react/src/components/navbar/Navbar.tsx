import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdAirplaneTicket } from "react-icons/md";

const menuItems = [
  { id: 1, label: "Home", route: "/", icon: <AiOutlineHome /> },
  { id: 2, label: "Tickets", route: "/tickets", icon: <MdAirplaneTicket /> },
];

const navbar = () => {
  return (
    <div className="bg-gray-200 flex justify-between items-center p-2 md:p-4 lg:px-8 lg:py-4 text-2x1">
      <div className="font-bold ">
        <Link to="/"> Tickettier </Link>
      </div>
      <div className="flex items-center gap-x-4">
        {menuItems.map((item) => (
          <Link key={item.id} to= {item.route}>
            <span className="hidden md:block">{item.label}</span>
            <span className="block md:hid text-3x1" >{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default navbar;
