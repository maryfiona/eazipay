import Home from "../../assets/Home.png";
import Pay from "../../assets/Pay.png";
import Loan from "../../assets/Loan.png";
import More from "../../assets/More.png";
import Employ from "../../assets/Employ.png";
import { useNavigate } from "react-router";


const BottomNavItem = ({ icon, title, link }) => {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate(link)}
            className="btn d-flex flex-column gap-2 justify-content-center align-items-center 
          p-3 bg-white border-none text-grey" style={{ width: "20%" }}>
            <img src={icon} alt={title} width={20} height={20} />
            <p>
                {title}
            </p>
        </button>
    );
};
const BottomNav = () => {
    return (
        <div style={{ height: '82px' }} className="position-fixed bottom-0 start-0 end-0 bg-white shadow-sm">
            <div className="w-100 d-flex justify-content-even">
                {[
                    { icon: Home, title: "Home", link: "/mobile" },
                    { icon: Employ, title: "Employee", link: "/mobile/employee" },
                    { icon: Pay, title: "Payroll", link: "/mobile" },
                    { icon: Loan, title: "Loans", link: "/mobile" },
                    { icon: More, title: "More", link: "/mobile" },
                ].map(({ icon, title, link }) => (
                    <BottomNavItem icon={icon} title={title} link={link} />
                ))}
            </div>
        </div>
    )
};

const MobileTemplate = ({ children }) => {
    return (
        <div className="h-100 bg-white">
            {children}
            <BottomNav />
        </div>
    )
}

export default MobileTemplate;