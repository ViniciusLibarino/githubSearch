import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #d6d6d6;
  margin-bottom: 10%;
`;

export const FavoriteList = styled.FlatList``;

export const ListWrapper = styled.View`
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

export const RemoveButton = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

export const Username = styled.Text`
  font-size: 15px;
  color: #d6d6d6;
  margin-left: 18px;
`;
