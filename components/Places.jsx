import React from "react";
import Place from "./Place";
import Wekiwa from '../src/assets/Wekiwa Springs State Park.jpg'
import Tibet from '../src/assets/Tibet-Butler.jpg'
import EolaPark from '../src/assets/Lake Eola.jpg'
import Harry from '../src/assets/Leu_Gardens_Orlando.jpg'
import Louisa from '../src/assets/lake-louisa-state-park.jpg'
import Wilderness from '../src/assets/disney-wilderness-preserve-sign-1.jpg'
import Merritt from '../src/assets/Merritt Island National Wildlife Refuge.webp'
import BlueSpring from '../src/assets/Blue-Springs.png'
import Everglades from '../src/assets/Everglades.jpg'
import LakeToho from '../src/assets/Lake-Toho.jpg'

const Places = () => {
    return (
        <div className="Container">
            <div className="row">
                <div className="col-sm">
                    <Place url={Wekiwa} name='Wekiwa Springs State Park' address=' 1800 Wekiwa Cir, Apopka, FL 32712' phone='(407) 553-4383' 
                    website='https://www.floridastateparks.org/parks-and-trails/wekiwa-springs-state-park'/>
                </div>
                <div className="col-sm">
                    <Place url={Tibet} name='Tibet-Butler Nature Preserve' address=' 8777 Winter Garden Vineland Rd, Orlando, FL 32836' phone='(407) 254-1940'
                    website='https://www.ocfl.net/CultureParks/Parks.aspx?m=dtlvw&d=39#.Y_euInbMKbh'/>
                </div>
                <div className="col-sm">
                    <Place  url={EolaPark} name='Lake Eola Park' address='512 E Washington St, Orlando, FL 32801' phone='(407) 246-4484' 
                    website='https://www.orlando.gov/Parks-the-Environment/Directory/Lake-Eola-Park'/>
                </div>
                <div className="col-sm">
                    <Place url={Harry} name='Harry P. Leu Gardens' address='1920 N Forest Ave, Orlando, FL 32803' phone='(407) 246-2620'
                    website='https://www.leugardens.org/'/>
                </div>
                <div className="col-sm">
                    <Place url={Louisa} name='Lake Louisa State Park' address='7305 US Hwy 27, Clermont, FL 34714' phone='(352) 394-3969'
                    website='https://www.floridastateparks.org/parks-and-trails/lake-louisa-state-park'/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <Place url={Wilderness} name='Disney Wilderness Preserve' address='2700 Scrub Jay Trail, Poinciana, FL 34759' phone='(407) 935-0002'
                    website='https://www.nature.org/en-us/get-involved/how-to-help/places-we-protect/the-disney-wilderness-preserve/'/>
                </div>
                <div className="col-sm">
                    <Place url={Merritt} name='Merritt Island National Wildlife' address='1987 Scrub Jay Way, Titusville, FL 32782' phone='(321) 861-0669'
                    website='https://www.fws.gov/refuge/merritt-island'/>
                </div>
                <div className="col-sm">
                    <Place url={BlueSpring} name='Blue Spring State Park' address='2100 W French Ave, Orange City, FL 32763' phone='(386) 775-3663'
                    website='https://www.floridastateparks.org/parks-and-trails/blue-spring-state-park'/>
                </div>
                <div className="col-sm">
                    <Place url={Everglades} name='The Everglades' address='Everglades City, FL 34139, USA' phone='(407) 553-4383'
                    website='https://www.nps.gov/ever/index.htm'/>
                </div>
                <div className="col-sm">
                    <Place url={LakeToho} name='Lake Tohopekaliga' address='Kissimmee River, Shingle Creek' phone='(407) 553-4383'
                    website='https://www.orlandobass.com/lake-tohopekaliga/'/>
                </div>
            </div>

            
            
        </div>
    )
}

export default Places