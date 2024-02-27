import React from "react";
import '../Estilos-Sass/button.scss'



function Button(props){
  const variante = props.variant;
  const posIcono = props.posIcon;
  const contGlobal = props.contenido;

  function getClase() {
    if (variante === 'default') {
      return 'default';
    } else if(variante === 'default2'){
      return 'default2';
    } else if (variante === 'outline') {
      return 'outline';
    } else if (variante === 'outline2') {
      return 'outline2';
    } else if (variante === 'text') {
      return 'text';
    } else if (variante === 'text2') {
      return 'text2';
    } else if (variante ==='primary_hover'){
      return 'primary_hover';
    }else if (variante ==='primary_hover2'){
      return 'primary_hover2';
    }else if (variante ==='secondary_hover'){
      return 'secondary_hover';
    }else if (variante ==='secondary_hover2'){
      return 'secondary_hover2';
    }else if (variante ==='danger_hover'){
      return 'danger_hover';
    }else if (variante ==='danger_hover2'){
      return 'danger_hover2';
    }
  }

  return(
    <div className={getClase()} style={props.disable}>
      <ContVariable variante={variante} posIcono={posIcono} cont={contGlobal}/>
    </div>
  );
}

function ContVariable(props){
  const { variante, posIcono} = props;
  if(posIcono=="start"){
    return (
        <>
          <span className='material-symbols-outlined'>
            add_shopping_cart
          </span>
          {props.cont} 
        </>
    );
  } else if (posIcono=="end"){
        return (
          <>
          {props.cont}  
          <span className='material-symbols-outlined'>
            add_shopping_cart
          </span>
        </>
        );
  }
  else if(posIcono==null){
    return (
        <>
          {props.cont}           
        </>
    );
  }
}

export default Button;

