import React from "react";
import './handLoader.css'
const HandLoader = () => {
  return (
    <>
      <div className="loading">
        <div className="finger finger-1">
          <div className="finger-item">
            <span></span>
            <i></i>
          </div>
        </div>
        <div className="finger finger-2">
          <div className="finger-item">
            <span></span>
            <i></i>
          </div>
        </div>
        <div className="finger finger-3">
          <div className="finger-item">
            <span></span>
            <i></i>
          </div>
        </div>
        <div className="finger finger-4">
          <div className="finger-item">
            <span></span>
            <i></i>
          </div>
        </div>
        <div className="last-finger">
          <div className="last-finger-item">
            <i></i>
          </div>
        </div>
      </div>
      {/* 
<div classname="credits-info">
  <h1>Hand animation - loading</h1>
  <p>I really liked that little hand animation so I decided to recreate it in good pure CSS only.<br>No JS was harmed.</p>
  <p>Source on <a href="http://drbl.in/1945392" target="_blank">Dribbble</a>.</p>
  <p><a href="https://twitter.com/r4ms3scz" target="_blank">@r4ms3scz</a> <span>x</span> <a href="https://twitter.com/ToshTak" target="_blank">@ToshTak</a></p>
  <p>
    <a href=""></a>
  </p>
</div> */}
    </>
  );
};

export default HandLoader;
