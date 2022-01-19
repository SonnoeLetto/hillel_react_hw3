import { Component } from 'react/cjs/react.development';
// import { NewsFilters } from '../news-filters/news-filters';
import { NewsList } from '../news-list/news-list';
import news from '../../news.json';

export class NewsPage extends Component {
    state = {
        checked: {
            isPhoto: false,
            isLink: false,
            isSpecial: false,
        },
        valueInp: ''
        
    }
    clickOnPhoto = () => {
        this.setState({ 
            checked : {
                ...this.state.checked,
                isPhoto : !this.state.checked.isPhoto
            }
        })
    }
    
    clickOnLink = () => {
        this.setState({ 
            checked : {
                ...this.state.checked,
                isLink : !this.state.checked.isLink
            }
        })
    }

    clickOnSpetial = () => {
        this.setState({ 
            checked : {
                ...this.state.checked,
                isSpecial : !this.state.checked.isSpecial
            }
        })
    }
    onChangeInp = (e) => {
        this.setState({valueInp: e.currentTarget.value.trim()});

    } 

    // handleFilter = (value) => {
    //     this.setState({
    //         checked: {
    //             ...this.state.checked,
    //             [value]: !this.state.checked[value] 
    //         }
            
    //     })
    // }

    // resetHandler = () => {
    //     for(let key in this.state.checked) {
    //         this.setState({
    //             checked: {
    //                 [key]: false
    //             }
    //         })
    //        }
        
        
    // }
    render() {
        let data = news;
        if (this.state.checked.isPhoto) {
            data = data.filter(el => el.photo);
        }
        if (this.state.checked.isLink) {
            data = data.filter(el => el.link);
        }
        if (this.state.checked.isSpecial) {
            data = data.filter(el => el.isSpecial);
        }
        if (this.state.valueInp.length) {
            data = data.filter(el => {
                return el.title.toLowerCase().indexOf(this.state.valueInp) > 0
            })
        }
        
        return (
            <div className='container'>
                <label>
                    <input onChange={this.clickOnPhoto} type='checkbox' checked={this.state.checked.isPhoto}/> <span>isPhoto</span>
                </label>
                <label>
                    <input onChange={this.clickOnLink} type='checkbox' checked={this.state.checked.isLink}/> <span>isLink</span>
                </label>
                <label>
                    <input onChange={this.clickOnSpetial} type='checkbox' checked={this.state.checked.isSpecial}/> <span>isSpecial</span>
                </label>
                <input type="text" value={this.state.valueInp} onChange={this.onChangeInp}/>
                {/* <NewsFilters resetHandler={this.resetHandler} handleFilter={this.handleFilter}/> */}
                <NewsList data={data} state={this.state.checked}/>
            </div>
        )
    }
}