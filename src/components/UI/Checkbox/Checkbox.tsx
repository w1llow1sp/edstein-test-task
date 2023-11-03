import React, {ChangeEvent} from 'react';
import './Checkbox.scss'


export type CheckboxPropsType = {
    checked: boolean
    id: string
    callback: ( e: ChangeEvent<HTMLInputElement>)=> void
}
const Checkbox = ( {id,checked,callback}:CheckboxPropsType) => {
    return (
        <div className="checkbox-wrapper-45">
            <input id={id} checked={checked} onChange={callback}  type="checkbox"/>
            <label className="cbx" htmlFor={id}>
                <div className="flip">
                    <div className="front"></div>
                    <div className="back">
                        <svg width="16" height="14" viewBox="0 0 16 14">
                            <path d="M2 8.5L6 12.5L14 1.5"></path>
                        </svg>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default Checkbox;

/*
* <div class="checkbox-wrapper-45">
  <input id="cbx-45" type="checkbox"/>
  <label class="cbx" for="cbx-45">
    <div class="flip">
      <div class="front"></div>
      <div class="back">
        <svg width="16" height="14" viewBox="0 0 16 14">
          <path d="M2 8.5L6 12.5L14 1.5"></path>
        </svg>
      </div>
    </div>
  </label>
</div>

<style>
  .checkbox-wrapper-45 {
    position: relative;
  }

  .checkbox-wrapper-45 input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }
  .checkbox-wrapper-45 .cbx {
    -webkit-perspective: 20;
    perspective: 20;
    display: inline-block;
    border: 2px solid #e8e8eb;
    background: #e8e8eb;
    border-radius: 4px;
    transform: translate3d(0, 0, 0);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .checkbox-wrapper-45 .cbx:hover {
    border-color: #0b76ef;
  }
  .checkbox-wrapper-45 .flip {
    display: block;
    transition: all 0.4s ease;
    transform-style: preserve-3d;
    position: relative;
    width: 20px;
    height: 20px;
  }
  .checkbox-wrapper-45 input[type="checkbox"]:checked + .cbx {
    border-color: #0b76ef;
  }
  .checkbox-wrapper-45 input[type="checkbox"]:checked + .cbx .flip {
    transform: rotateY(180deg);
  }
  .checkbox-wrapper-45 .front,
  .checkbox-wrapper-45 .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 2px;
  }
  .checkbox-wrapper-45 .front {
    background: #fff;
    z-index: 1;
  }
  .checkbox-wrapper-45 .back {
    transform: rotateY(180deg);
    background: #0b76ef;
    text-align: center;
    color: #fff;
    line-height: 20px;
    box-shadow: 0 0 0 1px #0b76ef;
  }
  .checkbox-wrapper-45 .back svg {
    margin-top: 3px;
    fill: none;
  }
  .checkbox-wrapper-45 .back svg path {
    stroke: #fff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
</style>
*/