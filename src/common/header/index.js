import React, {Component} from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearchWrapper, 
    NavSearch, 
    Addition, 
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style.js'
import { actionCreators }  from './store'

class Header extends Component {

    getListArea (show) {
        if (show) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一换</SearchInfoSwitch>
                        <SearchInfoList>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            )
        } else {
            return null 
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='search'>
                        <NavSearchWrapper>
                            <CSSTransition
                                in={this.props.focused}
                                timeout={200}
                                classNames='slide'
                            >
                                <NavSearch 
                                    className={this.props.focused ? 'focused' : ''}
                                    onFocus={this.props.handleInputFocus}
                                    onBlur={this.props.handleInputBlur}
                                />
                            </CSSTransition>
                            <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</span>
                            {this.getListArea(this.props.focused ? true : false)}
                        </NavSearchWrapper>
                    </NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className='writting'><span className="iconfont">&#xe615;</span>写文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => ({
    focused: state.getIn(['header', 'focused'])
});


const mapDispachToProps = (dispatch) => ({
    handleInputFocus() {
        const action = actionCreators.searchFocus()
        dispatch(action)
    },
    handleInputBlur() {
        const action = actionCreators.searchBlur()
        dispatch(action)
    }
})


export default connect(
    mapStateToProps, 
    mapDispachToProps
)(Header) 