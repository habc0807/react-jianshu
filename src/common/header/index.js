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

    getListArea () {
        const { focused, list } = this.props

        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一换</SearchInfoSwitch>
                        <SearchInfoList>
                            {
                                list.map((item, index) => {
                                    return <SearchInfoItem key={index}>{item}</SearchInfoItem>
                                })
                            }
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            )
        } else {
            return null 
        }
    }

    render() {
        const { focused, list, handleInputFocus, handleInputBlur } = this.props

        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='search'>
                        <NavSearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames='slide'
                            >
                                <NavSearch 
                                    className={focused ? 'focused' : ''}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                />
                            </CSSTransition>
                            <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</span>
                            {this.getListArea()}
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
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
});


const mapDispachToProps = (dispatch) => ({
    handleInputFocus() {
        dispatch(actionCreators.getSearchList())
        dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
        dispatch(actionCreators.searchBlur())
    }
})


export default connect(
    mapStateToProps, 
    mapDispachToProps
)(Header) 