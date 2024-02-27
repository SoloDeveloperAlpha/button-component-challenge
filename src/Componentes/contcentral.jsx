import React from "react";
import '../Estilos-Sass/contcentral.scss';
import Button from "./button.jsx";

function ContCentral(){

  const dShadow = {
    width: '100px',
    height: '36px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'5px',
    cursor:'pointer',
    fontFamily: 'var(--Font-Noto)',
    fontWeight: 500,
    boxShadow: 'none',
    color:'white',
    backgroundColor:'var(--ColorDef3)'
  };
  const cartstyle = {
    padding:'0 1em 0 1em',
    width: 'min-content',
    height: '36px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    gap:'.5em',
    borderRadius:'5px',
    cursor:'pointer',
    fontFamily: 'var(--Font-Noto)',
    fontWeight: 500,
    boxShadow: 'none',
    color:'white',
    backgroundColor:'var(--ColorPri1)'
  };

  const disabled={
    width: '100px',
    height: '36px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'5px',
    fontFamily: 'var(--Font-Noto)',
    fontWeight: 500,
    boxShadow: 'none',
    color:'var(--Font-Color1)',
    backgroundColor:'var(--ColorDef1)'
  };
  const disabledtext={
    width: '100px',
    height: '36px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'5px',
    fontFamily: 'var(--Font-Noto)',
    fontWeight: 500,
    boxShadow: 'none',
    color:'var(--Font-Color1)',
  };

  const small = {
    width: '73px',
    height: '32px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    gap:'.5em',
    borderRadius:'5px',
    cursor:'pointer',
    fontFamily: 'var(--Font-Noto)',
    fontWeight: 500,
    boxShadow: 'none',
    color:'white',
    backgroundColor:'var(--ColorPri1)'
  }
  const medium={
    width: '81px',
    height: '36px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    gap:'.5em',
    borderRadius:'5px',
    cursor:'pointer',
    fontFamily: 'var(--Font-Noto)',
    fontWeight: 500,
    boxShadow: 'none',
    color:'white',
    backgroundColor:'var(--ColorPri1)'
  };

  const large = {
    width: '93px',
    height: '42px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    gap:'.5em',
    borderRadius:'5px',
    cursor:'pointer',
    fontFamily: 'var(--Font-Noto)',
    fontWeight: 500,
    boxShadow: 'none',
    color:'white',
    backgroundColor:'var(--ColorPri1)'
  };

  
  return(
    <div className="cont-central">
      <h1>Buttons</h1>
      <div className="fila-botones">
        <div className="fb1c1">
        <label htmlFor="btn1">&lt;Button /&gt;</label>
        <Button variant="default" contenido="Default"/>
        </div>
        <div className="fb1c2">
        <label htmlFor="btn2">&:hover, &:focus</label>
        <Button variant="default2" contenido="Default" />
        </div>
      </div>
      <div className="fila-botones">
        <div className="fb1c1">
        <label htmlFor="btn1">&lt;Button variant="outline" /&gt;</label>
        <Button variant="outline" contenido="Default"/>
        </div>
        <div className="fb1c2">
        <label htmlFor="btn2">&:hover, &:focus</label>
        <Button variant="outline2" contenido="Default"/>
        </div>
      </div>
      <div className="fila-botones">
        <div className="fb1c1">
        <label htmlFor="btn1">&lt;Button variant="text" /&gt;</label>
        <Button variant="text" contenido="Default"/>
        </div>
        <div className="fb1c2">
        <label htmlFor="btn2">&:hover, &:focus</label>
        <Button variant="text2" contenido="Default" />
        </div>
      </div>
      <div className="fila-botones">
        <div className="fb1c1">
        <label htmlFor="btn1">&lt;Button disableShadow /&gt;</label>
        <Button disable={dShadow} contenido="Default"/>
        </div>
      </div>
      <div className="fila-botones2">
        <div className="fb1c1">
        <label htmlFor="btn1">&lt;Button disabled /&gt;</label>
        <Button disable={disabled} contenido="Disabled"/>
        </div>
        <div className="fb1c2">
        <label htmlFor="btn2">&lt;Button variant="text" disabled/&gt;</label>
        <Button variant="text" disable={disabledtext} contenido="Disabled"/>
        </div>
      </div>
      <div className="fila-botones2">
        <div className="fb1c1">
        <label htmlFor="btn1">&lt;Button startIcon="local_grocery_store" /&gt;</label>
        <Button disable={cartstyle} contenido="Default" posIcon="start"/>
        </div>
        <div className="fb1c2">
        <label htmlFor="btn2">&lt;Button endIcon="local_grocery_store"/&gt;</label>
        <Button disable={cartstyle} contenido="Default" posIcon="end"/>
        </div>
      </div>
      <div className="fila-botones2">
        <div className="fb1c1">
        <label htmlFor="btn1">&lt;Button size="sm" /&gt;</label>
        <Button disable={small} contenido="Default" />
        </div>
        <div className="fb1c2">
        <label htmlFor="btn2">&lt;Button size="md"/&gt;</label>
        <Button disable={medium} contenido="Default" />
        </div>
        <div className="fb1c2">
        <label htmlFor="btn2">&lt;Button size="lg"/&gt;</label>
        <Button disable={large} contenido="Default" />
        </div>
      </div>
      <div className="fila-botones3">
        <div className="fb1c1">
        <label htmlFor="btn1">&lt;Button color="default" /&gt;</label>
        <Button variant="default" contenido="Default" />
        </div>
        <div className="fb1c2">
        <label htmlFor="btn2">&lt;Button color="primary"/&gt;</label>
        <Button variant="primary_hover" contenido="Default" />
        </div>
        <div className="fb1c2">
        <label htmlFor="btn2">&lt;Button color="secondary"/&gt;</label>
        <Button variant="secondary_hover" contenido="Secondary"  />
        </div>
        <div className="fb1c2">
        <label htmlFor="btn2">&lt;Button color="danger"/&gt;</label>
        <Button variant="danger_hover" contenido="Danger"  />
        </div>
      </div>
      <div className="fila-botones3">
        <div className="fb1c1">
        <label htmlFor="btn1" style={{color:"gray"}}>&:hover, &:focus</label>
        <Button variant="default2" contenido="Default" />
        </div>
        <div className="fb1c2">
        <label htmlFor="btn2" style={{color:"transparent"}}>&:hover, &:focus</label>
        <Button variant="primary_hover2" contenido="Default" />
        </div>
        <div className="fb1c2">
        <label htmlFor="btn2" style={{color:"transparent"}}>&:hover, &:focus</label>
        <Button variant="secondary_hover2" contenido="Secondary"  />
        </div>
        <div className="fb1c2">
        <label htmlFor="btn2" style={{color:"transparent"}}>&:hover, &:focus</label>
        <Button variant="danger_hover2" contenido="Danger"  />
        </div>
      </div>
      
    </div>
  );
}

export default ContCentral;