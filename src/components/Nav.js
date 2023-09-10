import React, {useEffect, useState} from 'react';
import "../Css/Nav.css"
const Nav = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log("effect");
        window.addEventListener('scroll',() => {
            console.log(window.scrollY);
            if(window.scrollY > 50){
                setShow(true);
            }else{
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll',ev => {

            });
        };
    },[]);

    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img
                alt='Netflix logo'
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAB6CAMAAADEb0yoAAAAeFBMVEX////lCRTkAAD829zlAA7qKSznAAD+9PTsXF35xMX4uLr6ycv96enyc3f2rK/5zc75qaztT1HwcXHnFxr/+vvsR0z74OH+7/DoOjv0j5D71tfpISXwa2vyk5TvZmr4s7XzmZvwen3xVVrpMDLxh4nrQET1oaPvNTyK3sDpAAAE2klEQVR4nO2Z25aiOhBAQwhBBO8RFGwRUfz/PxySClexl8RxWOes2i/dgQDZWFQqQAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIP9/QlsS6ZawW003tnuETZcOsSh3BE+bA3kS6OD2LivUuWO4kO4uuoOIBRmJe04cx0mOlZoj2aWq4TGnS3KVXfaJ02dnlzuy/vbdT7nVV1vZqnfdgKvNczX4GRzp633eTl3sMV5mRhlj9B5oGSahSzgpZ13oXnY5UNaHSplFfzuVt8hXJ6FPMqozVzJkrRo0g11iC831WBcpY5XQeS0jW5WM1UXLMKsPB5l+d5BR/z7LqOPgsnYuT8kOoWrFO9XKQ2OZ7ZQy5ASDgMveoJGNdqlkGI+mlPFh/Hc1Iq7OT8f/MJWMRdOXMrRBXi3M4X+rvTOuZVir++1dGaIiy+JSYE3r+2Yss3klQ3/WNdI4Wsr/ljc4LFOtIqpk2KGoexert2UudWi5d/DyPpBhSfxChg//3vCY8rTZomTopjejvCejH/oyqc4hyK4RGU8lY9HLK5l48MAVyCyfZHqjeE9GLKq2zgXj83JHRt3SqWRICg4LWz3+LAk+koFBTybjQpwleqa4mbi0ZFRin0xGzy5MTxQGebkjw3IxpYzdmtToaXRZ1pNRU82QjD1OxiibyYq3HgizTPJyTyYTn8uwu7fyFfY4GT1Zqs77/oJhvAxzwiEZ9ng88kdZkz86GeaFjMV0CcB1qLwtE+RVmUSXxIyWjIyzoXKmKuiTt2T6cf+2TH0844Y/TFMBqHj/rdBk35ZZ6cvRIzEEZFjuKIlgShmyhzh1hh/St2XoWVURtAj+gowKShOZI3TdmuXlRiZbqj8zKPiGlwDWewlgB0qjEwBxE5UBqgXnBzIRZfLmp8nzEiA7Ho8/ks50+Do1Q2b29Vz7vsy8qhLnxBAtsyU63NR9nWLSJGRTyZisy7oyaevx/UjGsJwh3q6aZwwrs5ZMkLAXMv+mNhNZUwGY1cwtGdKcbBIZmBQgHR6MVjNtmZRPKnNphTkzTAGNTPRgE8q4FuRleAPw0RJAvQNsavAJZJawwtyoJ5dxszhryfjflPGF6NztnowuEbmnX2dePpURDhuUCYmIAnvleem6NfSRMpttlt1+inU698IBGejF7hEsOOnBKM5aMuRIh2To5rq/H/Jkx+CNppFMVRNxyngxIAMhXtbLQr8uNlprtmV8iw3IWEx/qujOzSNlGiCEujIBdJILmaXxa/OuTLQflGmN41syEBP0TOrPG7lJCmjL1HFmLFOuR01k4MMCg89rUHzT4lMZ+zcZ9YGtPUj5CPDWa9QTl9x7Mh5vvgrA8vtZRofWWdWoMTQen8qQB+3JsPoLhbVLHOfaHBgs5563iltDF66id4FgWVyOt2x7nm32hzx3Eq5lpBvICKiXq9L/AJ7DM8IImUtPhu8em/NCptS558dhYPJqvn2xKAhjSM3R9nQ9JPARwaMyuzBHp+PCOAV0ZWKIHf0kuKswCCLXeBX7K6I0C+Ab/XGfM87riTKGKuBu+E2T0ZNuXW5FGoffGf5viCie11ddyAg0eXvmXsuJLNmb5I6vEWczp/ylNqMPFKkXmr5z+yYi8It/HyAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI8p/gD1S2XNBhw6umAAAAAElFTkSuQmCC'
                className='nav__logo'
                onClick={event => window.location.reload()}
            />
            <img
                alt='User Logged'
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEUNfoD///8Ae30AeHoAdXcAbnAYgILw9/egxMWXwcLY6Ojh7u70+fno8fFlo6T5/f2syso2iozB29uJs7Rcl5ltqKlZnZ/I3d2Pu7x/rrDA1tdDlZdPk5QoiYtRmZp2ra+109QMeI77AAACHklEQVR4nO2Y65KjIBCFpcEbKkazio5j4vs/5ZrJDVKZCS7szk7V+X4m1aePjSDdUQQAAAAAAAAAAADw/0Ir3yhGvFHdr4QH8XAV2xDCe50yxoosCeDgIlbl7mJ8zy4U/g7EUF/E5OwoxkfGgjkwxSrHmDm9x7Bsy9I9ISk3i5meV9eJV35brHQqp2jNGNZ7rQF/s8QmF7G4smI6rzUgvV0sllaM8quAbUC5GBCZGVK/exkQO8uA00YkZYZIv21IB0vMbTmtsjkV7QuEKda5PQ3NxS0k98xviWXCNai52C4H3/yGWDq4ryaR2hWVHCb//B9iS1XJvNkkRiKO4zBf48BiAAAAAPjJBBw4/AlcHLo5xA3rrEZi2+NwUmu/Ux/DFIGSXGq1oaI8UuebadkEMXBuX9vZrQokxHjr9vxa3atif1Fre/HKAwmuFqM1CWOgu+kVw/T520BcJCq3em3tN224CjfG1KOU+ZQQf7h0n35Imu6tqM309RJi6LUi9pYuq3Q2TpG4E01jrgv2wDLFQdKfHMzto/rJh9Rt22pZPfmPpVmyced+CfGDLp/leU4tx0BDT9PCe5a+Tv1RmaWPgh2BpgURHXX9Knu6qK2n5ga4EMed/NREpYfp5Unh7YHT3OdvsirvPuoylXrXNdHj7vxL0HrYRk1zUN1+Zey6w9QkXPzrfpxoPX3OfPOHHwAAAAAAAAAAAAAAAAD4UfwGyQIUad0Ix1IAAAAASUVORK5CYII='
                className='nav__avatar'
            />
        </nav>
    );
};

export default Nav;