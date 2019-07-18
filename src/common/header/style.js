import styled from 'styled-components'
import logoPic from '../../statics/nav-logo.png';

export const HeaderWrapper = styled.div`
    display: flex;
    height: 56px;
    border: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    width: 100px;
    height: 56px;
    background: url(${logoPic}) no-repeat;
    background-size: contain;
`

export const Nav = styled.div`
  flex: 1;
  width: auto;
  padding-left: 120px;
  padding-right: 70px;
  height: 100%;
  margin: 0 auto; 
  display: flex;
  align-items: center;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 15px;
    font-size: 17px;
    color: #333;
    white-space: nowrap;
    &.active {
        color: #ea6f5a;
    }
    &.search {
        flex: 1;
        display: flex;
        align-items: center;
    }
`

export const NavSearchWrapper = styled.div`
    margin-left: 10px;
    position: relative;
    .iconfont {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background: #eee;
        border-radius: 50%;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-left: 20px;
    padding: 0 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    color: #333;
    background: #eee;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 200px;
    }
    &.slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-enter-done {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
        width: 160px;
    }
    &.slide-exit-active {
        width: 160px;
    }
    &.slide-exit-done {
        width: 160px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
`

export const SearchInfoList = styled.div`
    display: flex;
    padding-top: 10px;
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    margin-right: 5px;
    margin-bottom: 10px;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`

export const Addition = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    padding: 10px 0;
`

export const Button = styled.div`
    margin-left: 20px;
    padding: 10px 20px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    white-space: nowrap;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec4149;
    }
`

