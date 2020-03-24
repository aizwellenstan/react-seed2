import * as React from 'react';
import { SidebarContainer } from 'client/src/containers/sidebar-container';
import { Page } from 'client/src/components/page';

import { styled } from 'client/src/styles';
import { sidebarWidth } from 'client/src/styles/constants';
import { Collapse } from '@material-ui/core';

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

interface MyState {
  loading: boolean;
  data: any;
  MD: any;
  MH: any;
  MW: any;
  UD: any;
  UH: any;
  UW: any;
  GD: any;
  GH: any;
  GW: any;
  MD0: any;
  MD1: any;
  MD2: any;
  MD3: any;
  MD4: any;
  MD5: any;
  MD6: any;
  MD7: any;
  MD8: any;
  MD9: any;
  MD10: any;
  newMH: any;
  newMW: any;
  newUD: any;
  newUH: any;
  newUW: any;
  newGD: any;
  newGH: any;
  newGW: any;
}

export class ModulePermission extends React.Component<{}, MyState> {
  private constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      data: 'data',
      MD: '',
      MH: '',
      MW: '',
      UD: '',
      UH: '',
      UW: '',
      GD: '',
      GH: '',
      GW: '',
      MD0: '',
      MD1: '',
      MD2: '',
      MD3: '',
      MD4: '',
      MD5: '',
      MD6: '',
      MD7: '',
      MD8: '',
      MD9: '',
      MD10: '',
      newMH: '',
      newMW: '',
      newUD: '',
      newUH: '',
      newUW: '',
      newGD: '',
      newGH: '',
      newGW: '',
    };
  }

  componentDidMount() {
    this.fetchData()
  }

  private handleChange = (event :any) => {
    console.log(event.target.id)
    switch(event.target.id) {
      case 'MD0':
        console.log('case MD0')
        console.log(event.target.id,event.target.value)
        this.setState({ MD0: event.target.value });
        break;
      case 'MD1':
        console.log('case MD1')
        console.log(event.target.id,event.target.value)
        this.setState({ MD1: event.target.value });
        break;
      default:
        console.log('case default')
        console.log(event.target.id,event.target.value)
    }
    
  }

  private fetchData = () => {
    console.log('fetchdata')
    const railsApi = 'http://127.0.0.1:3000';
    const CompanyId = localStorage.getItem('CompanyId');
    const ProductId = localStorage.getItem('ProductId');
    const ProjectId = localStorage.getItem('ProjectId');
    const SOURCE_URL = `${railsApi}/${CompanyId}/${ProductId}/${ProjectId}/modulepermission/api`;
    this.setState({ loading: true });
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
          this.setState({ loading: false });
        } else {
          this.setState({ data: res.data });
          this.setState(
            {
              MD: JSON.parse(res.data[0].MD),
              MH: JSON.parse(res.data[0].MH),
              MW: JSON.parse(res.data[0].MW),
              UD: JSON.parse(res.data[0].UD),
              UH: JSON.parse(res.data[0].UH),
              UW: JSON.parse(res.data[0].UW),
              GD: JSON.parse(res.data[0].GD),
              GH: JSON.parse(res.data[0].GH),
              GW: JSON.parse(res.data[0].GW),
              MD0: JSON.parse(res.data[0].MD)[0],
              MD1: JSON.parse(res.data[0].MD)[1],
              MD2: JSON.parse(res.data[0].MD)[2],
              MD3: JSON.parse(res.data[0].MD)[3],
              MD4: JSON.parse(res.data[0].MD)[4],
              MD5: JSON.parse(res.data[0].MD)[5],
              MD6: JSON.parse(res.data[0].MD)[6],
              MD7: JSON.parse(res.data[0].MD)[7],
              MD8: JSON.parse(res.data[0].MD)[8],
              MD9: JSON.parse(res.data[0].MD)[9],
              MD10: JSON.parse(res.data[0].MD)[10]
            }
          );
        }
      });
  };

  public render() {
    if (localStorage.getItem('login') !== 'true') {
      localStorage.setItem('pageNow', 'Login');
      window.location.reload();
    }
    var data = [
      {
          "Role": "Manager",
          "DeviceType": "Desktop",
          "MonitorModeMainMenuBar": this.state.MD0,
          "EditorModeMainMenuBar": this.state.MD[1],
          "TreeMenu": this.state.MD[2],
          "TimeBar": this.state.MD[3],
          "BottomBar": this.state.MD[4],
          "AlarmSystem": this.state.MD[5],
          "UIModule": this.state.MD[6],
          "CameraModule": this.state.MD[7],
          "ReportModule": this.state.MD[8],
          "LoginMenuModule": this.state.MD[9],
          "DeviceModule": this.state.MD[10]
      },
      {
          "Role": "Manager",
          "DeviceType": "Handheld",
          "MonitorModeMainMenuBar": this.state.MH[0],
          "EditorModeMainMenuBar": this.state.MH[1],
          "TreeMenu": this.state.MH[2],
          "TimeBar": this.state.MH[3],
          "BottomBar": this.state.MH[4],
          "AlarmSystem": this.state.MH[5],
          "UIModule":  this.state.MH[6],
          "CameraModule": this.state.MH[7],
          "ReportModule": this.state.MH[8],
          "LoginMenuModule": this.state.MH[9],
          "DeviceModule": this.state.MH[10]
      },
      {
          "Role": "Manager",
          "DeviceType": "WebGL",
          "MonitorModeMainMenuBar": this.state.MW[0],
          "EditorModeMainMenuBar": this.state.MW[1],
          "TreeMenu": this.state.MW[2],
          "TimeBar": this.state.MW[3],
          "BottomBar": this.state.MW[4],
          "AlarmSystem": this.state.MW[5],
          "UIModule": this.state.MW[6],
          "CameraModule": this.state.MW[7],
          "ReportModule": this.state.MW[8],
          "LoginMenuModule": this.state.MW[9],
          "DeviceModule": this.state.MW[10]
      },
      {
          "Role": "User",
          "DeviceType": "Desktop",
          "MonitorModeMainMenuBar": this.state.UD[0],
          "EditorModeMainMenuBar": this.state.UD[1],
          "TreeMenu": this.state.UD[2],
          "TimeBar": this.state.UD[3],
          "BottomBar": this.state.UD[4],
          "AlarmSystem": this.state.UD[5],
          "UIModule": this.state.UD[6],
          "CameraModule": this.state.UD[7],
          "ReportModule": this.state.UD[8],
          "LoginMenuModule": this.state.UD[9],
          "DeviceModule": this.state.UD[10]
      },
      {
          "Role": "User",
          "DeviceType": "Handheld",
          "MonitorModeMainMenuBar": this.state.UH[0],
          "EditorModeMainMenuBar": this.state.UH[1],
          "TreeMenu": this.state.UH[2],
          "TimeBar": this.state.UH[3],
          "BottomBar": this.state.UH[4],
          "AlarmSystem": this.state.UH[5],
          "UIModule": this.state.UH[6],
          "CameraModule": this.state.UH[7],
          "ReportModule": this.state.UH[8],
          "LoginMenuModule": this.state.UH[9],
          "DeviceModule": this.state.UH[10]
      },
      {
          "Role": "User",
          "DeviceType": "WebGL",
          "MonitorModeMainMenuBar": this.state.UW[0],
          "EditorModeMainMenuBar": this.state.UW[1],
          "TreeMenu": this.state.UW[2],
          "TimeBar": this.state.UW[3],
          "BottomBar": this.state.UW[4],
          "AlarmSystem": this.state.UW[5],
          "UIModule": this.state.UW[6],
          "CameraModule": this.state.UW[7],
          "ReportModule": this.state.UW[8],
          "LoginMenuModule": this.state.UW[9],
          "DeviceModule": this.state.UW[10]
      },
      {
          "Role": "Guest",
          "DeviceType": "Desktop",
          "MonitorModeMainMenuBar": this.state.GD[0],
          "EditorModeMainMenuBar":  this.state.GD[1],
          "TreeMenu": this.state.GD[2],
          "TimeBar": this.state.GD[3],
          "BottomBar": this.state.GD[4],
          "AlarmSystem": this.state.GD[5],
          "UIModule": this.state.GD[6],
          "CameraModule": this.state.GD[7],
          "ReportModule": this.state.GD[8],
          "LoginMenuModule": this.state.GD[9],
          "DeviceModule": this.state.GD[10]
      },
      {
          "Role": "Guest",
          "DeviceType": "Handheld",
          "MonitorModeMainMenuBar": this.state.GH[0],
          "EditorModeMainMenuBar": this.state.GH[1],
          "TreeMenu": this.state.GH[2],
          "TimeBar": this.state.GH[3],
          "BottomBar": this.state.GH[4],
          "AlarmSystem": this.state.GH[5],
          "UIModule": this.state.GH[6],
          "CameraModule": this.state.GH[7],
          "ReportModule": this.state.GH[8],
          "LoginMenuModule": this.state.GH[9],
          "DeviceModule": this.state.GH[10]
      },
      {
          "Role": "Guest",
          "DeviceType": "WebGL",
          "MonitorModeMainMenuBar": this.state.GW[0],
          "EditorModeMainMenuBar": this.state.GW[1],
          "TreeMenu": this.state.GW[2],
          "TimeBar": this.state.GW[3],
          "BottomBar": this.state.GW[4],
          "AlarmSystem": this.state.GW[5],
          "UIModule": this.state.GW[6],
          "CameraModule": this.state.GW[7],
          "ReportModule": this.state.GW[8],
          "LoginMenuModule": this.state.GW[9],
          "DeviceModule": this.state.GW[10]
      }
  ]
    return (
      <Page>
        <SidebarContainer />
        <Wrapper>
          Module Permission <br />
          {/* <div><pre>{JSON.stringify(data, null, 2) }</pre></div> */}
          <table style={{width: "100%", border: "1" }} >
          　<tr>
            　<td><div><pre>{JSON.stringify(data, null, 2) }</pre></div></td>
            　<td>
                <div>
                  <form>
                    <table style={{width: "100%", border: "1" }} >
                      <tr><td colSpan={2}>Manger/Desktop</td></tr>
                      <tr>
                        <td>MonitorModeMainMenuBar:</td>
                        <td>
                          <input 
                            id="MD0"
                            type="text" 
                            style={{width: "100%"}} 
                            value={this.state.MD0} 
                            onChange={this.handleChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>EditorModeMainMenuBar:</td>
                        <td>
                          <input 
                            id="MD1"
                            type="text" 
                            style={{width: "100%"}} 
                            value={this.state.MD1} 
                            onChange={this.handleChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>TreeMenu:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TimeBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>BottomBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>AlarmSystem:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>UIModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>CameraModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>ReportModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>LoginMenuModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>DeviceModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr><br/></tr>
                      <tr><td colSpan={2}>Manger/Handheld</td></tr>
                      <tr>
                        <td>MonitorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>EditorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TreeMenu:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TimeBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>BottomBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>AlarmSystem:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>UIModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>CameraModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>ReportModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>LoginMenuModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>DeviceModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>

                      <tr><br/></tr>
                      <tr><td colSpan={2}>Manger/WebGL</td></tr>
                      <tr>
                        <td>MonitorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>EditorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TreeMenu:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TimeBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>BottomBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>AlarmSystem:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>UIModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>CameraModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>ReportModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>LoginMenuModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>DeviceModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>

                      <tr><br/></tr>
                      <tr><td colSpan={2}>User/Desktop</td></tr>
                      <tr>
                        <td>MonitorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>EditorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TreeMenu:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TimeBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>BottomBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>AlarmSystem:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>UIModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>CameraModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>ReportModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>LoginMenuModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>DeviceModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>

                      <tr><br/></tr>
                      <tr><td colSpan={2}>User/Handheld</td></tr>
                      <tr>
                        <td>MonitorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>EditorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TreeMenu:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TimeBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>BottomBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>AlarmSystem:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>UIModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>CameraModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>ReportModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>LoginMenuModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>DeviceModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>

                      <tr><br/></tr>
                      <tr><td colSpan={2}>User/WebGL</td></tr>
                      <tr>
                        <td>MonitorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>EditorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TreeMenu:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TimeBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>BottomBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>AlarmSystem:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>UIModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>CameraModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>ReportModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>LoginMenuModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>DeviceModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>

                      <tr><br/></tr>
                      <tr><td colSpan={2}>Guest/Desktop</td></tr>
                      <tr>
                        <td>MonitorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>EditorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TreeMenu:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TimeBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>BottomBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>AlarmSystem:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>UIModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>CameraModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>ReportModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>LoginMenuModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>DeviceModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>

                      <tr><br/></tr>
                      <tr><td colSpan={2}>Guest/Handheld</td></tr>
                      <tr>
                        <td>MonitorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>EditorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TreeMenu:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TimeBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>BottomBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>AlarmSystem:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>UIModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>CameraModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>ReportModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>LoginMenuModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>DeviceModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>

                      <tr><br/></tr>
                      <tr><td colSpan={2}>Guest/WebGL</td></tr>
                      <tr>
                        <td>MonitorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>EditorModeMainMenuBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TreeMenu:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>TimeBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>BottomBar:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>AlarmSystem:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>UIModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>CameraModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>ReportModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>LoginMenuModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                      <tr>
                        <td>DeviceModule:</td>
                        <td><input type="text" style={{width: "100%"}}/></td>
                      </tr>
                    </table>
                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </td>
          　</tr>
          </table>
        </Wrapper>
      </Page>
    );
  }
}
