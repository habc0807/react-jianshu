import React from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearchWrapper, NavSearch, Addition, Button } from './style.js'


const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='search'>
                    <NavSearchWrapper>
                        <CSSTransition
                            in={props.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch 
                                className={props.focused ? 'focused' : ''}
                                onFocus={props.handleInputFocus}
                                onBlur={props.handleInputBlur}
                            />
                        </CSSTransition>
                        <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</span>

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

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
};

const mapDispachToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search-focus'
            }
            dispatch(action)
        },
        handleInputBlur() {
            const action = {
                type: 'search-blur'
            }
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispachToProps
)(Header) 