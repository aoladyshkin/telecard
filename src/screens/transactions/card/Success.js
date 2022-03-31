import { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { AppLoader } from '../../../components/AppLoader';
import { THEME } from '../../../config'

const showAlert = (title, message, ok) => Alert.prompt(title, message,
[
    {
      text: 'Отмена',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: ok },
    ],
    'plain-text');

const wait = timeout => {
    return new Promise(resolve => {setTimeout(resolve, timeout)});
}
export const CardSuccess = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(true);
    if (refreshing) {
        const f = async () => await wait(1500).then(() => {setRefreshing(false);});
        f()
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <AppLoader size={'large'} />
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: THEME.MENU_COLOR, padding: 20, alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ alignItems: 'center', marginTop: THEME.HEIGHT*0.35 }}>
                <ImageBackground source={require('../../../../assets/in-app-icons/success.png')} style={{ width: 70, height: 70, marginBottom: 30 }} />
                <Text style={{ fontSize: 16, fontFamily: 'InterBold' }}>Деньги отправлены</Text>
            </View>
            <View style={{ position: 'absolute', bottom: 10, width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', width: 50, alignItems: 'center', marginBottom: 50 }}>
                    <TouchableOpacity style={styles.icons} onPress={() => showAlert('Получить чек','Введите почту чтобы получить квитанцию','Отправить')}>
                        <ImageBackground style={{ width: 22, height: 22 }} source={require('../../../../assets/in-app-icons/document.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.tips}>Получить чек</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: THEME.MAIN_COLOR, width: '100%', height: 45, borderRadius: 12, marginBottom: 10 }} onPress={() => navigation.navigate('Main')}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} disabled={true}>
                        <Text style={{ color: '#fff', fontFamily: 'InterRegular' }}>Понятно</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    tips: {
        width: 70,
        textAlign: 'center',
        fontSize: 12,
        marginTop: 10
    },
    icons: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    }
})