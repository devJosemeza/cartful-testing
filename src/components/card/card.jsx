import React from 'react';
import { CardStyles } from './CardStyles';

export const Card = ({className, icon, title, subtitle, color, isSelected, isAnySelected, onClick }) => {
  return (
    <CardStyles
      style={{ backgroundColor:  color }}
      onClick={onClick}
      isSelected={isSelected}
      isAnySelected={isAnySelected}
      color={color}
      className={className}
    >
      <div className="content">
        <div className="icon">
          <img src={icon} width={100} height={100} alt='icon'/>
        </div>
        <div className="title">
          <p>{title}</p>
        </div>

        { subtitle !== "" && (
            <div className="subtitle">
              <p>{subtitle}</p>
            </div>
        )}
      </div>
    </CardStyles>
  );
};


