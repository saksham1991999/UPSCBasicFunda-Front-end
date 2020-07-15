import React from 'react';
import './SideNav.css';
class SideNav extends React.Component{
    render(){
        return(
            <div id="sidebar">
                <div className="view">
                <div className="toggle-btn" onClick={()=>{document.getElementById("sidebar").classList.toggle('active')}} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="show">
                    <ul>
                        <li><i class="far fa-envelope fa-2x"></i></li>
                        <li><i class="fab fa-whatsapp fa-2x"></i></li>
                        <li><i class="fab fa-telegram fa-2x"></i></li>
                        <li><i class="fab fa-instagram fa-2x"></i></li>
                        <li><i class="fab fa-facebook fa-2x"></i></li>
                    </ul>
                </div>
                </div>
                <ul>
                    <li><i class="far fa-check-circle fa-2x h"></i>
                    <div className="aaaa">
                    <div>Test Series</div>
                    <div className="subcontent">Check upcoming or scheduled test</div>
                    </div></li>
                    <li><i class="fas fa-share-alt fa-2x h"></i><div className="aaaa">
                    <div>Share</div>
                    <div className="subcontent">share our link and earn rewards</div>
                    </div></li>
                    <li><i class="far fa-clipboard fa-2x h"></i><div className="aaaa">
                    <div>My Material</div>
                    <div className="subcontent">Check Subscriptions</div>
                    </div></li>
                    <li><i class="fas fa-tag fa-2x h"></i>
                    <div className="aaaa">
                    <div>Rewards & Offers</div>
                    <div className="subcontent">Redeem latest offers
 and coins
  </div>
                    </div>
                    </li>
                    <li><i class="fas fa-users fa-2x  h"></i><div className="aaaa">
                    <div>Forum</div>
                    <div className="subcontent">Discuss your problems with 
experts</div>
                    </div></li>
                    <li><i class="fas fa-cog fa-2x h"></i><div className="aaaa">
                    <div>Settings</div>
                    <div className="subcontent subcontent-1">Change settings,Search 
queries in FAQs,Report a bug,
switch libraries,get support 
</div>
                    </div></li>
                    <li><i class="fas fa-sign-out-alt fa-2x h"></i><div className="aaaa">
                    <div>Log Out</div>
                    <div></div>
                    </div></li>
                </ul>
            </div>
        );
    }
}
export default SideNav;