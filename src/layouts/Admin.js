import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import CurrentStock from "views/admin/CurrentStock.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import CurrentMarket from "views/admin/CurrentMarket.js";
import Tops from "views/admin/Tops.js";
import StockInfo from "views/admin/StockInfo.js";
import Order from "views/admin/Order.js";
import Buy from "views/admin/Buy.js";
import Sell from "views/admin/Sell.js";
import Change from "views/admin/Change.js";
import Cancel from "views/admin/Cancel.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
           
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/CurrentMarket" exact component={CurrentMarket} />
            <Route path="/admin/CurrentStock" exact component={CurrentStock} />
            <Route path="/admin/StockInfo" exact component={StockInfo} />
            <Route path="/admin/Tops" exact component={Tops} />
            <Route path="/admin/Order" exact component={Order} />
            <Route path="/admin/Sell" exact component={Sell} />
            <Route path="/admin/Buy" exact component={Buy} />
            <Route path="/admin/Change" exact component={Change} />
            <Route path="/admin/Cancel" exact component={Cancel} />

            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
