import React, { Component } from 'react';

import './App.css';
              {/* NOTE*/}
                          {/* <ul class="dropdown-menu">
                            <li class="dropdown-header">Pendidikan Pra Sekolah</li>
                            <li><a href="">PAUD (Pendidikan Anak Usia Dini)</a></li>
                            <li><a href="">TK (Taman Kanak-kanak)</a></li>
                            <li><a href="">RA (Raudhatul Athfal)</a></li>
                          </ul>
                          <ul class="dropdown-menu">
                            <li class="dropdown-header">Pendidikan Dasar</li>
                            <li><a href="">SD (Sekolah Dasar)</a></li>
                            <li><a href="">MI (Madrasah Ibtidaiyah)</a></li>
                            <li><a href="">SMP (Sekolah Menengah Pertama)</a></li>
                            <li><a href="">MTs (Madrasah Tsanawiyah)</a></li>                      
                          </ul>
                          <ul class="dropdown-menu">
                            <li class="dropdown-header">Pendidikan Menengah</li>
                            <li><a href="">SMA (Sekolah Menengah Atas)</a></li>
                            <li><a href="">MA (Madrasah Aliyah)</a></li>
                            <li><a href="">SMK (Sekolah Menengah Kejuruan)</a></li>
                          </ul>
                          <ul class="dropdown-menu">
                            <li class="dropdown-header">Pendidikan Tinggi</li>
                            <li><a href="">D3 Diploma</a></li>
                            <li><a href="">S1/D4 Sarjana</a></li>
                            <li><a href="">S2 Magister</a></li>
                            <li><a href="">S3 Doktoral</a></li>
                          </ul> */}

                          class App extends Component {
                            state = {
                              dropdown:'pilih jenjangnya dulu!',
                              jenjang:'',
                              jenjang2:'',
                              jenjang3:'',
                              jenjang4:'',
                              terpilihtingkat:'Pilih tingkat',
                              terpilihjenjang:'Pilih jenjang'
                              };
                            
                            pertama =() =>{     
                              this.setState({
                                terpilihtingkat:'Pendidikan Pra Sekolah' ,
                                dropdown:'Jenjang Pendidikan Pra Sekolah',
                                jenjang:'PAUD (Pendidikan Anak Usia Dini)',
                                jenjang2:'TK (Taman Kanak-kanak)',
                                jenjang3:'RA (Raudhatul Athfal)',
                              });   
                            }
                          
                            kedua =() =>{     
                              this.setState({
                                terpilihtingkat:'Pendidikan Dasar' ,
                                dropdown:'Jenjang Pendidikan Dasar',
                                jenjang:'SD (Sekolah Dasar )',
                                jenjang2:'MI (Madrasah Ibtidaiyah)',
                                jenjang3:'SMP (Sekolah Menegah Pertama)',
                                jenjang4:'MTs (Madrasah Tsanawiyah)',
                              });   
                            }
                          
                            ketiga =() =>{     
                              this.setState({
                                terpilihtingkat:'Pendidikan Menengah' ,
                                dropdown:'Jenjang Pendidikan Menengah',
                                jenjang:'SMA (Sekolah Menegah Atas)',
                                jenjang2:'MA (Madrasah Aliyah)',
                                jenjang3:'SMK (Sekolah Menengah Kejuruan)',
                              });   
                            }
                          
                            keempat =() =>{     
                              this.setState({
                                terpilihtingkat:'Pendidikan Tinggi' ,
                                dropdown:'Jenjang Pendidikan Tinggi',
                                jenjang:'D3 Diploma',
                                jenjang2:'S1/D4 Sarjana',
                                jenjang3:'S3 Doktoral',
                              });   
                            }
                          
                            render() {
                          
                              return (
                                <div>
                          <center>
                            <h1 style={{fontSize:"30px",fontWeight:"bold",marginTop:"20px"}}>Jengjang Pendidikan</h1>
                           <div className="container" style={{marginTop:"20px"}}>
                            <div class="btn-group">
                              <button type="button" class="btn-lg btn-warning dropdown-toggle" data-toggle="dropdown"
                               style={{width: "300px"}}>{this.state.terpilihtingkat}</button>
                              <div class="dropdown-menu">
                                  <a className="dropdown-item" onClick= {this.pertama}>Pendidikan Pra Sekolah</a>
                                  <a className="dropdown-item" onClick= {this.kedua} >Pendidikan Dasar</a>
                                  <a className="dropdown-item" onClick= {this.ketiga} >Pendidikan Menegah</a>
                                  <a className="dropdown-item" onClick= {this.keempat} >Pendidikan Tinggi</a>
                              </div>
                            </div>
                            </div>
                                 
                                 <br/><br/><br/><br/><br/><br/><br/><br/>
                                 { this.state.jenjang == '' ? 
                                   <h5>{this.state.dropdown}</h5> :
                                   <div>
                                      <u><h5>{this.state.dropdown}</h5></u>
                                      <p>{this.state.jenjang}</p>
                                      <p>{this.state.jenjang2}</p>
                                      <p>{this.state.jenjang3}</p>
                                      <p>{this.state.jenjang4}</p> 
                                    </div>
                                  }
                              </center>
                              </div>
                              );
                            }
                          }
                          
                          export default App;
