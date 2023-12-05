import React from 'react'

function IsiSideBarAdmin() {
    const [activeMenu, setActiveMenu] = useState(null);
    // const [open, setOpen] = useState(true);
  return (
       <div className="h-screen flex-1 p-7">
          {activeMenu === "Dashboard" && <AdminDashboard/>}
          {activeMenu === "Inbox" && <TransaksiAdmin />}
          {activeMenu === 'Transaksi' && <Transaksi />}
        </div> 
  )
}

export default IsiSideBarAdmin
