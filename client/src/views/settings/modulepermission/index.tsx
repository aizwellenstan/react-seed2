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

  const [MD, setMD] = useState([]);
  const [UD, setUD] = useState([]);
  const [GD, setGD] = useState([]);
  
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
        handleBinary(dMD, "MD")
        handleBinary(dUD, "UD")
        handleBinary(dGD, "GD")
        console.log(MD)
        localStorage.setItem("context","a")
      }
    });
  };

  const handleSubmit = () => {
    alert("Submmit")
    console.log("Submmit =>")
    console.log(MD)
    console.log(UD)
    console.log(GD)
    // var stringMDArray = JSON.stringify([MD0,MD1,MD2,MD3,MD4,MD5,MD6,MD7,MD8,MD9,MD10])
    // var stringMHArray = JSON.stringify([MH0,MH1,MH2,MH3,MH4,MH5,MH6,MH7,MH8,MH9,MH10])
    // var stringMWArray = JSON.stringify([MW0,MW1,MW2,MW3,MW4,MW5,MW6,MW7,MW8,MW9,MW10])
    // var stringUDArray = JSON.stringify([UD0,UD1,UD2,UD3,UD4,UD5,UD6,UD7,UD8,UD9,UD10])
    // var stringUHArray = JSON.stringify([UH0,UH1,UH2,UH3,UH4,UH5,UH6,UH7,UH8,UH9,UH10])
    // var stringUWArray = JSON.stringify([UW0,UW1,UW2,UW3,UW4,UW5,UW6,UW7,UW8,UW9,UW10])
    // var stringGDArray = JSON.stringify([GD0,GD1,GD2,GD3,GD4,GD5,GD6,GD7,GD8,GD9,GD10])
    // var stringGHArray = JSON.stringify([GH0,GH1,GH2,GH3,GH4,GH5,GH6,GH7,GH8,GH9,GH10])
    // var stringGWArray = JSON.stringify([GW0,GW1,MD2,MD3,MD4,MD5,MD6,MD7,MD8,MD9,MD10])
    // var postObj = {
    //   "MD": stringMDArray,
    //   "MH": stringMHArray,
    //   "MW": stringMWArray,
    //   "UD": stringUDArray,
    //   "UH": stringUHArray,
    //   "UW": stringUWArray,
    //   "GD": stringGDArray,
    //   "GH": stringGHArray,
    //   "GW": stringGWArray
    // }
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
    // fetch(POST_URL, {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   body: JSON.stringify(postObj)
    // })
    //   .then(response =>
    //     response.json().then(data => ({
    //       data: data,
    //       status: response.status,
    //     }))
    //   )
    //   .then(res => {
    //     alert(res.data.message)
    //     fetchData()
    //   })
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


  const handleBinary = (data :any, rank: String) => {
    const toBinary = (n: Number) => n.toString(2);
    var binaryString = toBinary(data)
    
    var strx = binaryString.split('')
    var binaryArray :Array<String>=[] 
    binaryArray = binaryArray.concat(strx);
    var setInit = []
    for(var i=0; i<binaryArray.length; i++){
      if(binaryArray[i]=="1") {
        setInit[i]=true
      }else{
        setInit[i]=false
      }
    }
    switch (rank) {
      case 'MD':
        setMD(setInit)
        break;
      case 'UD':
        setUD(setInit)
        break;
      case 'GD':
        setGD(setInit)
        break;
      default:
        console.log('Err');
    }
    
  }

//   const handleChange = (e: Event) => {
//     var id = e.target.id
//     var currentMD=MD
//     currentMD[`${id}`]=!MD[`${id}`]
//     MD=currentMD
//   }

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

  var funcArraylv1=[
    "MonitorMdoeMainMenuBar",
    "EditorModeMainMenuBar",
  ]

  var Body =() => {
    let MMDCheckbox = []
    let MUDCheckbox = []
    let MGDCheckbox = []
    let eCheckbox = []
    let table=[]
    const getSecondPart=(str)=> { 
      var strArray = str.split('-')
      return strArray[strArray.length - 2];
    }
    const getThirdPart=(str)=> { 
        var strArray = str.split('-')
        return strArray[strArray.length - 1];
    }
    const handleClick = (e) => {
      var id = getThirdPart(e.target.id)
      var rank = getSecondPart(e.target.id)
      switch (rank) {
        case 'MD':
          var currentMD = JSON.stringify(MD)
          currentMD = JSON.parse(currentMD)
          currentMD[id] = !MD[id]
          setMD(currentMD)
          break;
        case 'UD':
          var currentUD = JSON.stringify(UD)
          currentUD = JSON.parse(currentUD)
          currentUD[id] = !UD[id]
          setUD(currentUD)
          break;
        case 'GD':
          var currentGD = JSON.stringify(GD)
          currentGD = JSON.parse(currentGD)
          currentGD[id] = !GD[id]
          setGD(currentGD)
          break;
        default:
          console.log('Err');
      }
      
    }
    for (let i = 0; i < 23; i++) {
      MMDCheckbox.push(
        <input 
          id={"M-MD-"+i.toString()} 
          type="checkbox" 
          checked={MD[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        funcArray[i], 
        <br />
      )
    }
    for (let i = 0; i < 23; i++) {
      MUDCheckbox.push(
        <input 
          id={"M-UD-"+i.toString()} 
          type="checkbox" 
          checked={UD[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        funcArray[i], 
        <br />
      )
    }
    for (let i = 0; i < 23; i++) {
      MGDCheckbox.push(
        <input 
          id={"M-GD-"+i.toString()} 
          type="checkbox" 
          checked={GD[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        funcArray[i], 
        <br />
      )
    }
    for (let i = 0; i < 23; i++) {
      eCheckbox.push(
        <input 
          id={"E-"+i.toString()} 
          type="checkbox" 
          checked={MD[i]} 
          onClick={()=>{handleClick(event)}}
        />, 
        funcArray[i], 
        <br />
      )
    }
    table.push(
      <table>
        <tr>
          <td colSpan={3} style={{textAlign:"center"}}>
            Desktop
          </td>
        </tr>
        <tr> 
          <td>Manager</td>
          <td>User</td>
          <td>Guest</td>
        </tr>
        <tr>
          <td>{MMDCheckbox}</td>
          <td>{MUDCheckbox}</td>
          <td>{MGDCheckbox}</td>
        </tr>
      </table>,
      <button onClick={()=>{handleSubmit()}}>Submmit</button>
    )
    return table
  }

  return (
    <Page>
      <SidebarContainer />
      <Wrapper>
        <Body />
      </Wrapper>
    </Page>
  );
}
