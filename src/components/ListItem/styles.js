import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 60px;
  margin-bottom: 20px;
  padding-left: 12px;
  padding-right: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 8px;
`;

export const Username = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #d6d6d6;
  margin-left: 20px;
`;
