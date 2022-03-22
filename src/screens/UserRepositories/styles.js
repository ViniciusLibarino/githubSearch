import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15%;
`;

export const Question = styled.Text`
  font-size: 16px;
  color: #d6d6d6;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #d6d6d6;
`;

export const RepositoriesList = styled.FlatList``;

export const RepositoryItem = styled.TouchableOpacity`
  height: 60px;
  margin-bottom: 20px;
  padding-left: 12px;
  padding-right: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const RepositoryWrapper = styled.View`
  margin-left: 20px;
  padding-top: 8px;
  justify-content: center;
`;

export const RepositoryTitle = styled.Text`
  font-size: 14px;
  color: #040404;
  font-weight: 700;
`;

export const RepositoryDescription = styled.Text`
  font-size: 12px;
  color: #d6d6d6;
`;
