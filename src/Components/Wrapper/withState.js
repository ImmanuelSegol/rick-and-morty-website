import React, {Component} from 'react';
import axios from 'axios';
import {Provider} from './StateContext.js';


const withState = (WrappedComponent) => {
    return class extends Component{
        constructor(props){
            super(props);
            this.state ={
                data: null,
                searchTerm: 'Rick',
                status:'Alive'
            }
            this.fetchDataFromApi = this.fetchDataFromApi.bind(this);
            this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
            this.onChangeStatus = this.onChangeStatus.bind(this);
            this.submitSearch = this.submitSearch.bind(this);
            this.loadNextPage = this.loadNextPage.bind(this);
        }
        
        fetchDataFromApi(url){
            axios.get(url,{
              params:{
                name: this.state.searchTerm,
                status: this.state.status,
              }
            })
            .then((res) => {
              this.setState({
                data: res.data,
              });
              console.log(this.state.data);
              
            })
            .catch(err => console.log(err));
          }
        
          onChangeSearchTerm(input){
              this.setState({
                searchTerm: input,
              });
          }
          onChangeStatus(input){
            this.setState({
              status: input
            });
          }
          submitSearch(){
            if(this.state.searchTerm.length !== 0 && this.state.searchTerm.replace(/\s/g, '').length){
              this.setState({data:null});
              this.fetchDataFromApi(this.props.url);
            }
          }
          loadNextPage(back){    
            try {
              const {prev,next} = this.state.data.info; 
              if(back){
                  axios.get(prev)
                  .then((res) => {
                    if(prev === ""){
                    }else this.setState({data: res.data,});
                    console.log(this.state.data);
                  }).catch(err => console.log(err))
                }else{
                  axios.get(next)
                  .then((res) => {
                    if(next === ""){  
                    }else this.setState({data: res.data,});
                    console.log(this.state.data);
                  }).catch(err => console.log(err))              
                }
            } catch (error) {
              alert('Search for something!');
            }
          }
        
        render(){
            const {data,searchTerm,status} = this.state;
            const providerData = {
              data:data, 
              searchTerm:searchTerm, 
              status:status,
              onChangeSearchTerm:this.onChangeSearchTerm, 
              onChangeStatus:this.onChangeStatus,
              submitSearch:this.submitSearch, 
            }
            return(
                <Provider value={providerData}>
                  <WrappedComponent loadNextPage={this.loadNextPage} {...this.props}/>
                </Provider>
            )
        }
    }

}





export default withState;