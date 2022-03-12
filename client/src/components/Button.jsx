import styled from 'styled-components'

const Button = styled.button`
   align-items: center;
    appearance: none;
    background-image: radial-gradient(100%100%at 100%0,#555555 0,#1f1f1f 100%);
    border: 0;
    border-radius: 6px;
    box-shadow: #0f0c17d7 0 2px 4px,#2b24394d 0 7px 13px-3px,#3a416f80 0-3px 0 inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono",monospace;
    height: 25px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    margin-left: 10px;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 15px;

    &:focus {
        box-shadow: #7e7e7e 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #838383 0 -3px 0 inset;
    }

    &:hover {
        box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #6f6f6f 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: #181818 0 3px 7px inset;
        transform: translateY(2px);
    } 
`

export default Button;