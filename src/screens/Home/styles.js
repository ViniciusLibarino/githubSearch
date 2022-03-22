import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  border-radius: 8px;
  border-width: 1px;
  border-color: #d6d6d6;
  padding: 0 12px;
  height: 45px;
  width: 74%;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: 45px;
  width: 24%;
  background-color: #1e90ff;
  border-radius: 8px;
`;

export const ListContainer = styled.View`
  flex: 1;
  margin-top: 15%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #d6d6d6;
  margin-bottom: 8%;
`;

export const List = styled.FlatList``;
