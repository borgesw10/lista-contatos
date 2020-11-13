import React from 'react';
import { View, Text, Alert } from 'react-native';
import { ListItem, Avatar, Header } from 'react-native-elements';
import axios from 'axios';

// import { Container } from './styles';

const Lista = ({ navigation }) => {
	const [list, setList] = React.useState([]);

	React.useEffect(() => {
		axios
			.get('https://api.jsonbin.io/b/5fadd6e10f2f494a27e020b5', {
				headers: { 'secret-key': '$2b$10$jkO/4yxAdI.FwA0ftCMSReDTGeg7tn4TXusqH.KEFMvYtwN4CwNpq' },
			})
			.then((res) => setList(res.data))
			.catch((err) => Alert.alert('err'));
	}, []);

	return (
		<View>
			{list.map((l, i) => (
				<ListItem key={i} bottomDivider onPress={() => navigation.navigate('Detalhes', l)}>
					<Avatar source={{ uri: l.avatar_url }} />
					<ListItem.Content>
						<ListItem.Title>{l.nome}</ListItem.Title>
						<ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
			))}
		</View>
	);
};

export default Lista;
