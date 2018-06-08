import React, { Component } from 'react';

import './App.css';


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
        <h1 style={{fontSize:"50px",fontWeight:"bold",marginTop:"20px", color:'green'}}>Jengjang Pendidikan</h1>
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
