import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import {SideBar_Home,SideBar_Employee,SideBar_Deals,SideBar_Wallet,SideBar_Settings,SideBar_Logout} from '../../en.json'
function Slidebar() {
  let location = useLocation();

  return (
    <div className="h-full" style={{ backgroundColor: 'rgb(56 133 123 /1)', color: 'white' }}>
      {/* slide bar */}
      <div className="text-center" style={{ marginBottom: '30%',paddingTop:"15%" , paddingLeft:"10%" }}>
        <Link to="/Dashboard" className="text-white font-semibold text-center text-lg p-3 transition-colors flex items-center">
          <img src="assets/icons/logo_icon_small_1.svg" className="mr-1" alt="" />
          <h2 style={{textTransform: "uppercase"}}>Tenure</h2>
        </Link>
      </div>
      <div>
        <div className=" " style={{height:'4.5rem', backgroundColor: location.pathname === '/Dashboard' ? 'white' : '' }}>
          <Link
            to="/Dashboard"
            className="text-2xl text-white font-semibold  h-full text-lg p-3 transition-colors flex items-center "
            style={{ margin: '0 2vw', color: location.pathname === '/Dashboard' ? 'rgba(56, 133, 123, 1)' : '' }}
          >
            <img src={`assets/icons/${location.pathname !== '/Dashboard'?'logo_icon_small_2.svg':'tenurefi icon.svg'}`} className='mr-2' alt="" style={{"width":"57px"}} />
            {/* <img src={`icons/logo_icon_small_1.svg`} className="mr-1" alt="" /> */}
            <h3>{SideBar_Home}</h3>
          </Link>
        </div>

        <div className="" style={{ height:'4.5rem',backgroundColor: location.pathname === '/Employees' ? 'white' : '' }}>
          <Link
            to="/Employees"
            className="text-2xl text-white font-semibold h-full text-lg p-3 transition-colors flex items-center "
            style={{ margin: '0 2vw', color: location.pathname === '/Employees' ? 'rgba(56, 133, 123, 1)' : '' }}
          >
            <img
              src={`assets/icons/${location.pathname !== '/Employees' ? 'employees_2.svg' : 'employees_1.svg'}`}
              className="mr-4 h-11"
              alt=""
            />
            
            <h3>{SideBar_Employee}</h3>
          </Link>
        </div>

        <div
          className=""
          style={{
            height:'4.5rem',
            backgroundColor: location.pathname === '/Deals' || location.pathname === '/CatDetails' ? 'white' : '',
          }}
        >
          <Link
            to="/Deals"
            className="text-2xl text-white font-semibold h-full text-lg p-3 transition-colors flex items-center "
            style={{
              margin: '0 2vw',
              color: location.pathname === '/Deals' || location.pathname === '/CatDetails' ? 'rgba(56, 133, 123, 1)' : '',
            }}
          >
            <img
              src={`assets/icons/${
                location.pathname !== '/Deals' && location.pathname !== '/CatDetails' ? 'deals_2.svg' : 'deals_1.svg'
              }`}
              className="mr-4 h-11"
              alt=""
            />
            <h3>{SideBar_Deals}</h3>
          </Link>
        </div>

        <div className=" " style={{ height:'4.5rem', backgroundColor: location.pathname === '/Wallet' ? 'white' : '' }}>
          <Link
            to="/Wallet"
            className="text-2xl text-white font-semibold h-full  text-lg p-3 transition-colors flex items-center "
            style={{ margin: '0 2vw', color: location.pathname === '/Wallet' ? 'rgba(56, 133, 123, 1)' : '' }}
          >
            <img
              src={`assets/icons/${location.pathname !== '/Wallet' ? 'wallet_2.svg' : 'wallet_1.svg'}`}
              className="mr-4 h-11"
              alt=""
            />
            
            <h3>{SideBar_Wallet}</h3>
          </Link>
        </div>

        <div className=" " style={{ height:'4.5rem', backgroundColor: location.pathname === '/Settings' ? 'white' : '' }}>
          <Link
            to="Settings"
            className="text-2xl text-white font-semibold h-full text-lg p-3 transition-colors flex items-center "
            style={{ margin: '0 2vw', color: location.pathname === '/Settings' ? 'rgba(56, 133, 123, 1)' : '' }}
          >
            <img
              src={`assets/icons/${location.pathname !== '/Settings' ? 'settings_2.svg' : 'settings_1.svg'}`}
              className="mr-4 h-11"
              alt=""
            />
            <h3>{SideBar_Settings}</h3>
            
          </Link>
        </div>

        <div className=" ">
          <Link
            to=""
            className="text-2xl text-white font-semibold h-full text-lg p-3 transition-colors flex items-center "
            style={{ margin: '0 2vw' }}
          >
            <img src="assets/icons/logout_2.svg" className="mr-4 h-11" alt="" />
            <h3>{SideBar_Logout}</h3>
            
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slidebar;
