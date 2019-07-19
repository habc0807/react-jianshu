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
        const { focused, list, page, mouseIn, totalPage,  handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        const newList = list.toJS()
        const pageList = []

        if(newList.length) {
            for(let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={i}>{ newList[i] }</SearchInfoItem>
                )
            }
        }

        // if (true) {
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe606;</i>
                            换一换
                        </SearchInfoSwitch>
                        <SearchInfoList>
                            { pageList }
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            )
        } else {
            return null 
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur } = this.props

        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='search'>
                        <NavSearchWrapper className="navsearchWrapper">
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
                            <span className={focused ? 'focused iconfont searchiconfont' : 'iconfont searchiconfont'}>&#xe637;</span>
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
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
});


const mapDispachToProps = (dispatch) => ({
    handleInputFocus() {
        dispatch(actionCreators.getSearchList())
        dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
        dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
        dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
        dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {

        let originAngle = spin.style.transform ? spin.style.transform.replace(/[^0-9]/ig, '') : '360'
        originAngle = originAngle ? parseInt(originAngle, 10) : 0
        spin.style.transform = `rotate(${originAngle + 360}deg)`;

        if(page < totalPage) {
            dispatch(actionCreators.changePageList(page + 1))
        } else {
            dispatch(actionCreators.changePageList(1))
        }
    }
})


export default connect(
    mapStateToProps, 
    mapDispachToProps
)(Header) 