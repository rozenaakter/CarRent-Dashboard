
import img1 from "../assets/images/Ellipse 7.png";
import img2 from "../assets/images/Ellipse 7 (1).png";
import img3 from "../assets/images/Ellipse 7 (2).png";



const carData = [
  {
    id: "01",
    carNo: "6465",
    driver: "Alex Noman",         
    driverImg: img1,
    status: "Completed",
    statusColor: "bg-green-500",
    earning: "$ 35.44",
  },
  {
    id: "02",
    carNo: "5665",
    driver: "Razib Rahman",     
    driverImg: img2,
    status: "Pending",
    statusColor: "bg-yellow-400",
    earning: "$ 0.00",
  },
  {
    id: "03",
    carNo: "1755",
    driver: "Luke Norton",      
    driverImg: img3,
    status: "In route",
    statusColor: "bg-red-500",
    earning: "$ 23.50",
  },
];

export default carData;