import React, { useEffect } from 'react';
import { View, Text, Alert, Linking } from 'react-native';
import { Avatar, Header, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

// import { Container } from './styles';

const Contato = ({ route }) => {
	const { nome, avatar_url, telefone, email, instagram, facebook } = route.params;

	return (
		<View style={{ display: 'flex', flex: 1 }}>
			<View style={styles.container}>
				<Avatar
					rounded
					size="xlarge"
					source={{
						uri: avatar_url,
					}}
				/>

				<Text style={styles.title}>{nome}</Text>
				<Text style={styles.phoneNumber}>{telefone}</Text>
				<Text style={styles.mail}>{email}</Text>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'space-around',
						width: '100%',
						justifyContent: 'center',

						marginTop: 10,
					}}
				>
					<Button
						icon={
							<Entypo
								name="facebook"
								size={22}
								color="white"
								onPress={async () => await Linking.openURL(facebook)}
							/>
						}
						iconLeft
					/>
					<Button
						icon={
							<Entypo
								onPress={async () => await Linking.openURL(instagram)}
								name="instagram"
								size={22}
								color="white"
							/>
						}
						buttonStyle={{ marginLeft: 10, backgroundColor: '#950fd4' }}
						iconLeft
					/>
				</View>
			</View>
		</View>
	);
};

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'center',

		alignItems: 'center',
	},
	title: {
		fontSize: 30,
	},
	phoneNumber: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	mail: {
		fontSize: 14,
	},
};

export default Contato;
