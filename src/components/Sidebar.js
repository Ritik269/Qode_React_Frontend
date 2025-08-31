import React from "react";



function Sidebar({ setPage }) {
  return (
    <aside className="sidebar">
      <h3>
        capitalmind <br/><span className="premium">premium</span>
      </h3>
      <ul>
        <li onClick={() => setPage("home")}>🏠 Home</li>
        <li onClick={() => setPage("portfolio")}>📊 Portfolios</li>
        <li onClick={() => setPage("experimentals")}>🧪 Experimentals</li>
        <li onClick={() => setPage("archives")}>📂 Slack Archives</li>
        <li onClick={() => setPage("refer")}>👥 Refer a friend</li>
        <li onClick={() => setPage("gift")}>🎁 Gift a subscription</li>
        <li onClick={() => setPage("account")}>👤 Account</li>
      </ul>
      <div className="footer">
        CMP1Y
        <br />
        <small>Valid till Apr 19, 2025</small>
      </div>
    </aside>
  );
}

export default Sidebar;

