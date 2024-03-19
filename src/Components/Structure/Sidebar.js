import React from 'react';
import { Link } from 'react-router-dom'; 



function Sidebar() {

    const sidebarToggle = () => {
        const sidebar = document.querySelector('.sideslide');
        sidebar.classList.toggle('toggled');
    };


  return (
    <ul className=" sideslide navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            { /* Sidebar - Brand */ }
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">IMS Admin </div>
            </a>

            { /* Divider */ }
            <hr className="sidebar-divider my-0" />

            { /* Nav Item - Dashboard */ }
            <li className="nav-item active">
                <Link to="../home" className="nav-link" ><i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span>
                </Link>
                
            </li>

            { /* Divider */ }
            <hr className="sidebar-divider" />


            { /* Nav Item - Pages Collapse Menu */ }
            <li className="nav-item">
                <Link to="../products" className="nav-link">
                <i className="fa-brands fa-product-hunt" />
                    <span>Products</span></Link>
                
            </li>

            <hr className="sidebar-divider" />

            { /* Nav Item - Utilities Collapse Menu */ }
            <li className="nav-item">
            <Link to="../supplier" className="nav-link">
                <i className="fa fa-truck " />
                    <span>Suppliers</span></Link>
            </li>


            { /* Divider */ }
            <hr className="sidebar-divider" />

            { /* Nav Item - Pages Collapse Menu */ }
             <li className="nav-item">
             <Link to="../customer" className="nav-link">
                <i className="fa fa-users " />
                    <span>Customers</span></Link>
            </li>

            <hr className="sidebar-divider" />

            { /* Nav Item - Charts */ }
            <li className="nav-item">
            <Link to="../inventory" className="nav-link">
                    <i className="fas fa-fw fa-chart-area" />
                    <span>Inventory</span></Link>
            </li>

            { /* Nav Item - Tables */ }
            <hr className="sidebar-divider" />
            <li className="nav-item">
            <Link to="../order" className="nav-link">
                    <i className="fas fa-fw fa-table" />
                    <span>Orders</span></Link>
            </li>

            { /* Divider */ }
            <hr className="sidebar-divider d-none d-md-block" />

            { /* Sidebar Toggler (Sidebar) */ }
            <div className="text-center d-none d-md-inline">
                <button onClick={sidebarToggle} className="rounded-circle border-0" id="sidebarToggle" />
            </div>


        </ul>
  )
}

export default Sidebar