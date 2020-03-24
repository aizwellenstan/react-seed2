import React, { useState } from 'react'
import { SidebarContainer } from 'client/src/containers/sidebar-container';
import { Page } from 'client/src/components/page';

import { styled } from 'client/src/styles';
import { sidebarWidth } from 'client/src/styles/constants';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  @media screen and (min-width: 700px) {
    width: calc(100% - ${sidebarWidth}px);
    margin-left: ${sidebarWidth}px;
  }
`;

export const ModulePermission = () => {
  const [loading, setLoading] = useState(false);
  const [didfetch, setDidfetch] = useState(false);
  const [MD0, setMD0] = useState();
  const [MD1, setMD1] = useState();
  const [MD2, setMD2] = useState();
  const [MD3, setMD3] = useState();
  const [MD4, setMD4] = useState();
  const [MD5, setMD5] = useState();
  const [MD6, setMD6] = useState();
  const [MD7, setMD7] = useState();
  const [MD8, setMD8] = useState();
  const [MD9, setMD9] = useState();
  const [MD10, setMD10] = useState();
  const [MH0, setMH0] = useState();
  const [MH1, setMH1] = useState();
  const [MH2, setMH2] = useState();
  const [MH3, setMH3] = useState();
  const [MH4, setMH4] = useState();
  const [MH5, setMH5] = useState();
  const [MH6, setMH6] = useState();
  const [MH7, setMH7] = useState();
  const [MH8, setMH8] = useState();
  const [MH9, setMH9] = useState();
  const [MH10, setMH10] = useState();
  const [MW0, setMW0] = useState();
  const [MW1, setMW1] = useState();
  const [MW2, setMW2] = useState();
  const [MW3, setMW3] = useState();
  const [MW4, setMW4] = useState();
  const [MW5, setMW5] = useState();
  const [MW6, setMW6] = useState();
  const [MW7, setMW7] = useState();
  const [MW8, setMW8] = useState();
  const [MW9, setMW9] = useState();
  const [MW10, setMW10] = useState();
  const [UD0, setUD0] = useState();
  const [UD1, setUD1] = useState();
  const [UD2, setUD2] = useState();
  const [UD3, setUD3] = useState();
  const [UD4, setUD4] = useState();
  const [UD5, setUD5] = useState();
  const [UD6, setUD6] = useState();
  const [UD7, setUD7] = useState();
  const [UD8, setUD8] = useState();
  const [UD9, setUD9] = useState();
  const [UD10, setUD10] = useState();
  const [UH0, setUH0] = useState();
  const [UH1, setUH1] = useState();
  const [UH2, setUH2] = useState();
  const [UH3, setUH3] = useState();
  const [UH4, setUH4] = useState();
  const [UH5, setUH5] = useState();
  const [UH6, setUH6] = useState();
  const [UH7, setUH7] = useState();
  const [UH8, setUH8] = useState();
  const [UH9, setUH9] = useState();
  const [UH10, setUH10] = useState();
  const [UW0, setUW0] = useState();
  const [UW1, setUW1] = useState();
  const [UW2, setUW2] = useState();
  const [UW3, setUW3] = useState();
  const [UW4, setUW4] = useState();
  const [UW5, setUW5] = useState();
  const [UW6, setUW6] = useState();
  const [UW7, setUW7] = useState();
  const [UW8, setUW8] = useState();
  const [UW9, setUW9] = useState();
  const [UW10, setUW10] = useState();
  const [GD0, setGD0] = useState();
  const [GD1, setGD1] = useState();
  const [GD2, setGD2] = useState();
  const [GD3, setGD3] = useState();
  const [GD4, setGD4] = useState();
  const [GD5, setGD5] = useState();
  const [GD6, setGD6] = useState();
  const [GD7, setGD7] = useState();
  const [GD8, setGD8] = useState();
  const [GD9, setGD9] = useState();
  const [GD10, setGD10] = useState();
  const [GH0, setGH0] = useState();
  const [GH1, setGH1] = useState();
  const [GH2, setGH2] = useState();
  const [GH3, setGH3] = useState();
  const [GH4, setGH4] = useState();
  const [GH5, setGH5] = useState();
  const [GH6, setGH6] = useState();
  const [GH7, setGH7] = useState();
  const [GH8, setGH8] = useState();
  const [GH9, setGH9] = useState();
  const [GH10, setGH10] = useState();
  const [GW0, setGW0] = useState();
  const [GW1, setGW1] = useState();
  const [GW2, setGW2] = useState();
  const [GW3, setGW3] = useState();
  const [GW4, setGW4] = useState();
  const [GW5, setGW5] = useState();
  const [GW6, setGW6] = useState();
  const [GW7, setGW7] = useState();
  const [GW8, setGW8] = useState();
  const [GW9, setGW9] = useState();
  const [GW10, setGW10] = useState();

  // const [MD, setMD] = useState({});
  
const railsApi = 'http://127.0.0.1:3000';
const CompanyId = localStorage.getItem('CompanyId');
const ProductId = localStorage.getItem('ProductId');
const ProjectId = localStorage.getItem('ProjectId');

const fetchData = () => {
  const SOURCE_URL = `${railsApi}/${CompanyId}/${ProductId}/${ProjectId}/modulepermission/api`;
  setLoading(!loading);
  fetch(SOURCE_URL, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  })
    .then(response =>
      response.json().then(data => ({
        data: data,
        status: response.status,
      })),
    )
    .then(res => {
      if (res.status === 401) {
        alert('サーバー死んだ');
        setLoading(!loading);
      } else {
// res.data 
// {
//     "MD": "[7338799,262143,1,7,1,1,31,3,1,1,1]",
//     "MH": "[8293218,0,1,0,1,1,29,1,0,1,0]",
//     "MW": "[8293218,0,1,0,1,1,29,1,0,0,0]",
//     "UD": "[7248687,0,1,0,1,1,31,3,1,1,1]",
//     "UH": "[8293218,0,1,0,1,1,29,1,0,1,0]",
//     "UW": "[8293218,0,1,0,1,1,29,1,0,0,0]",
//     "GD": "[7248687,0,1,0,1,1,31,3,1,1,1]",
//     "GH": "[8293218,0,1,0,1,1,29,1,0,1,0]",
//     "GW": "[8293218,0,1,0,1,1,29,1,0,0,0]"
// }

        var dMD=JSON.parse(res.data[0].MD)
        var dMH=JSON.parse(res.data[0].MH)
        var dMW=JSON.parse(res.data[0].MW)
        var dUD=JSON.parse(res.data[0].UD)
        var dUH=JSON.parse(res.data[0].UH)
        var dUW=JSON.parse(res.data[0].UW)
        var dGD=JSON.parse(res.data[0].GD)
        var dGH=JSON.parse(res.data[0].GH)
        var dGW=JSON.parse(res.data[0].GW)
        handleBinary(dMD)
        console.log(MD)
        localStorage.setItem("context","a")
      }
    });
  };

  const handleSubmit = () => {
    var stringMDArray = JSON.stringify([MD0,MD1,MD2,MD3,MD4,MD5,MD6,MD7,MD8,MD9,MD10])
    var stringMHArray = JSON.stringify([MH0,MH1,MH2,MH3,MH4,MH5,MH6,MH7,MH8,MH9,MH10])
    var stringMWArray = JSON.stringify([MW0,MW1,MW2,MW3,MW4,MW5,MW6,MW7,MW8,MW9,MW10])
    var stringUDArray = JSON.stringify([UD0,UD1,UD2,UD3,UD4,UD5,UD6,UD7,UD8,UD9,UD10])
    var stringUHArray = JSON.stringify([UH0,UH1,UH2,UH3,UH4,UH5,UH6,UH7,UH8,UH9,UH10])
    var stringUWArray = JSON.stringify([UW0,UW1,UW2,UW3,UW4,UW5,UW6,UW7,UW8,UW9,UW10])
    var stringGDArray = JSON.stringify([GD0,GD1,GD2,GD3,GD4,GD5,GD6,GD7,GD8,GD9,GD10])
    var stringGHArray = JSON.stringify([GH0,GH1,GH2,GH3,GH4,GH5,GH6,GH7,GH8,GH9,GH10])
    var stringGWArray = JSON.stringify([GW0,GW1,MD2,MD3,MD4,MD5,MD6,MD7,MD8,MD9,MD10])
    var postObj = {
      "MD": stringMDArray,
      "MH": stringMHArray,
      "MW": stringMWArray,
      "UD": stringUDArray,
      "UH": stringUHArray,
      "UW": stringUWArray,
      "GD": stringGDArray,
      "GH": stringGHArray,
      "GW": stringGWArray
    }
    const POST_URL = `${railsApi}/${CompanyId}/${ProductId}/${ProjectId}/modulepermission`;
    // post data body
    // {
      //     "MD": "[7338799,262143,1,7,1,1,31,3,1,1,1]",
      //     "MH": "[8293218,0,1,0,1,1,29,1,0,1,0]",
      //     "MW": "[8293218,0,1,0,1,1,29,1,0,0,0]",
      //     "UD": "[7248687,0,1,0,1,1,31,3,1,1,1]",
      //     "UH": "[8293218,0,1,0,1,1,29,1,0,1,0]",
      //     "UW": "[8293218,0,1,0,1,1,29,1,0,0,0]",
      //     "GD": "[7248687,0,1,0,1,1,31,3,1,1,1]",
      //     "GH": "[8293218,0,1,0,1,1,29,1,0,1,0]",
      //     "GW": "[8293218,0,1,0,1,1,29,1,0,0,0]"
      // }
    fetch(POST_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(postObj)
    })
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status,
        }))
      )
      .then(res => {
        alert(res.data.message)
        fetchData()
      })
  }

  if (localStorage.getItem('login') !== 'true') {
    localStorage.setItem('pageNow', 'Login');
    window.location.reload();
  }

  if (!didfetch) {
    fetchData()
    setDidfetch(!didfetch)
  }

  

  var funcArray = [
    "isQuit",
    "isLogOut",
    "isHostSetting",
    "isLanguage",
    "isResolution",
    "isWorkingType",
    "isSwitchType",
    "isSetting",
    "isVR",
    "isAR",
    "isMouse3D",
    "isDevice",
    "isConsoleView",
    "isTreeView",
    "isMonitorView",
    "isAlertListView",
    "isLBSView",
    "isTimeBarView",
    "isVideoView",
    "isWebBrowserView",
    "isReportView",
    "isWindows",
    "isEnable"
  ]

  var MD= {}

  const handleBinary = (data :any) => {
    const toBinary = (n: Number) => n.toString(2);
    var binaryString = toBinary(8293218)
    
    var strx = binaryString.split('')
    var binaryArray :Array<String>=[] 
    binaryArray = binaryArray.concat(strx);
    var setInitMD = {}
    for(var i=0; i<binaryArray.length; i++){
      if(binaryArray[i]=="1") {
        setInitMD[`${funcArray[i]}`]=true
      }else{
        setInitMD[`${funcArray[i]}`]=false
      }
    }
    MD=setInitMD
  }

  const handleChange = (e: Event) => {
    var id = e.target.id
    var currentMD=MD
    currentMD[`${id}`]=!MD[`${id}`]
    MD=currentMD

  }

  var Body =() => {
    handleBinary(2)
    var context=localStorage.getItem("context")
    return (
        context
    )
  }

  return (
    <Page>
      <SidebarContainer />
      <Wrapper>
        Module Permission <br />
        {/* <div><pre>{JSON.stringify(buffer, null, 2)}</pre></div> */}
        Manager/Desktop
        MonitorModeMainMenuBar
        <br/>
        <button onClick={()=>{alert(JSON.stringify(MD, null, 2))}}> Debug </button>
        <Body/>
        <table style={{width: "100%", border: "1" }} >
        　<tr>
          {/* 　<td><div><pre>{JSON.stringify(array, null, 2)}</pre></div></td> */}
          　<td>
              {/* <div>
                  <table style={{width: "100%", border: "1" }} >
                    <tr><td colSpan={2}>Manger/Desktop</td></tr>
                    <tr>
                      <td>MonitorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MD0} 
                          onChange={()=>{setMD0(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>EditorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MD1} 
                          onChange={()=>{setMD1(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TreeMenu:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MD2} 
                          onChange={()=>{setMD2(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TimeBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MD3} 
                          onChange={()=>{setMD3(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>BottomBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MD4} 
                          onChange={()=>{setMD4(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>AlarmSystem:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MD5} 
                          onChange={()=>{setMD5(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>UIModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MD6} 
                          onChange={()=>{setMD6(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>CameraModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MD7} 
                          onChange={()=>{setMD7(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>ReportModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MD8} 
                          onChange={()=>{setMD8(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>LoginMenuModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MD9} 
                          onChange={()=>{setMD9(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>DeviceModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MD10} 
                          onChange={()=>{setMD10(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr><br/></tr>
                    <tr><td colSpan={2}>Manger/Handheld</td></tr>
                    <tr>
                      <td>MonitorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MH0} 
                          onChange={()=>{setMH0(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>EditorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MH1} 
                          onChange={()=>{setMH1(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TreeMenu:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MH2} 
                          onChange={()=>{setMH2(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TimeBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MH3} 
                          onChange={()=>{setMH3(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>BottomBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MH4} 
                          onChange={()=>{setMH4(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>AlarmSystem:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MH5} 
                          onChange={()=>{setMH5(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>UIModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MH6} 
                          onChange={()=>{setMH6(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>CameraModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MH7} 
                          onChange={()=>{setMH7(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>ReportModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MH8} 
                          onChange={()=>{setMH8(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>LoginMenuModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MH9} 
                          onChange={()=>{setMH9(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>DeviceModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MH10} 
                          onChange={()=>{setMH10(parseInt(event.target.value))}}/>
                      </td>
                    </tr>

                    <tr><br/></tr>
                    <tr><td colSpan={2}>Manger/WebGL</td></tr>
                    <tr>
                      <td>MonitorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MW0} 
                          onChange={()=>{setMW0(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>EditorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MW1} 
                          onChange={()=>{setMW1(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TreeMenu:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MW2} 
                          onChange={()=>{setMW2(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TimeBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MW3} 
                          onChange={()=>{setMW3(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>BottomBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MW4} 
                          onChange={()=>{setMW4(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>AlarmSystem:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MW5} 
                          onChange={()=>{setMW5(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>UIModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MW6} 
                          onChange={()=>{setMW6(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>CameraModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MW7} 
                          onChange={()=>{setMW7(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>ReportModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MW8} 
                          onChange={()=>{setMW8(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>LoginMenuModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MW9} 
                          onChange={()=>{setMW9(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>DeviceModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={MW10} 
                          onChange={()=>{setMW10(parseInt(event.target.value))}}/>
                      </td>
                    </tr>

                    <tr><br/></tr>
                    <tr><td colSpan={2}>User/Desktop</td></tr>
                    <tr>
                      <td>MonitorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UD0} 
                          onChange={()=>{setUD0(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>EditorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UD1} 
                          onChange={()=>{setUD1(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TreeMenu:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UD2} 
                          onChange={()=>{setUD2(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TimeBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UD3} 
                          onChange={()=>{setUD3(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>BottomBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UD4} 
                          onChange={()=>{setUD4(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>AlarmSystem:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UD5} 
                          onChange={()=>{setUD5(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>UIModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UD6} 
                          onChange={()=>{setUD6(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>CameraModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UD7} 
                          onChange={()=>{setUD7(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>ReportModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UD8} 
                          onChange={()=>{setUD8(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>LoginMenuModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UD9} 
                          onChange={()=>{setUD9(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>DeviceModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UD10} 
                          onChange={()=>{setUD10(parseInt(event.target.value))}}/>
                      </td>
                    </tr>

                    <tr><br/></tr>
                    <tr><td colSpan={2}>User/Handheld</td></tr>
                    <tr>
                      <td>MonitorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UH0} 
                          onChange={()=>{setUH0(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>EditorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UH1} 
                          onChange={()=>{setUH1(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TreeMenu:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UH2} 
                          onChange={()=>{setUH2(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TimeBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UH3} 
                          onChange={()=>{setUH3(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>BottomBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UH4} 
                          onChange={()=>{setUH4(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>AlarmSystem:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UH5} 
                          onChange={()=>{setUH5(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>UIModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UH6} 
                          onChange={()=>{setUH6(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>CameraModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UH7} 
                          onChange={()=>{setUH7(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>ReportModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UH8} 
                          onChange={()=>{setUH8(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>LoginMenuModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UH9} 
                          onChange={()=>{setUH9(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>DeviceModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UH10} 
                          onChange={()=>{setUH10(parseInt(event.target.value))}}/>
                      </td>
                    </tr>

                    <tr><br/></tr>
                    <tr><td colSpan={2}>User/WebGL</td></tr>
                    <tr>
                      <td>MonitorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UW0} 
                          onChange={()=>{setUW0(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>EditorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UW1} 
                          onChange={()=>{setUW1(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TreeMenu:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UW2} 
                          onChange={()=>{setUW2(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TimeBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UW3} 
                          onChange={()=>{setUW3(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>BottomBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UW4} 
                          onChange={()=>{setUW4(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>AlarmSystem:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UW5} 
                          onChange={()=>{setUW5(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>UIModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UW6} 
                          onChange={()=>{setUW6(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>CameraModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UW7} 
                          onChange={()=>{setUW7(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>ReportModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UW8} 
                          onChange={()=>{setUW8(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>LoginMenuModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UW9} 
                          onChange={()=>{setUW9(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>DeviceModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={UW10} 
                          onChange={()=>{setUW10(parseInt(event.target.value))}}/>
                      </td>
                    </tr>

                    <tr><br/></tr>
                    <tr><td colSpan={2}>Guest/Desktop</td></tr>
                    <tr>
                      <td>MonitorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GD0} 
                          onChange={()=>{setGD0(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>EditorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GD1} 
                          onChange={()=>{setGD1(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TreeMenu:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GD2} 
                          onChange={()=>{setGD2(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TimeBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GD3} 
                          onChange={()=>{setGD3(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>BottomBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GD4} 
                          onChange={()=>{setGD4(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>AlarmSystem:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GD5} 
                          onChange={()=>{setGD5(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>UIModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GD6} 
                          onChange={()=>{setGD6(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>CameraModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GD7} 
                          onChange={()=>{setGD7(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>ReportModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GD8} 
                          onChange={()=>{setGD8(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>LoginMenuModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GD9} 
                          onChange={()=>{setGD9(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>DeviceModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GD10} 
                          onChange={()=>{setGD10(parseInt(event.target.value))}}/>
                      </td>
                    </tr>

                    <tr><br/></tr>
                    <tr><td colSpan={2}>Guest/Handheld</td></tr>
                    <tr>
                      <td>MonitorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GH0} 
                          onChange={()=>{setGH0(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>EditorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GH1} 
                          onChange={()=>{setGH1(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TreeMenu:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GH2} 
                          onChange={()=>{setGH2(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TimeBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GH3} 
                          onChange={()=>{setGH3(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>BottomBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GH4} 
                          onChange={()=>{setGH4(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>AlarmSystem:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GH5} 
                          onChange={()=>{setGH5(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>UIModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GH6} 
                          onChange={()=>{setGH6(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>CameraModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GH7} 
                          onChange={()=>{setGH7(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>ReportModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GH8} 
                          onChange={()=>{setGH8(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>LoginMenuModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GH9} 
                          onChange={()=>{setGH9(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>DeviceModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GH10} 
                          onChange={()=>{setGH10(parseInt(event.target.value))}}/>
                      </td>
                    </tr>

                    <tr><br/></tr>
                    <tr><td colSpan={2}>Guest/WebGL</td></tr>
                    <tr>
                      <td>MonitorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GW0} 
                          onChange={()=>{setGW0(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>EditorModeMainMenuBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GW1} 
                          onChange={()=>{setGW1(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TreeMenu:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GW2} 
                          onChange={()=>{setGW2(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>TimeBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GW3} 
                          onChange={()=>{setGW3(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>BottomBar:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GW4} 
                          onChange={()=>{setGW4(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>AlarmSystem:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GW5} 
                          onChange={()=>{setGW5(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>UIModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GW6} 
                          onChange={()=>{setGW6(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>CameraModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GW7} 
                          onChange={()=>{setGW7(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>ReportModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GW8} 
                          onChange={()=>{setGW8(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>LoginMenuModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GW9} 
                          onChange={()=>{setGW9(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                    <tr>
                      <td>DeviceModule:</td>
                      <td>
                        <input 
                          type="text" 
                          style={{width: "100%"}} 
                          value={GW10} 
                          onChange={()=>{setGW10(parseInt(event.target.value))}}/>
                      </td>
                    </tr>
                  </table>
                  <input type="submit" value="Submit" onClick={handleSubmit} /> 
              </div> */}
            </td>
        　</tr>
        </table>
      </Wrapper>
    </Page>
  );
}
