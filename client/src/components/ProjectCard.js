import React, { useContext } from 'react';
import { Card, Label } from 'semantic-ui-react';
import { RiMenu4Line } from 'react-icons/ri';
import { AutoContext } from '../AutoContext';

export default function ProjectCard(props) {
  const context = useContext(AutoContext);

  const handleProjectSelect = () => {
    context[11]({ type: 'project', project: props.id });
    context[9]({ ...context[8], team: null });
  };

  return (
    <Label
      className="clickable"
      color={props.color}
      style={{
        position: 'relative',
        height: '100px',
        width: '160px',
        borderRadius: '5px',
        boxShadow: '1px 1px 5px grey',
        margin: '4px 4px 4px',
        fontWeight: 'bold',
        color: 'white',
        padding: 0,
      }}
      onClick={handleProjectSelect}
    >
      <div className="flex-row" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-60%, -50%)', padding: '4px'}}>
          <RiMenu4Line
            // color="lightblue"
            style={{ fontSize: '20px', margin: '1px', color: 'rgba(255, 255, 255, .2)' }}
          />
          <h1 className="race-font" style={{ color: 'rgba(255, 255, 255, .2)'}}>
            A
          </h1>
        </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          width: 'inherit',
          height: 'inherit',
          padding: '5px',
          borderRadius: '5px',
          background: `linear-gradient(to bottom, transparent, rgba(10, 10, 10, .4))`,
        }}
      >
        
        {props.title}
      </div>
    </Label>
  );
}
