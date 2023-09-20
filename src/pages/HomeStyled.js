import styled from 'styled-components';


export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
  border-radius: 15px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.9);
`;

export const Items = styled.ul`
 display: flex;
 flex-wrap: wrap;
`;

export const Item = styled.li`
 display: flex;
 width: 200px;
`;

export const CardTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
`;

export const CardText = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;
